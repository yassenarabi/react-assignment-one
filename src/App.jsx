import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './combonents/Home/Home'
import About from './combonents/about/About'
import Portfolio from './combonents/portfolio/Portfolio'
import Contact from './combonents/contact/Contact'
import Layout from './combonents/layOut/Layout'


let route = createBrowserRouter([
 {path:"", element:<Layout/> , children:[
  {path:"" , index:true , element:<Home/>},
  {path:"about" , element:<About/>},
  {path:"portfolio" , element:<Portfolio/>},
  {path:"contact" , element:<Contact/>},
 ]
 
 }
])
function App() {
  const [count, setCount] = useState([

  ])

  return (
    <>
    <RouterProvider router={route} >  </RouterProvider>
    </>
  )
}

export default App
