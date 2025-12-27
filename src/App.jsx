import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import SavoryHome from './Savory/Home';
import SavoryAbout from './Savory/About';
import SavoryMenu from './Savory/Menu';
import SavoryReservations from './Savory/Reservations';
import SavoryContact from './Savory/Contact';

import CartPage from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';
import Gallery from './pages/Gallery';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return null;
}

export default function App(){
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SavoryHome />} />
          <Route path="/about" element={<SavoryAbout />} />
          <Route path="/menu" element={<SavoryMenu />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-tracking/:orderId" element={<OrderTracking />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservations" element={<SavoryReservations />} />
          <Route path="/contact" element={<SavoryContact />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
