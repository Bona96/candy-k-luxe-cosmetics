import React from "react";
import type {  FooterProps } from "../types/types";
import { useGlobalContext } from "../contexts/GlobalContext";
// import PrivacyPolicy from "../pages/PrivacyPolicy";
import { Socials } from "./Socials";
import { GlobalImage } from "./parts/Images";
import { FaPhone } from "react-icons/fa6";

const Footer: React.FC<FooterProps> = ({footerInfo}) => {
  const {setPrivacyPolicyModal} = useGlobalContext()
  return (
    <footer className="data-lenis-prevent pt-60 lg:pt-20 h-screen lg:h-140 relative bg-brand-bg border-t-2 border-primary mb-5 rounded-xl backdrop-blur-sm">
      <div className="flex flex-row flex-wrap h-200 lg:h-130 max-w-6xl mx-auto px-4 overflow-hidden overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 p-4">
          {/* Logo Branding */}
          <div className="flex flex-col items-center justify-center lg:justify-start text-center lg:text-left">
            <GlobalImage
              src={footerInfo.logoBranding.image}
              alt={'Candy'}
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="mt-4 rounded-xl w-30 md:w-40 lg:w-40 shadow-xl shadow-secondary dark:bg-gray-300"
              page="footer"
            />
            <p className="flex flex-row flex-wrap gap-2 text-md font-black tracking-tighter mt-10">
              <FaPhone /> <span className="-mt-1.5"> {footerInfo.logoBranding.contact} </span>
            </p>
            <h3 className="text-xl font-black tracking-tighter mt-2">{footerInfo.logoBranding.title}</h3>
            <p className="text-sm tracking-widest text-secondary font-bold p-5">{footerInfo.logoBranding.desc}</p>
          </div>

          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center lg:justify-between">
            {/* Quick Links */}
            {footerInfo.quickLinks.map((item) => {
              return (
                <div key={item.id} className="flex mb-5 lg:mb-0gap-10 text-lg lg:text-sm font-medium text-brand-text/60">
                  {item.title === 'Privacy Policy' 
                    ? (
                        <button 
                          onClick={() => setPrivacyPolicyModal(true)} 
                          className="hover:text-secondary transition-colors"
                        >
                          {item.title}
                        </button>
                      ) 
                    :
                      (
                        <a href={item.href} className="hover:text-secondary transition-colors">
                          {item.title}
                        </a>
                      )
                  }
                </div>
              )
            })}
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center">
            <Socials />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center border-t border-white/5 mt-3 lg:mt-2 mb-5 text-[10px] uppercase tracking-[0.2em] text-brand-text/60">
          <p>{footerInfo.copyright.allrights}</p>
          <p> {footerInfo.copyright.designedbyTitle} <a className="text-cyan-500 underline hover:text-secondary transition-colors" href={footerInfo.copyright.designedbyLink}>
              {footerInfo.copyright.designedbyName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;