# Product Form Implementation Examples

## 1. AXIOS ONLY (Complete Implementation)

```jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function CreateProduct() {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    tagsInput: ''  // Store comma-separated string
  });
  
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // ===== HOW TO WIRE INPUT FIELDS =====
  
  // For text/number/textarea inputs - use handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      // Clean up data before sending
      // Convert comma-separated tags string to array
      const tagsArray = formData.tagsInput
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '');

      const dataToSend = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock) || 0,
        category: formData.category,
        tags: tagsArray
      };

      const res = await axios.post('http://localhost:5000/api/v1/products', dataToSend);
      setResponse(res.data);
      
      // Reset form
      setFormData({
        name: '',
        description: '',
        price: '',
        stock: '',
        category: '',
        tagsInput: ''
      });
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Product Name - WIRED */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Wireless Mouse"
        required
      />

      {/* Description - WIRED */}
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter product description..."
        rows="4"
      />

      {/* Price - WIRED */}
      <input
        type="number"
        name="price"
        step="0.01"
        value={formData.price}
        onChange={handleChange}
        placeholder="29.99"
        required
      />

      {/* Stock - WIRED */}
      <input
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        placeholder="100"
      />

      {/* Category - WIRED */}
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Select a category</option>
        <option value="categoryId1">Electronics</option>
        <option value="categoryId2">Clothing</option>
      </select>

      {/* Tags - WIRED (comma-separated input) */}
      <input
        type="text"
        name="tagsInput"
        value={formData.tagsInput}
        onChange={handleChange}
        placeholder="electronics, wireless, bestseller"
      />

      {/* Submit Button */}
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Product'}
      </button>

      {/* Display Response/Error */}
      {response && <div>Success: {JSON.stringify(response)}</div>}
      {error && <div>Error: {error}</div>}
    </form>
  );
}
```

---

## 2. AXIOS + REACT HOOK FORM (Complete Implementation)

```jsx
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function CreateProduct() {
  // Initialize React Hook Form
  const {
    register,           // For registering inputs
    handleSubmit,       // For handling form submission
    reset,              // For resetting form
    formState: { errors, isSubmitting }  // For validation errors and loading state
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      price: '',
      stock: 0,
      category: '',
      tags: []
    }
  });

  // ===== HOW TO WIRE INPUT FIELDS WITH REACT HOOK FORM =====

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      // Clean up data before sending
      // Convert comma-separated tags string to array
      const tagsArray = data.tagsInput
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '');

      const dataToSend = {
        name: data.name,
        description: data.description,
        price: parseFloat(data.price),
        stock: parseInt(data.stock) || 0,
        category: data.category,
        tags: tagsArray
      };

      const res = await axios.post('http://localhost:5000/api/v1/products', dataToSend);
      console.log('Success:', res.data);
      
      // Reset form after successful submission
      reset();
    } catch (err) {
      console.error('Error:', err.response?.data?.message || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Product Name - WIRED WITH VALIDATION */}
      <input
        {...register('name', {
          required: 'Product name is required',
          minLength: { value: 3, message: 'Name must be at least 3 characters' }
        })}
        type="text"
        placeholder="Wireless Mouse"
      />
      {errors.name && <span>{errors.name.message}</span>}

      {/* Description - WIRED */}
      <textarea
        {...register('description')}
        placeholder="Enter product description..."
        rows="4"
      />

      {/* Price - WIRED WITH VALIDATION */}
      <input
        {...register('price', {
          required: 'Price is required',
          min: { value: 0, message: 'Price must be positive' }
        })}
        type="number"
        step="0.01"
        placeholder="29.99"
      />
      {errors.price && <span>{errors.price.message}</span>}

      {/* Stock - WIRED */}
      <input
        {...register('stock', {
          min: { value: 0, message: 'Stock cannot be negative' }
        })}
        type="number"
        placeholder="100"
      />
      {errors.stock && <span>{errors.stock.message}</span>}

      {/* Category - WIRED */}
      <select {...register('category')}>
        <option value="">Select a category</option>
        <option value="categoryId1">Electronics</option>
        <option value="categoryId2">Clothing</option>
      </select>

      {/* Tags - WIRED (comma-separated input) */}
      <input
        {...register('tagsInput')}
        type="text"
        placeholder="electronics, wireless, bestseller"
      />

      {/* Submit Button */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Product'}
      </button>
    </form>
  );
}
```

### Key Differences from Regular State

1. Use `{...register('fieldName')}` instead of `value`/`onChange`
2. Validation is built into `register()`
3. Form data is passed to `onSubmit` automatically
4. No need for manual state management

---

## 3. AXIOS + REACT HOOK FORM + REACT QUERY

```jsx
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';

// API functions
const createProduct = async (productData) => {
  const { data } = await axios.post('http://localhost:5000/api/v1/products', productData);
  return data;
};

const fetchCategories = async () => {
  const { data } = await axios.get('http://localhost:5000/api/v1/categories');
  return data;
};

const fetchTags = async () => {
  const { data } = await axios.get('http://localhost:5000/api/v1/tags');
  return data;
};

export default function CreateProduct() {
  // Fetch categories and tags with React Query
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  });

  const { data: tags } = useQuery({
    queryKey: ['tags'],
    queryFn: fetchTags
  });

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      price: '',
      stock: 0,
      category: '',
      tagsInput: ''  // Comma-separated string
    }
  });

  // React Query mutation for creating product
  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      console.log('Product created:', data);
      reset(); // Reset form on success
    },
    onError: (error) => {
      console.error('Error creating product:', error.response?.data?.message || error.message);
    }
  });

  // Handle form submission
  const onSubmit = (data) => {
    // Convert comma-separated tags string to array
    const tagsArray = data.tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');

    const dataToSend = {
      name: data.name,
      description: data.description,
      price: parseFloat(data.price),
      stock: parseInt(data.stock) || 0,
      category: data.category,
      tags: tagsArray
    };
    mutation.mutate(dataToSend);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: 'Name is required' })} placeholder="Product Name" />
      {errors.name && <span>{errors.name.message}</span>}

      <textarea {...register('description')} placeholder="Description" rows="4" />

      <input
        {...register('price', {
          required: 'Price is required',
          min: { value: 0, message: 'Price must be positive' }
        })}
        type="number"
        step="0.01"
        placeholder="Price"
      />
      {errors.price && <span>{errors.price.message}</span>}

      <input {...register('stock')} type="number" placeholder="Stock" />

      {/* Category dropdown populated from API */}
      <select {...register('category')}>
        <option value="">Select a category</option>
        {categories?.map(cat => (
          <option key={cat._id} value={cat._id}>{cat.name}</option>
        ))}
      </select>

      {/* Tags - comma-separated input */}
      <input
        {...register('tagsInput')}
        type="text"
        placeholder="electronics, wireless, bestseller"
      />
      
      {/* Optional: Show available tags from API for reference */}
      {tags && tags.length > 0 && (
        <div>
          <small>Available tags: {tags.map(tag => tag.name).join(', ')}</small>
        </div>
      )}

      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Creating...' : 'Create Product'}
      </button>

      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>Product created successfully!</div>}
    </form>
  );
}
```

### Benefits of React Query

1. Automatic caching of categories and tags
2. Built-in loading/error states
3. Automatic refetching and cache invalidation
4. Better separation of data fetching and UI logic
5. Optimistic updates and retry logic
