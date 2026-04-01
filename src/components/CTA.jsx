import React from "react";

const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-purple-800 
                        py-20 px-8 text-center">

      <h2 className="text-[2rem] font-extrabold text-white 
                     mb-3 tracking-tight">
        Ready To Transform Your Workflow?
      </h2>

      <p className="text-white/85 text-[15px] leading-relaxed 
                    mb-8 max-w-lg mx-auto">
        Join thousands of professionals who are already using Digitools
        to work smarter. Start your free trial today.
      </p>

      <div className="flex gap-3 justify-center flex-wrap mb-5">
        <button className="bg-white text-purple-600 border-none 
                           rounded-full px-6 py-[11px] font-semibold 
                           text-sm cursor-pointer hover:bg-purple-50 
                           transition-all font-[inherit]">
          Explore Products
        </button>
        <button className="bg-transparent text-white 
                           border-[1.5px] border-white/50 rounded-full 
                           px-6 py-[11px] font-semibold text-sm 
                           cursor-pointer hover:border-white 
                           hover:bg-white/10 transition-all font-[inherit]">
          View Pricing
        </button>
      </div>

      <p className="text-white/60 text-xs">
        14-day free trial
        <span className="mx-2">•</span>
        No credit card required
        <span className="mx-2">•</span>
        Cancel anytime
      </p>
    </section>
  );
};

export default CTA;