import Product from "../../models/mongoose/Product.js";
import Category from "../../models/mongoose/Category.js";
import mongoose from "mongoose";
import slugify from "slugify";

export const getFilteredProducts = async (req, res) => {
  const { minPrice, maxPrice } = req.query;

  const query = {};
  query.isActive = true;

  if (maxPrice || minPrice) {
    query.price = {};
    if (maxPrice) {
      query.price.$lte = Number(maxPrice);
    }
    if (minPrice) {
      query.price.$gte = Number(minPrice);
    }
  }

  try {
    const products = await Product.find(query);
    return res.status(200).json({
      success: true,
      message: "Fetched filtered products successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { name, description, price, stock, categoryName } = req.body;
    if (!name || price === undefined || price === null) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: "`name` and `price` are required",
      });
    }

    let category = await Category.findOne({ name: categoryName }).session(session);
    if (!category) {
      const createdCategories = await Category.create(
        [
          {
            name: categoryName.trim(),
            slug: slugify(categoryName.trim(), { lower: true, strict: true }),
          },
        ],
        { session }
      );
      category = createdCategories[0];
    }

    const priceVal = parseFloat(price);
    if (Number.isNaN(priceVal)) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ success: false, message: "`price` must be a valid number" });
    }

    const stockVal = stock !== undefined && stock !== null ? parseInt(stock) : 0;

    const createdProducts = await Product.create(
      [
        {
          name: name.trim(),
          slug: slugify(name.trim(), { lower: true, strict: true }),
          description: description ? description.trim() : "",
          price: priceVal,
          category: category._id,
          stock: Number.isNaN(stockVal) ? 0 : stockVal,
        },
      ],
      { session }
    );

    const createdProduct = createdProducts[0];

    await session.commitTransaction();
    session.endSession();
    return res.status(200).json({
      success: true,
      message: "Created new product successfully",
      data: createdProduct,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
