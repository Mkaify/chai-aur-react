import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Compnents/Home.jsx'
import About from './Compnents/About.jsx'
import Contact from './Compnents/Contact.jsx'
import User from './Compnents/User.jsx'
import Github, { githubInfoLoader } from './Compnents/Github.jsx'


// const router = createBrowserRouter(
//   [{
//   path: "/",
//   element: <Layout/>,
//   children: [
//     {path: "",
//     element: <Home/>
//     },
//     {
//       path: "about",
//       element: <About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
// }])

//Second Method for Routing

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>} loader={githubInfoLoader}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
