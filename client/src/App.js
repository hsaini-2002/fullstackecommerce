import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
const MyContext = createContext();
function App() {

  
  const [countryList,setCountryList]=useState([]);
  const [selectedCountry,setselectedCountry]=useState('');
  const [isOpenProductModal, setisOpenProductModal] = useState(false); 
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[]);

  const getCountry=async(url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data) 
      console.log(res.data.data)
    })
  }
  const values={
      countryList,
      setselectedCountry,
      selectedCountry,
      isOpenProductModal,
      setisOpenProductModal,
      setisHeaderFooterShow,
      isHeaderFooterShow,
      isLogin
  }
  return (
    <BrowserRouter>
     <MyContext.Provider value={values}>
      {
        isHeaderFooterShow === true && <Header />
      }
       
       <Routes>
          <Route path="/" exact={true} element={<Home />}/>
          <Route path="/cat/:id" exact={true} element={<Listing />}/>
          <Route path="/product/:id" exact={true} element={<ProductDetails />}/>
          <Route path="/cart" exact={true} element={<Cart />}/>
          <Route path="/signIn" exact={true} element={<SignIn />}/>
          <Route path="/signUp" exact={true} element={<SignUp />}/>
       </Routes>
       {
        isHeaderFooterShow === true && <Footer/>
      }
       
       {
          isOpenProductModal===true && <ProductModal />
       }
     </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};
