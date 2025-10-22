// API utility functions for interacting with the backend

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

class API {
  // Generic request handler
  static async request(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // GET request
  static async get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  // POST request
  static async post(endpoint, body) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  // PUT request
  static async put(endpoint, body) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  // DELETE request
  static async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }

  // Users API
  static users = {
    getAll: (params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      return API.get(`/users${queryString ? `?${queryString}` : ''}`);
    },
    
    getById: (id) => API.get(`/users/${id}`),
    
    create: (userData) => API.post('/users', userData),
    
    update: (id, userData) => API.put(`/users/${id}`, userData),
    
    delete: (id) => API.delete(`/users/${id}`),
  };
}

export default API;

