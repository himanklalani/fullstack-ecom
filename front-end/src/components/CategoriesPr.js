// src/pages/CategoriesPr.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesPr = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Replace this with your API call if needed
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      // Mock categories data
      const data = [
        'Electronics',
        'Laptop',
        'Mobile'
      ];
      setCategories(data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  return (
    <div className="categories-container">
      <h2>Product Categories</h2>
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <Link to={`/category/${cat.toLowerCase()}`} key={index} className="category-card">
            <div className="category-name">{cat}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPr;
