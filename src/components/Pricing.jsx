import React from "react";
import pricingPlans from "../data/pricingPlans";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-[2rem] font-extrabold text-center 
                       text-gray-900 tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-500 text-sm mt-2 leading-relaxed">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 
                        mt-12 items-start">
          {pricingPlans.map((plan) => (
            <div key={plan.id}
                 className={`relative border-[1.5px] rounded-2xl p-8
                             ${plan.featured
                               ? "bg-purple-600 border-purple-600"
                               : "bg-white border-gray-200"
                             }`}>

              {/* Most Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 
                                bg-amber-400 text-white text-[11px] font-bold 
                                px-3.5 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <div className={`text-sm font-medium mb-1
                              ${plan.featured ? "text-white/70" : "text-gray-500"}`}>
                {plan.name}
              </div>

              {/* Price */}
              <div className="mb-1">
                <span className={`text-[2.2rem] font-extrabold tracking-tight
                                  ${plan.featured ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm font-normal
                                  ${plan.featured ? "text-white/70" : "text-gray-500"}`}>
                  {plan.period}
                </span>
              </div>

              {/* Subtitle */}
              <div className={`text-sm mb-5 leading-relaxed
                              ${plan.featured ? "text-white/80" : "text-gray-500"}`}>
                {plan.subtitle}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm
                                          ${plan.featured
                                            ? "text-white/90"
                                            : "text-gray-700"}`}>
                    <span className={`font-bold text-xs flex-shrink-0
                                      ${plan.featured
                                        ? "text-purple-300"
                                        : "text-purple-600"}`}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-[11px] rounded-full font-semibold 
                            text-sm cursor-pointer transition-all 
                            font-[inherit]
                            ${plan.featured ? "bg-white text-purple-600 border-none hover:bg-purple-50"
                              : " text-white bg-purple-600 border-[1.5px] border-purple-600 hover:bg-purple-50"
                            }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;