import { BASE_URL_MONGOOSE } from ".";

const PRODUCTS_MONGOOSE = `${BASE_URL_MONGOOSE}/products`;
const PRODUCT_BY_ID = (id) => `${PRODUCTS_MONGOOSE}/${id}`;

// const GET_PRODUCTS = PRODUCTS;
const CREATE_PRODUCT = `${PRODUCTS_MONGOOSE}/create-product`;
// const GET_PRODUCT = (id) => PRODUCT_BY_ID(id);
// const UPDATE_PRODUCT = (id) => PRODUCT_BY_ID(id);
// const DELETE_PRODUCT = (id) => PRODUCT_BY_ID(id);

export {
	// PRODUCTS,
	// PRODUCT_BY_ID,
	// GET_PRODUCTS,
	CREATE_PRODUCT,
	// GET_PRODUCT,
	// UPDATE_PRODUCT,
	// DELETE_PRODUCT
};


