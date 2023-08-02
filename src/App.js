import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import './scss/App.scss';
import Layout from './Components/Layout'
import GetingStarted from './Pages/GettingStarted'
import HomePage from './Pages/HomePage'
import Learn from './Pages/Learn'
import Pricing from './Pages/Pricing'
import Reviews from './Pages/Reviews'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="gettingStarted" element={<GetingStarted />} />
            <Route path="learn" element={<Learn />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
