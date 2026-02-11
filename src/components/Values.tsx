import LuxeGallery from "../components/parts/LuxeGallery";
import { values } from "../assets/constants";

const Values = () => {
  return (
    <LuxeGallery
      heading="The Glossy Standard"
      tagline="Built on Substance"
      items={values}
      columns={{ md: 2, lg: 4 }} // 4 columns on large screens
      renderItem={(v, i) => (
        <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 h-80 flex flex-col items-start text-left">
          <span className="text-5xl mb-6">{v.icon}</span>
          <h3 className="text-xl font-black mb-3 text-secondary uppercase tracking-tighter">{v.title}</h3>
          <p className="text-brand-text/60 text-sm leading-relaxed">{v.desc}</p>
        </div>
      )}
    />
  );
};

export default Values;