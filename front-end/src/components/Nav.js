import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
  
    const auth= localStorage.getItem('user');
    const navigate= useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signup')
    }

  return (
    <div>
    
<img className="logo" src="/img/blue logo.png" alt="logo" />

        {auth? <ul className="nav-ul">
            
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Products</Link></li>
        {/* <li><Link to="/update">Update Products</Link></li> */}
        <li><Link to="/categories">Category of products</Link></li>
        <li><Link to="/profile">About Us</Link></li>
        <li><Link onClick={logout} to="/signUp">Logout ({JSON.parse(auth).name})</Link></li>
      </ul>
      :<ul className="nav-ul nav-right">
         
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        </ul>}
    </div>
  );
};

export default Nav;
