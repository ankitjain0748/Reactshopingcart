import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'

import Cart from './Cart';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import { LoginContext } from './LoginContext';
import ProductDelete from './ProductDelete';
import Products from './Products';
import ProductsAdd from './ProductsAdd';
import ProductsManagement from './ProductsManagement';
import ProductsMoreDetails from './ProductsMoreDetails';
import ProductUpdate from './ProductUpdate';
import Reg from './Reg';
import UserDelete from './UserDelete';
import UsersManagement from './UsersManagement';


function App() {
    const[loginname,setLoginname] = useState(localStorage.getItem('loginname'))
    const[loginstatus,setLoginstatus] = useState(localStorage.getItem('loginstatus'))
    const[cart,setCart] = useState('')
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])
    return ( 
        <>
        <LoginContext.Provider value={{loginname,setLoginname,loginstatus,setLoginstatus,cart,setCart}}>

        <Router>
            <Header/>
        
            <Routes>
            {loginstatus ?
            <>          
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/productsdashboard' element={<ProductsManagement/>}></Route>
                <Route path='/productsadd' element={<ProductsAdd/>}></Route>
                <Route path='/productupdate/:id' element={<ProductUpdate/>}></Route>
                <Route path='/productdelete/:id' element={<ProductDelete/>}></Route>
                <Route path='/usersdashboard' element={<UsersManagement/>}></Route>
                <Route path='/userdelete/:id' element={<UserDelete/>}></Route>
                <Route path='/productsmoredetails/:id' element={<ProductsMoreDetails/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                </>
                :
                <>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/login' element={<Login/>}></Route>  
                <Route path='/reg' element={<Reg/>}></Route>               
                </>
}
            </Routes>
            <Footer/>
            
        </Router>
        </LoginContext.Provider>
        </>
     );
}

export default App;
