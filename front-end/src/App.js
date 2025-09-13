import './App.css';
import Nav from './components/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from'./components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateComponent';
import AboutUs from './components/AboutUs';
import CategoriesPr from './components/CategoriesPr';
import CategoryProductList from './components/CategoryProductList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* MAIN CONTENT WRAPPER */}
        <div className="main-content">
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<ProductList/>} />
              <Route path="/add" element={<AddProduct/>} />
              <Route path="/update/:id" element={<UpdateProduct />} />
              <Route path="/logout" element={<h1>Logout component</h1>} />
              <Route path="/profile" element={<AboutUs/>} />
              <Route path="/categories" element={<CategoriesPr />} />
              <Route path="/category/:categoryName" element={<CategoryProductList />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        {/* END MAIN CONTENT WRAPPER */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
