import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const baseUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch(`${baseUrl}/products`);
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`${baseUrl}/product/${id}`, {
      method: 'DELETE',
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`${baseUrl}/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div className="product-list-container">
      <h2> Product List</h2>
      <input
        type="text"
        className="search-product-box"
        placeholder="🔍 Search product..."
        onChange={searchHandle}
      />
      <div className="product-table">
        <div className="product-header">
          <span>#</span>
          <span>Name</span>
          <span>Price</span>
          <span>Category</span>
          <span>Company</span>
          <span>Count</span>
          <span>Actions</span>
        </div>
        {products.length > 0 ? (
          products.map((item, index) => (
            <div className="product-row" key={item._id}>
              <span>{index + 1}</span>
              <span>{item.name}</span>
              <span>{item.price}</span>
              <span>{item.category}</span>
              <span>{item.company}</span>
              <span>{item.count || 1}</span>
              <span className="action-buttons">
                <button className="delete-btn" onClick={() => deleteProduct(item._id)}>
                  Delete
                </button>
                <Link className="update-btn" to={`/update/${item._id}`}>
                  Update
                </Link>
              </span>
            </div>
          ))
        ) : (
          <p className="no-result">❌ No Results Found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
