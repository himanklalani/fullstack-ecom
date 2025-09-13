// src/components/CategoryProductList.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryProductList = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory();
  }, [categoryName]);

  const fetchProductsByCategory = async () => {
    try {
      let result = await fetch('http://localhost:5000/products');
      result = await result.json();
      const filtered = result.filter(
        (p) => p.category?.toLowerCase() === categoryName.toLowerCase()
      );
      setProducts(filtered);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="product-list-container">
      <h2>Products in "{categoryName}"</h2>
      <div className="product-table">
        <div className="product-header">
          <span>#</span>
          <span>Name</span>
          <span>Price</span>
          <span>Category</span>
        </div>
        {products.length > 0 ? (
          products.map((item, index) => (
            <div className="product-row" key={item._id}>
              <span>{index + 1}</span>
              <span>{item.name}</span>
              <span>{item.price}</span>
              <span>{item.category}</span>
            </div>
          ))
        ) : (
          <p className="no-result">❌ No products found in this category</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProductList;
