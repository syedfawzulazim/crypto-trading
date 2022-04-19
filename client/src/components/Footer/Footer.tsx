import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="dark:bg-[#1f222c] ">
      <div className="px-4 py-4 w-full mx-auto xl:max-w-[1400px] dark:text-white text-slate-900">
        <div className="xl:flex">
          <div className="py-8 text-2xl xl:w-2/4"> Footer</div>
          <div className="p-4 md:flex xl:w-full">
            <div className="flex pb-8 md:w-2/4">
              <div className="w-2/4">
                <span className="text-lg font-semibold">Products</span>
                <ul className="pt-4 space-y-2 text-md dark:text-slate-400 text-slate-700">
                  <li>
                    <a> Blockchain Explorer</a>
                  </li>
                  <li>
                    <a> Crypto API</a>
                  </li>
                  <li>
                    <a> Crypto Indices</a>
                  </li>
                  <li>
                    <a> Jobs Board</a>
                  </li>
                  <li>
                    <a> Sitemap</a>
                  </li>
                </ul>
              </div>
              <div className="">
                <span className="pt-1 pb-4 text-lg font-semibold">Company</span>
                <ul className="pt-4 space-y-2 text-md dark:text-slate-400 text-slate-700">
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a> Terms of use </a>
                  </li>
                  <li>
                    <a> Privacy Policy </a>
                  </li>
                  <li>
                    <a> Community Rules </a>
                  </li>
                  <li>
                    <a> Disclaimer </a>
                  </li>
                  <li>
                    <a> Methodology </a>
                  </li>
                  <li>
                    <a> Careers </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex md:w-2/4">
              <div className="w-2/4">
                <span className="pt-1 pb-4 text-lg font-semibold">Support</span>
                <ul className="pt-4 space-y-2 text-md dark:text-slate-400 text-slate-700">
                  <li>
                    <a>Request Form</a>
                  </li>
                  <li>
                    <a> Contact Support </a>
                  </li>
                  <li>
                    <a> FAQ </a>
                  </li>
                  <li>
                    <a> Glossary </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <span className="pt-1 pb-4 text-lg font-semibold">Socials</span>
                <ul className="pt-4 space-y-2 text-md dark:text-slate-400 text-slate-700">
                  <li>
                    <a>Facebook</a>
                  </li>
                  <li>
                    <a> Twitter </a>
                  </li>
                  <li>
                    <a> Telegram </a>
                  </li>
                  <li>
                    <a> Instagram </a>
                  </li>
                  <li>
                    <a> Interactive Chatr </a>
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
