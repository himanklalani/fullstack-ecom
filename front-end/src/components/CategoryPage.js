import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCategoryProducts();
  }, [categoryName]);

  const fetchCategoryProducts = async () => {
    let result = await fetch(`http://localhost:5000/products`);
    result = await result.json();
    const filtered = result.filter(product => 
      product.category?.toLowerCase() === categoryName.toLowerCase()
    );
    setProducts(filtered);
  };

  return (
    <div className="category-products-container">
      <h2>Products in "{categoryName}"</h2>
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
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
