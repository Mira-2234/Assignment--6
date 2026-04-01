import React, { useEffect, useRef } from "react";
import CartItem from "./CartItem"; 

const CartDropdown = ({ cart, onClose, onRemove, onCheckout }) => {
  const ref = useRef(null);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    setTimeout(() => document.addEventListener("mousedown", handler), 0);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div className="fixed top-16 right-6 " ref={ref}>
      <div className="w-[400px] bg-white border-[1.5px] border-gray-200 rounded-2xl overflow-hidden
                      shadow-[0_20px_60px_rgba(0,0,0,0.15)] animate-[dropIn_0.2s_ease]">

        
        <style>{`
          @keyframes dropIn {
            from { opacity:0; transform:translateY(-8px) }
            to   { opacity:1; transform:translateY(0) }
          }
        `}</style>

        {/* Header */}
        <div className="flex items-center justify-between 
                        px-5 py-4 border-b border-gray-100">
          <span className="font-bold text-base text-gray-900">
            Your Cart
          </span>
          <button
            onClick={onClose}
            className="bg-transparent border-none cursor-pointer 
                       text-gray-400 text-lg hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        
        <div className="max-h-80 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <div className="text-4xl mb-2">🛒</div>
              <p className="font-semibold text-gray-600 text-sm">
                Cart is empty
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <CartItem key={item.id} item={item} onRemove={onRemove} />
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-200">
            <div className="flex justify-between mb-3">
              <span className="text-sm text-gray-500">Total:</span>
              <span className="text-lg font-extrabold text-gray-900">
                ${total}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-3 rounded-full bg-purple-600 
                         hover:bg-purple-700 text-white font-bold 
                         text-sm border-none cursor-pointer 
                         transition-colors font-[inherit]"
            >
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;