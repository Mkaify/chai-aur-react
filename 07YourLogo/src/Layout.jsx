
import Header from './Compnents/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Compnents/Footer'

const Layout = () => {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/> 
    </>
  )
}

export default Layout
