import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Root from './Routes/root.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Categories from './Pages/Categories/Categories';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <Root/>
  ,children:[
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/SignIn',
      element: <SignIn/>
    },
    {
      path: '/SignUp',
      element: <SignUp/>
    },
    {
      path: '/Categories',
      element: <Categories/>
    },
    {
      path: '/Products',
      element: <Products/>
    },
    {
      path: '/Cart',
      element: <Cart/>
    }
  ]
}])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
