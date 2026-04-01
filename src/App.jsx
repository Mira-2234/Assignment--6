import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import Badge         from "./components/badge";
import MainSection   from "./components/MainSection";
import CartDropdown  from "./components/CartDropdown";
import Steps         from "./components/Steps";
import Pricing       from "./components/Pricing";
import CTA           from "./components/CTA";
import Footer        from "./components/Footer";

const App = () => {
  // ── Cart State ──────────────────────────────
  const [cart, setCart]           = useState([]);
  const [cartOpen, setCartOpen]   = useState(false);

  // ── Add to Cart ─────────────────────────────
  const handleAddToCart = (product) => {
    // Already in cart?
    if (cart.find((i) => i.id === product.id)) {
      toast.warning(`"${product.name}" is already in cart!`);
      return;
    }
    setCart((prev) => [...prev, product]);
    toast.success(`"${product.name}" added to cart!`);
  };

  // ── Remove from Cart ────────────────────────
  const handleRemove = (id) => {
    const item = cart.find((i) => i.id === id);
    setCart((prev) => prev.filter((i) => i.id !== id));
    toast.error(`"${item?.name}" removed from cart.`);
  };

  // ── Checkout ────────────────────────────────
  const handleCheckout = () => {
    setCart([]);
    setCartOpen(false);
    toast.success("Checkout successful! Cart cleared.");
  };

  return (
    <div className="min-h-screen bg-white">

      {/* React Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        theme="light"
      />

      {/* Navbar */}
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setCartOpen((o) => !o)}
      />

      {/* Cart Dropdown (navbar cart icon click এ আসে) */}
      {cartOpen && (
        <CartDropdown
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={handleRemove}
          onCheckout={handleCheckout}
        />
      )}

      {/* Page Sections */}
      <Hero />
      <Badge />
      <MainSection
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
