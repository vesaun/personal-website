'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SketchTree, SketchCompass, SketchCampfire, SketchMountainIcon } from './OutdoorDecorations';
import { Mail, MapPin } from 'lucide-react';

const SocialIcon = ({ href, children }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-10 h-10 flex items-center justify-center rounded-full bg-sketch-ash-200/80 text-sketch-olive-600 border-2 border-sketch-olive-400 sketch-border"
    whileHover={{ 
      backgroundColor: 'rgba(123, 160, 91, 0.3)',
      color: '#4A412A',
      borderColor: '#7BA05B',
      y: -3,
      boxShadow: '0 10px 15px -3px rgba(74, 65, 42, 0.3)'
    }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Message sent successfully! I\'ll get back to you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-sketch-charcoal-50 via-sketch-ash-100 to-sketch-charcoal-100 relative overflow-hidden paper-bg">
      {/* Decorative outdoor sketch elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Outdoor decorations */}
        <SketchTree className="absolute top-28 left-12 opacity-20" delay={0} />
        <SketchTree className="absolute bottom-24 right-16 opacity-18" delay={0.5} />
        <SketchCompass className="absolute top-20 right-24 opacity-20 hidden lg:block" size={60} />
        <SketchCampfire className="absolute bottom-32 left-20 opacity-25 hidden md:block" animate={true} />
        <SketchMountainIcon className="absolute top-1/2 right-12 opacity-15 hidden lg:block" delay={0.3} />
        
        {/* Hand-drawn envelope sketch */}
        <svg className="absolute top-1/3 left-1/4 w-24 h-24 opacity-10 hidden lg:block" viewBox="0 0 100 100">
          <motion.rect
            x="10"
            y="30"
            width="80"
            height="50"
            stroke="#6C541E"
            strokeWidth="2"
            fill="none"
            className="sketch-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M10,30 L50,60 L90,30"
            stroke="#7BA05B"
            strokeWidth="2"
            fill="none"
            className="sketch-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </svg>
        
        {/* Dotted trail path */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-12" viewBox="0 0 1200 100">
          <path
            d="M0,80 Q200,60 400,80 T800,80 Q1000,90 1200,80"
            stroke="#B2BEB5"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6,10"
            className="sketch-stroke"
          />
        </svg>
        
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.08 + 0.02,
              background: `rgba(148, 163, 184, 0.3)`,
            }}
            animate={{
              y: [0, Math.random() * 60 - 30],
              x: [0, Math.random() * 60 - 30],
              opacity: [Math.random() * 0.05 + 0.02, Math.random() * 0.1 + 0.05, Math.random() * 0.05 + 0.02],
            }}
            transition={{
              duration: Math.random() * 12 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sketch-charcoal-800 font-cabin">
            Get in <span className="text-sketch-sage-600">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-sketch-charcoal-800 font-cabin">
                Let's Connect
              </h3>
              <p className="text-sketch-charcoal-600 mb-6 font-pt-sans">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sketch-ash-200/80 border-2 border-sketch-olive-400 text-sketch-olive-600 sketch-border group-hover:bg-sketch-sage-100">
                    <Mail size={20} />
                  </div>
                  <a href="mailto:vesh9653@colorado.edu" className="text-sketch-charcoal-700 hover:text-sketch-olive-700 transition-colors font-pt-sans">
                    vesaunshrestha@gmail.com
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sketch-ash-200/80 border-2 border-sketch-olive-400 text-sketch-olive-600 sketch-border group-hover:bg-sketch-sage-100">
                    <MapPin size={20} />
                  </div>
                  <span className="text-sketch-charcoal-700 font-pt-sans">
                    Boulder, CO
                  </span>
                </motion.div>
              </div>
              
              <div className="flex space-x-5 mt-10">
                <SocialIcon href="https://github.com/vesaun">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://linkedin.com/in/vesaunshrestha">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://twitter.com/vesaun">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
            
            <div className="relative">
              {/* Decorative corner sketch */}
              <svg className="absolute -top-6 -left-6 w-16 h-16 opacity-20" viewBox="0 0 60 60">
                <path d="M10,10 L50,10 M10,10 L10,50" stroke="#7BA05B" strokeWidth="2" className="sketch-stroke" />
              </svg>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-sketch-charcoal-800 mb-2 font-cabin">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-sketch-olive-300 rounded-lg focus:ring-2 focus:ring-sketch-sage-500 focus:border-sketch-sage-600 bg-sketch-ash-50 text-sketch-charcoal-800 placeholder-sketch-charcoal-400/50 font-pt-sans"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-sketch-charcoal-800 mb-2 font-cabin">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-sketch-olive-300 rounded-lg focus:ring-2 focus:ring-sketch-sage-500 focus:border-sketch-sage-600 bg-sketch-ash-50 text-sketch-charcoal-800 placeholder-sketch-charcoal-400/50 font-pt-sans"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-sketch-charcoal-800 mb-2 font-cabin">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border-2 border-sketch-olive-300 rounded-lg focus:ring-2 focus:ring-sketch-sage-500 focus:border-sketch-sage-600 bg-sketch-ash-50 text-sketch-charcoal-800 placeholder-sketch-charcoal-400/50 font-pt-sans"
                  ></textarea>
                </motion.div>
                
                {/* Status message */}
                {submitStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg border-2 ${
                      submitStatus.type === 'success'
                        ? 'bg-sketch-sage-100 border-sketch-sage-500 text-sketch-sage-700'
                        : 'bg-red-50 border-red-300 text-red-700'
                    } font-pt-sans`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-lg font-semibold text-sketch-charcoal-50 relative overflow-hidden group shadow-lg border-2 border-sketch-olive-600 bg-sketch-sage-600 hover:bg-sketch-sage-700 font-cabin disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  {!isSubmitting && (
                    <motion.div
                      className="absolute inset-0 bg-sketch-moss-700"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ zIndex: 0 }}
                    />
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 