import React from 'react';

const AddProduct = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [count, setCount] = React.useState(1);
  const [error, setError] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const AddProduct = async () => {
    if (!name || !price || !category || !company || count < 1) {
      setError(true);
      return;
    }

    setDisabled(true);
    const userId = JSON.parse(localStorage.getItem('user'))._id;

    let result = await fetch('http://localhost:5000/add-product', {
      method: 'POST',
      body: JSON.stringify({ name, price, category, company, userId, count }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    result = await result.json();
    alert(result.result || 'Product added/updated');
    setDisabled(false);

    // Reset inputs
    setName('');
    setPrice('');
    setCategory('');
    setCompany('');
    setCount(1);
  };

  return (
    <div className='product'>
      <h1>Add Products</h1>

      <input
        type='text'
        placeholder='Enter product name'
        className='inputBox'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error && !name && <span className='invalid-input'>Enter valid name</span>}

      <input
        type='text'
        placeholder='Enter product price'
        className='inputBox'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {error && !price && <span className='invalid-input'>Enter valid price</span>}

      <input
        type='text'
        placeholder='Enter product category'
        className='inputBox'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      {error && !category && <span className='invalid-input'>Enter valid category</span>}

      <input
        type='text'
        placeholder='Enter product company'
        className='inputBox'
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      {error && !company && <span className='invalid-input'>Enter valid company</span>}

      <input
        type='number'
        placeholder='Enter count'
        className='inputBox'
        value={count}
        min={1}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      {error && (!count || count < 1) && <span className='invalid-input'>Enter valid count</span>}

      <button onClick={AddProduct} className='appButton' disabled={disabled}>
        {disabled ? 'Adding...' : 'Add Product'}
      </button>
    </div>
  );
};

export default AddProduct;
