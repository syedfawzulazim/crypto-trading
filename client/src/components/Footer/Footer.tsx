import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1f222c] ">
      <div className="px-4 py-4 w-full mx-auto xl:max-w-[1400px] text-white">
        <div className="xl:flex">
          <div className="py-8 text-2xl xl:w-2/4"> Footer</div>
          <div className="p-4 md:flex xl:w-full">
            <div className="flex pb-8 md:w-2/4">
              <div className="w-2/4">
                <span className="text-lg font-semibold">Products</span>
                <ul className="pt-4 space-y-2 text-md text-slate-400">
                  <li>
                    <a href=""> Blockchain Explorer</a>
                  </li>
                  <li>
                    <a href=""> Crypto API</a>
                  </li>
                  <li>
                    <a href=""> Crypto Indices</a>
                  </li>
                  <li>
                    <a href=""> Jobs Board</a>
                  </li>
                  <li>
                    <a href=""> Sitemap</a>
                  </li>
                </ul>
              </div>
              <div className="">
                <span className="pt-1 pb-4 text-lg font-semibold">Company</span>
                <ul className="pt-4 space-y-2 text-md text-slate-400">
                  <li>
                    <a href="">About us</a>
                  </li>
                  <li>
                    <a href=""> Terms of use </a>
                  </li>
                  <li>
                    <a href=""> Privacy Policy </a>
                  </li>
                  <li>
                    <a href=""> Community Rules </a>
                  </li>
                  <li>
                    <a href=""> Disclaimer </a>
                  </li>
                  <li>
                    <a href=""> Methodology </a>
                  </li>
                  <li>
                    <a href=""> Careers </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex md:w-2/4">
              <div className="w-2/4">
                <span className="pt-1 pb-4 text-lg font-semibold">Support</span>
                <ul className="pt-4 space-y-2 text-md text-slate-400">
                  <li>
                    <a href="">Request Form</a>
                  </li>
                  <li>
                    <a href=""> Contact Support </a>
                  </li>
                  <li>
                    <a href=""> FAQ </a>
                  </li>
                  <li>
                    <a href=""> Glossary </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <span className="pt-1 pb-4 text-lg font-semibold">Socials</span>
                <ul className="pt-4 space-y-2 text-md text-slate-400">
                  <li>
                    <a href="">Facebook</a>
                  </li>
                  <li>
                    <a href=""> Twitter </a>
                  </li>
                  <li>
                    <a href=""> Telegram </a>
                  </li>
                  <li>
                    <a href=""> Instagram </a>
                  </li>
                  <li>
                    <a href=""> Interactive Chatr </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right text-slate-300">@Syed Fawzul Azim-2022</div>
      </div>
    </div>
  );
};

export default Footer;