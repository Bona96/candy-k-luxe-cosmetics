import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { SuccessSparkle } from '../components/Message';
import { LuxurySection } from '../components/ScrollSections';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current!, 'YOUR_PUBLIC_KEY')
        .then(() => {
        setIsSending(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000); // Auto-hide after 4s
        form.current?.reset();
        });
    };

// Add at the bottom of your JSX
  return (
    <LuxurySection>
        <section id="contact" className="h-screen py-24 px-6 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Brand Side */}
            <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
            >
                <h2 className="text-5xl md:text-6xl font-black text-brand-text leading-tight">
                    Let's Make You <br />
                    <span className="text-secondary italic">Shine Boldly.</span>
                </h2>
                <p className="text-lg text-brand-text/70 max-w-md">
                    Have questions about our shades or wholesale opportunities? 
                    Reach out and we will get back to you.
                </p>
                <div className="pt-4">
                    <p className="text-sm font-bold uppercase tracking-widest text-primary">From Uganda • To the World</p>
                    {/* <p className="text-brand-text/60">contact@candykluxe.com</p> */}
                </div>
            </motion.div>

            {/* Form Side */}
            <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-surface/30 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl"
            >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider px-2">Name</label>
                    <input type="text" name="user_name" required className="w-full bg-brand-bg/50 border border-white/10 rounded-2xl px-4 py-3 focus:border-secondary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider px-2">Email</label>
                    <input type="email" name="user_email" required className="w-full bg-brand-bg/50 border border-white/10 rounded-2xl px-4 py-3 focus:border-secondary outline-none transition-all" />
                </div>
                </div>
                <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider px-2">Message</label>
                <textarea name="message" rows={4} required className="w-full bg-brand-bg/50 border border-white/10 rounded-2xl px-4 py-3 focus:border-secondary outline-none transition-all resize-none" />
                </div>
                <button 
                type="submit" 
                disabled={isSending}
                className="w-full py-4 bg-secondary hover:bg-primary text-white font-black rounded-2xl transition-all shadow-xl disabled:opacity-50"
                >
                {isSending ? "SENDING..." : "SEND MESSAGE"}
                </button>
            </form>
            </motion.div>
        </div>
        <SuccessSparkle isVisible={showSuccess} /> 
        </section>
    </LuxurySection>
  );
};

export default Contact;