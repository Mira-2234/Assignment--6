import React, { useState } from "react";
import TagBadge from "./TagBadge";

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleBuy = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="relative bg-white border-[1.5px] border-gray-200
                    rounded-2xl p-6 flex flex-col gap-3
                    hover:border-purple-200
                    hover:shadow-[0_8px_30px_rgba(124,58,237,0.10)]
                    transition-all duration-200">

      {/* Badge */}
      <TagBadge tagType={product.tagType} tag={product.tag} />

    
      <div className="w-12 h-12 bg-purple-50 rounded-xl
                      flex items-center justify-center">
        <img
          src={product.icon}
          alt={product.name}
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Name */}
      <h3 className="text-[1.05rem] font-bold text-gray-900">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-[13px] text-gray-500 leading-[1.55]">
        {product.description}
      </p>

      {/* Price */}
      <div className="text-[1.3rem] font-extrabold text-gray-900">
        ${product.price}
        <span className="text-sm font-normal text-gray-500">
          {product.period}
        </span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-1.5 flex-1">
        {product.features.map((f) => (
          <li key={f} className="flex items-center gap-2
                                  text-[13px] text-gray-700">
            <span className="text-purple-600 font-bold text-xs flex-shrink-0">
              
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* Buy Now Button */}
      <button
        onClick={handleBuy}
        className={`w-full py-[10px] rounded-full font-semibold
                    text-sm border-none cursor-pointer
                    transition-all duration-200 font-[inherit] mt-1
                    ${added
                      ? "bg-green-500 text-white scale-[0.97]"
                      : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
      >
        {added ? "Added to Cart" : "Buy Now"}
      </button>

    </div>
  );
};

export default ProductCard;