import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import HomePage from '../Pages/HomePage'
import GettingStarted from '../Pages/GettingStarted'
import Learn from '../Pages/Learn'
import Pricing from '../Pages/Pricing'
import Reviews from '../Pages/Reviews'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Layout = () => {
  return (
    <>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
    </>
  )
}

export default Layout