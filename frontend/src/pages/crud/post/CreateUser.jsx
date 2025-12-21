import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateUser() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-purple-950/20 to-slate-950 p-6">
      <div className="mx-auto max-w-2xl">
        <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6">
          ← Back to Home
        </Link>

        <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl border border-slate-800 shadow-2xl p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Create New User</h1>
            <p className="text-slate-400">POST /api/v1/users</p>
          </div>

          <form className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Username <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                placeholder="johndoe123"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                placeholder="john@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password <span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                placeholder="••••••••"
              />
            </div>

            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Role</label>
              <select className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Is Active */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="isActive"
                className="w-4 h-4 rounded border-slate-700 bg-slate-950/60 text-purple-600 focus:ring-2 focus:ring-purple-500/20"
              />
              <label htmlFor="isActive" className="text-sm font-medium text-slate-300">
                Active User
              </label>
            </div>

            {/* Addresses Section */}
            <div className="border-t border-slate-700 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Address Information</h3>
              
              <div className="space-y-4 bg-slate-950/40 rounded-lg p-6 border border-slate-800">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Street</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    placeholder="123 Main St"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">City</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">State</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      placeholder="NY"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Zip Code</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      placeholder="10001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Country</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      placeholder="USA"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-linear-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:shadow-purple-500/40"
            >
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   IMPLEMENTATION EXAMPLES
   ============================================================================ */

// ============================================================================
// 1. VANILLA FETCH METHOD
// ============================================================================
/*
import React, { useState } from 'react';

export default function CreateUser() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 'user',
    isActive: true,
    addresses: [{
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }]
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('http://localhost:5000/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to create user');
      }

      const data = await res.json();
      setResponse(data);
      // Reset form
      setFormData({
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        role: 'user',
        isActive: true,
        addresses: [{ street: '', city: '', state: '', zipCode: '', country: '' }]
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddressChange = (e, index) => {
    const { name, value } = e.target;
    const newAddresses = [...formData.addresses];
    newAddresses[index][name] = value;
    setFormData(prev => ({ ...prev, addresses: newAddresses }));
  };

  return (
    // ... JSX with value={formData.field} and onChange={handleChange}
  );
}
*/

// ============================================================================
// 2. AXIOS METHOD
// ============================================================================
/*
import React, { useState } from 'react';
import axios from 'axios';

export default function CreateUser() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 'user',
    isActive: true,
    addresses: [{
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }]
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axios.post('http://localhost:5000/api/v1/users', formData);
      setResponse(res.data);
      // Reset form
      setFormData({
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        role: 'user',
        isActive: true,
        addresses: [{ street: '', city: '', state: '', zipCode: '', country: '' }]
      });
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddressChange = (e, index) => {
    const { name, value } = e.target;
    const newAddresses = [...formData.addresses];
    newAddresses[index][name] = value;
    setFormData(prev => ({ ...prev, addresses: newAddresses }));
  };

  return (
    // ... JSX with value={formData.field} and onChange={handleChange}
  );
}
*/

// ============================================================================
// 3. AXIOS + REACT QUERY
// ============================================================================
/*
import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

// API function
const createUser = async (userData) => {
  const { data } = await axios.post('http://localhost:5000/api/v1/users', userData);
  return data;
};

export default function CreateUser() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 'user',
    isActive: true,
    addresses: [{
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }]
  });

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log('User created:', data);
      // Reset form
      setFormData({
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        role: 'user',
        isActive: true,
        addresses: [{ street: '', city: '', state: '', zipCode: '', country: '' }]
      });
    },
    onError: (error) => {
      console.error('Error creating user:', error);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddressChange = (e, index) => {
    const { name, value } = e.target;
    const newAddresses = [...formData.addresses];
    newAddresses[index][name] = value;
    setFormData(prev => ({ ...prev, addresses: newAddresses }));
  };

  return (
    // ... JSX with value={formData.field} and onChange={handleChange}
    // Use mutation.isPending, mutation.isError, mutation.error, mutation.data
  );
}
*/

// ============================================================================
// 4. AXIOS + REACT QUERY + REACT HOOK FORM
// ============================================================================
/*
import React from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

// API function
const createUser = async (userData) => {
  const { data } = await axios.post('http://localhost:5000/api/v1/users', userData);
  return data;
};

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      role: 'user',
      isActive: true,
      addresses: [{
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
      }]
    }
  });

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log('User created:', data);
      reset(); // Reset form on success
    },
    onError: (error) => {
      console.error('Error creating user:', error);
    }
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('username', { required: 'Username is required' })}
        type="text"
        placeholder="Username"
      />
      {errors.username && <span>{errors.username.message}</span>}

      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        {...register('password', {
          required: 'Password is required',
          minLength: { value: 6, message: 'Password must be at least 6 characters' }
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && <span>{errors.password.message}</span>}

      <input {...register('firstName')} type="text" placeholder="First Name" />
      <input {...register('lastName')} type="text" placeholder="Last Name" />

      <select {...register('role')}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <input {...register('isActive')} type="checkbox" />

      <input {...register('addresses.0.street')} type="text" placeholder="Street" />
      <input {...register('addresses.0.city')} type="text" placeholder="City" />
      <input {...register('addresses.0.state')} type="text" placeholder="State" />
      <input {...register('addresses.0.zipCode')} type="text" placeholder="Zip Code" />
      <input {...register('addresses.0.country')} type="text" placeholder="Country" />

      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Creating...' : 'Create User'}
      </button>

      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>User created successfully!</div>}
    </form>
  );
}
*/
