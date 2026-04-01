import React, { useState } from "react";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";
import products from "../data/products";

const MainSection = ({ cart, onAddToCart, onRemove, onCheckout }) => {
  const [view, setView] = useState("products");
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">

    
        <h2 className="text-[2rem] font-extrabold text-center text-gray-900 tracking-tight">
          Premium Digital Tools
        </h2>

        {/* Paragraph */}
        <p className="text-center text-gray-500 text-sm mt-2
                      leading-relaxed max-w-[460px] mx-auto">
          Choose from our curated collection of premium digital
          products designed to boost your productivity and creativity.
        </p>

        {/*Toggle Buttons*/}
        <div className="flex justify-center gap-2 mt-7 mb-9">

          {/* Products Button */}
          <button
            onClick={() => setView("products")}
            className={`px-5 py-[9px] rounded-full text-sm
                        font-semibold border-[1.5px] cursor-pointer
                        transition-all font-[inherit]
                        ${view === "products"
                          ? "bg-purple-600 text-white border-purple-600"
                          : "bg-white text-gray-500 border-gray-200 hover:border-purple-500 hover:text-purple-600"
                        }`}
          >
            Products
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setView("cart")}
            className={`px-5 py-[9px] rounded-full text-sm
                        font-semibold border-[1.5px] cursor-pointer
                        transition-all font-[inherit]
                        ${view === "cart"
                          ? "bg-purple-600 text-white border-purple-600"
                          : "bg-white text-gray-500 border-gray-200 hover:border-purple-500 hover:text-purple-600"
                        }`}
          >
            Cart {cart.length > 0 ? `(${cart.length})` : ""}
          </button>

        </div>

        
        {view === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2
                          lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}

        
        {view === "cart" && (
          <div className="max-w-[720px] mx-auto">
            <div className="bg-white border-[1.5px] border-gray-200
                            rounded-2xl overflow-hidden">

              {/* Cart Heading */}
              <div className="px-7 py-5 font-bold text-gray-900
                              text-base border-b border-gray-100">
                Your Cart
              </div>

              {/* Empty State */}
              {cart.length === 0 ? (
                <div className="text-center py-14 text-gray-400">
                  <div className="text-5xl mb-3">🛒</div>
                  <p className="font-semibold text-gray-600
                                text-base mb-1">
                    Your cart is empty
                  </p>
                  <p className="text-sm mb-5">
                    Browse products and add items to get started
                  </p>
                  <button
                    onClick={() => setView("products")}
                    className="bg-purple-600 hover:bg-purple-700
                               text-white border-none rounded-full
                               px-6 py-2.5 text-sm font-semibold
                               cursor-pointer font-[inherit]
                               transition-colors"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onRemove={onRemove}
                    />
                  ))}

                  {/* Total */}
                  <div className="flex items-center justify-between
                                  px-7 py-4 border-t-[1.5px]
                                  border-gray-200">
                    <span className="text-sm text-gray-500">
                      Total:
                    </span>
                    <span className="text-xl font-extrabold
                                     text-gray-900">
                      ${total}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <div className="px-7 pb-6">
                    <button
                      onClick={onCheckout}
                      className="w-full py-3.5 rounded-full
                                 bg-purple-600 hover:bg-purple-700
                                 text-white font-bold text-[15px]
                                 border-none cursor-pointer
                                 transition-colors font-[inherit]"
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                </>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default MainSection;
