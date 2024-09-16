import {Provider} from "react-redux"
import './App.css'
import Navabar from './Navbar'
import Home from './Home'
import store from "./utility/Store"
import Card from "./Card"
import CircleProduct from "./CircleProduct"
import { Outlet } from "react-router";
import productReceipes from "./Product"
// import productReceipes from "./Product"
function App() {


  return (
     <>
     {/* <Provider store={store}> */}
     <Navabar></Navabar>
      <Card ></Card> 
    
     
      <CircleProduct></CircleProduct> 
     <Home obj={productReceipes}></Home>
      {/* <Outlet></Outlet>  */}
      {/* </Provider>  */}
    </>
  )
}

export default App
