import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { SuccessSparkle } from '../components/Message';

// Keep environment variables outside the component to avoid re-registration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        setIsSending(true);
        setErrorMessage('');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            
            setShowSuccess(true);
            formRef.current.reset();
            setTimeout(() => setShowSuccess(false), 5000);
        } catch (error: any) {
            setErrorMessage(error?.text || "Something went wrong. Please try again.");
            setTimeout(() => setErrorMessage(''), 5000);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="min-h-screen py-24 px-6 bg-brand-bg relative flex items-center">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                
                {/* Brand Side */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-brand-text leading-tight">
                        Let's Make You <br />
                        <span className="text-secondary italic">Shine Boldly.</span>
                    </h2>
                    <p className="text-lg text-brand-text/70 max-w-md">
                        Have questions about our shades or wholesale opportunities? 
                        Reach out and we will get back to you.
                    </p>
                    <div className="pt-4">
                        <p className="text-sm font-bold uppercase tracking-widest text-primary">
                            From Uganda • To the World
                        </p>
                    </div>
                </motion.div>

                {/* Form Side */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface/30 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
                >
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-wider px-2 text-brand-text/80">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    required 
                                    placeholder="Your Name"
                                    className="w-full bg-brand-bg/50 border border-primary/30 rounded-2xl px-4 py-4 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" 
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-wider px-2 text-brand-text/80">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    required 
                                    placeholder="email@example.com"
                                    className="w-full bg-brand-bg/50 border border-primary/30 rounded-2xl px-4 py-4 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" 
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-wider px-2 text-brand-text/80">Message</label>
                            <textarea 
                                name="message" 
                                rows={4} 
                                required 
                                placeholder="How can we help?"
                                className="w-full bg-brand-bg/50 border border-primary/30 rounded-2xl px-4 py-4 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none" 
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSending}
                            className="w-full py-4 bg-secondary hover:bg-primary text-white font-black rounded-2xl transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSending ? "SENDING..." : "SEND MESSAGE"}
                        </button>

                        <AnimatePresence>
                            {errorMessage && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-red-500 text-center font-medium text-sm mt-2"
                                >
                                    {errorMessage}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>

            <SuccessSparkle isVisible={showSuccess} />
        </section>
    );
};

export default Contact;