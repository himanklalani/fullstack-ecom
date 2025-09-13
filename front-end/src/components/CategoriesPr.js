import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesPr = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/products');
      const data = await response.json();
      const uniqueCategories = [...new Set(data.map(item => item.category))];
      setCategories(uniqueCategories);
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
