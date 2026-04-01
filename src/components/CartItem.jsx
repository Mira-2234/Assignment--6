import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center gap-4 px-7 py-3.5 
                    border-b border-gray-100 bg-gray-50">

      {/* Product Icon */}
      <div className="w-9 h-9 bg-white border border-gray-200 rounded-lg 
                      flex items-center justify-center text-xl">
        {item.icon}
      </div>

      {/* Name + Price */}
      <div className="flex-1">
        <div className="font-semibold text-sm text-gray-900">
          {item.name}
        </div>
        <div className="text-xs text-gray-500 mt-0.5">
          ${item.price}
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="bg-transparent border-none text-red-500 text-xs 
                   font-semibold cursor-pointer px-2 py-1 rounded 
                   hover:bg-red-50 transition-colors font-[inherit]"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;