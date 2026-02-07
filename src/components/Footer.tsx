import React from "react";
import type {  FooterProps } from "../types/types";
import { useGlobalContext } from "../contexts/GlobalContext";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import { Socials } from "./Socials";
import { GlobalImage } from "./parts/Images";
import { FaPhone } from "react-icons/fa6";

const Footer: React.FC<FooterProps> = ({footerInfo}) => {
  const {privacyPolicyModal, setPrivacyPolicyModal} = useGlobalContext()
  return (
    <>
      <footer className="relative bg-brand-bg border-t-2 border-primary p-2 pb-10 rounded-xl backdrop-blur-sm">
        <div className=" h-100 max-w-7xl mx-auto px-6 overflow-hidden overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 mb-8">
            {/* Logo Branding */}
            <div className="space-y-2">
              <GlobalImage
                src={footerInfo.logoBranding.image}
                alt={'Candy'}
                animate={{ x: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="mt-4 rounded-xl w-40 md:w-50 lg:w-60 shadow-xl shadow-secondary"
                page="footer"
              />
              <p className="flex flex-row flex-wrap gap-2 text-md font-black tracking-tighter mt-10">
                <FaPhone /> <span className="-mt-1.5"> {footerInfo.logoBranding.contact} </span>
              </p>
              <h3 className="text-2xl font-black tracking-tighter mt-2">{footerInfo.logoBranding.title}</h3>
              <p className="text-sm tracking-widest text-secondary font-bold">{footerInfo.logoBranding.desc}</p>
            </div>

            <div className="flex flex-row flex-wrap justify-between">
              {/* Quick Links */}
              {footerInfo.quickLinks.map((item) => {
                return (
                  <>
                  {item.title === 'Privacy Policy' 
                    ? (
                        <div key={item.id} className="flex gap-10 text-sm font-medium text-brand-text/60">
                          <button onClick={() => setPrivacyPolicyModal(true)} className="hover:text-secondary transition-colors">
                            {item.title}
                          </button>
                        </div>
                      ) 
                    :
                      (
                        <div key={item.id} className="flex gap-10 text-sm font-medium text-brand-text/60">
                          <a href={item.href} className="hover:text-secondary transition-colors">{item.title}</a>
                        </div>
                      )
                  }
                  </>
                )
              })}
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center">
              <Socials />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-10 text-[10px] uppercase tracking-[0.2em] text-brand-text/60">
            <p>{footerInfo.copyright.allrights}</p>
            <p> {footerInfo.copyright.designedbyTitle} <a className="text-cyan-500 underline hover:text-secondary transition-colors" href={footerInfo.copyright.designedbyLink}>
                {footerInfo.copyright.designedbyName}
              </a>
            </p>
          </div>
        </div>
      </footer>
      {privacyPolicyModal && (<PrivacyPolicy />)}
    </>
  );
};

export default Footer;