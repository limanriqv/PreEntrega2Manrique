import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCount from './components/ItemCount'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import About from './components/About'
import CartWidget from './components/CartWidget'
import ItemDetail from './components/ItemDetail'
import ProductId from './components/ProductId'
import ProductCategory from './components/ProductCategory'
import Cart from './components/Cart'

const App = () => {
  


  return (
    <BrowserRouter>
      
    <NavBar/>

    <Routes> 

    
    <Route exact path='/' element={< ItemListContainer/>} />  //home

    <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />

    <Route path='/producto/:id' element={<ItemDetailContainer/>} />

    <Route exact path='/Cart' element={< Cart/>} />



    </Routes> 
    




    <ItemListContainer/>
    <ItemDetailContainer/>
      
      
    </BrowserRouter>
  )
}

export default App
