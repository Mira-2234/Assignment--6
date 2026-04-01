import React from "react";

const steps = [
  {
    num:   "01",
    icon:  "/src/assets/user.png",
    title: "Create Account",
    desc:  "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    num:   "02",
    icon:  "/src/assets/package.png",  // ← package.png নেই তাই rocket.png
    title: "Choose Products",
    desc:  "Browse our catalog and select the tools that fit your needs.",
  },
  {
    num:   "03",
    icon:  "/src/assets/rocket.png",
    title: "Start Creating",
    desc:  "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <section id="features" className="bg-[#f0f4f8] py-20">
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}
        <h2 className="text-[2rem] font-extrabold text-center
                       text-gray-900 tracking-tight">
          Get Started In 3 Steps
        </h2>

        {/* Paragraph */}
        <p className="text-center text-gray-500 text-sm mt-2 leading-relaxed">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {steps.map(({ num, icon, title, desc }) => (
            <div key={num}
                 className="bg-white rounded-2xl p-10 
                            text-center relative">

              {/* Number Badge — top right */}
              <div className="absolute top-5 right-5 w-[30px] h-[30px]
                              bg-purple-600 text-white rounded-full
                              text-[11px] font-extrabold
                              flex items-center justify-center">
                {num}
              </div>

              {/* Icon Circle — image দিয়ে */}
              <div className="w-[72px] h-[72px] bg-purple-50 rounded-full
                              mx-auto mb-5 flex items-center
                              justify-center">
                <img
                  src={icon}
                  alt={title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed
                            max-w-[200px] mx-auto">
                {desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;