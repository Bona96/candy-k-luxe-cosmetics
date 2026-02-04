import { LuxurySection } from "./ScrollSections";

const Footer = () => {
  return (
    <LuxurySection>
    <footer className="bg-brand-bg border-t border-white/5 pt-20 pb-10 rounded-xl backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          
          {/* Logo Branding */}
          <div className="space-y-2">
            <h3 className="text-2xl font-black tracking-tighter">CANDY.K LUXE</h3>
            <p className="text-xs tracking-[0.4em] text-secondary font-bold uppercase">Cosmetics Empire</p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-10 text-sm font-medium text-brand-text/60">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Shipping Info</a>
            <a href="#" className="hover:text-secondary transition-colors">Wholesale</a>
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            {['Instagram', 'TikTok', 'Twitter'].map((social) => (
              <a key={social} href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="sr-only">{social}</span>
                {/* Icons would go here */}
                <div className="w-2 h-2 rounded-full bg-current" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-10 text-[10px] uppercase tracking-[0.2em] text-brand-text/40">
          <p>© 2026 Candy.K Luxe Cosmetics. All Rights Reserved.</p>
          <p>Designed for Uganda & Beyond</p>
        </div>
      </div>
    </footer>
    </LuxurySection>
  );
};

export default Footer;