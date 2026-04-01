import React from "react";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Templates", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "Community", "Contact"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#18181b] pt-14 pb-0">
      <div className="max-w-6xl mx-auto px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-extrabold text-white mb-3">
              DigiTools
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[230px]">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <div className="text-xs font-bold text-white uppercase 
                              tracking-widest mb-3.5">
                {title}
              </div>
              <ul className="list-none flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#"
                       className="text-zinc-500 text-sm no-underline 
                                  hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div>
            <div className="text-xs font-bold text-white uppercase 
                            tracking-widest mb-3.5">
              Social Links
            </div>
            <div className="flex gap-2">
              {[
                { label: "YouTube",   icon: "▶" },
                { label: "Facebook",  icon: "f" },
                { label: "X",         icon: "𝕏" },
              ].map(({ label, icon }) => (
                <a key={label} href="#" aria-label={label}
                   className="w-[34px] h-[34px] bg-zinc-800 rounded-lg 
                              flex items-center justify-center text-sm 
                              text-white no-underline border border-zinc-700 
                              hover:bg-purple-600 hover:border-purple-600 
                              transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom*/}
        <div className="border-t border-zinc-800 py-5 
                        flex items-center justify-between 
                        flex-wrap gap-3">
          <span className="text-xs text-zinc-500">
            © 2026 Digitools. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a key={item} href="#"
                 className="text-xs text-zinc-500 no-underline 
                            hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;