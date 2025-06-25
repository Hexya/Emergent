import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1591343395082-e120087004b4)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-serif font-light text-stone-100 mb-6 leading-tight tracking-tight">
              lolo bere
            </h1>
            <div className="w-24 h-px bg-stone-400 mx-auto mb-8"></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl md:text-5xl font-light text-stone-200 mb-8 leading-tight"
          >
            Release Stress.<br />
            <span className="text-stone-300">Restore Balance.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Professional massage therapy designed to melt away tension, enhance athletic performance, 
            and restore your body's natural harmony.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)" }}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-4 rounded-full text-lg font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl"
          >
            Book Your Session
            <ArrowRight size={20} />
          </motion.button>
        </div>
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-stone-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-100 mb-6">
              Our Services
            </h2>
            <div className="w-24 h-px bg-stone-400 mx-auto mb-8"></div>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Tailored therapeutic experiences to address your unique needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Sports Massage */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1651083207141-bdf5fadf9679"
                  alt="Sports Massage"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/20 transition-colors duration-500"></div>
              </div>
              <h3 className="text-3xl font-serif text-stone-100 mb-4">Sports Massage</h3>
              <p className="text-stone-300 text-lg leading-relaxed mb-6">
                Enhance performance, prevent injury, and accelerate recovery with targeted 
                techniques designed for active lifestyles.
              </p>
              <ul className="space-y-2 text-stone-400">
                <li className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-stone-500" />
                  Pre-event preparation
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-stone-500" />
                  Post-workout recovery
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-stone-500" />
                  Injury prevention
                </li>
              </ul>
            </motion.div>

            {/* Stress Relief */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1642350449509-4b94118c6929"
                  alt="Stress Relief Massage"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/20 transition-colors duration-500"></div>
              </div>
              <h3 className="text-3xl font-serif text-stone-100 mb-4">Stress Relief</h3>
              <p className="text-stone-300 text-lg leading-relaxed mb-6">
                Melt away tension and anxiety with gentle, flowing movements that calm 
                both body and mind.
              </p>
              <ul className="space-y-2 text-stone-400">
                <li className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-stone-500" />
                  Deep relaxation
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-stone-500" />
                  Anxiety reduction
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-stone-500" />
                  Better sleep quality
                </li>
              </ul>
            </motion.div>

            {/* Life Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[4/3]">
                <img 
                  src="https://images.pexels.com/photos/3230236/pexels-photo-3230236.jpeg"
                  alt="Therapeutic Massage"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/20 transition-colors duration-500"></div>
              </div>
              <h3 className="text-3xl font-serif text-stone-100 mb-4">Therapeutic Wellness</h3>
              <p className="text-stone-300 text-lg leading-relaxed mb-6">
                Comprehensive wellness approach addressing chronic pain, circulation, 
                and overall life quality enhancement.
              </p>
              <ul className="space-y-2 text-stone-400">
                <li className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-stone-500" />
                  Pain management
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-stone-500" />
                  Improved circulation
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-stone-500" />
                  Flexibility enhancement
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-stone-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-100 mb-8">
                Why Choose<br />
                <span className="text-stone-300">Massage Therapy?</span>
              </h2>
              <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                Beyond relaxation lies a world of health benefits that transform your daily life.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Stress Reduction", desc: "Lower cortisol levels and activate your body's relaxation response" },
                  { title: "Pain Relief", desc: "Natural pain management for chronic conditions and muscle tension" },
                  { title: "Better Sleep", desc: "Improve sleep quality through relaxation and reduced anxiety" },
                  { title: "Mental Clarity", desc: "Enhanced focus and mental well-being through stress reduction" }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-stone-400 rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-xl font-medium text-stone-200 mb-2">{benefit.title}</h3>
                      <p className="text-stone-400">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1661531254882-60755a7273fe"
                  alt="Spa Environment"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-100 mb-6">
              Pricing
            </h2>
            <div className="w-24 h-px bg-stone-400 mx-auto mb-8"></div>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Transparent pricing for professional massage therapy services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "60 Minute Session",
                price: "$120",
                duration: "1 Hour",
                features: [
                  "Full body massage",
                  "Consultation included",
                  "Relaxation music",
                  "Aromatherapy oils"
                ]
              },
              {
                name: "90 Minute Session",
                price: "$165",
                duration: "1.5 Hours",
                features: [
                  "Extended full body massage",
                  "Deep tissue focus",
                  "Hot stone therapy",
                  "Stress relief techniques",
                  "Post-massage relaxation"
                ],
                popular: true
              },
              {
                name: "120 Minute Session",
                price: "$210",
                duration: "2 Hours",
                features: [
                  "Comprehensive therapy",
                  "Multiple techniques",
                  "Targeted problem areas",
                  "Hot stone therapy",
                  "Stretching & mobility",
                  "Extended relaxation"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-stone-100 text-stone-950 scale-105' 
                    : 'bg-stone-900/50 border border-stone-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-stone-950 text-stone-100 px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-serif mb-2 ${plan.popular ? 'text-stone-950' : 'text-stone-100'}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-5xl font-light mb-2 ${plan.popular ? 'text-stone-950' : 'text-stone-100'}`}>
                    {plan.price}
                  </div>
                  <p className={`${plan.popular ? 'text-stone-600' : 'text-stone-400'}`}>
                    {plan.duration}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className={`flex items-center gap-3 ${plan.popular ? 'text-stone-700' : 'text-stone-300'}`}
                    >
                      <CheckCircle 
                        size={18} 
                        className={plan.popular ? 'text-stone-500' : 'text-stone-500'} 
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-stone-950 text-stone-100 hover:bg-stone-800'
                    : 'bg-stone-100 text-stone-950 hover:bg-stone-200'
                }`}>
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="py-24 px-6 relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1591020330942-e9c3bce82096)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-stone-950/85"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-100 mb-6">
              Client Stories
            </h2>
            <div className="w-24 h-px bg-stone-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Marathon Runner",
                text: "lolo bere's sports massage has been game-changing for my training. The targeted approach helps me recover faster and perform better.",
                rating: 5
              },
              {
                name: "Michael R.",
                role: "Corporate Executive",
                text: "After years of desk work stress, these sessions have become essential. I leave feeling completely renewed and mentally clear.",
                rating: 5
              },
              {
                name: "Emma L.",
                role: "Yoga Instructor",
                text: "The therapeutic approach addresses my specific needs perfectly. Professional, skilled, and incredibly effective for chronic pain relief.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-stone-900/60 backdrop-blur-sm p-8 rounded-2xl border border-stone-800"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-stone-400 text-stone-400" />
                  ))}
                </div>
                <p className="text-stone-300 text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-medium text-stone-200">{testimonial.name}</div>
                  <div className="text-stone-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section 
        className="py-24 px-6 relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1578413142862-c10be6467b8b)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-stone-950/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-100 mb-6">
              Book Your Session
            </h2>
            <div className="w-24 h-px bg-stone-400 mx-auto mb-8"></div>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto">
              Ready to experience the transformative power of professional massage therapy?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 mb-16"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-stone-300">
                <Phone size={24} className="text-stone-400" />
                <div>
                  <div className="font-medium">Call or Text</div>
                  <div className="text-stone-400">(555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-stone-300">
                <Mail size={24} className="text-stone-400" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-stone-400">book@lolobere.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-stone-300">
                <MapPin size={24} className="text-stone-400" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-stone-400">123 Wellness Street<br />Serenity City, SC 12345</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-stone-300">
                <Clock size={24} className="text-stone-400" />
                <div>
                  <div className="font-medium">Hours</div>
                  <div className="text-stone-400">
                    Mon-Fri: 9am-7pm<br />
                    Sat-Sun: 10am-6pm
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-stone-900/60 backdrop-blur-sm p-8 rounded-2xl border border-stone-800">
              <h3 className="text-2xl font-serif text-stone-100 mb-6">Quick Booking</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full p-4 bg-stone-800/50 border border-stone-700 rounded-lg text-stone-100 placeholder-stone-400 focus:border-stone-500 focus:outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full p-4 bg-stone-800/50 border border-stone-700 rounded-lg text-stone-100 placeholder-stone-400 focus:border-stone-500 focus:outline-none"
                />
                <select className="w-full p-4 bg-stone-800/50 border border-stone-700 rounded-lg text-stone-100 focus:border-stone-500 focus:outline-none">
                  <option value="">Select Service</option>
                  <option value="60min">60 Minute Session - $120</option>
                  <option value="90min">90 Minute Session - $165</option>
                  <option value="120min">120 Minute Session - $210</option>
                </select>
                <textarea 
                  placeholder="Preferred dates/times or special requests"
                  rows="4"
                  className="w-full p-4 bg-stone-800/50 border border-stone-700 rounded-lg text-stone-100 placeholder-stone-400 focus:border-stone-500 focus:outline-none resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-stone-100 text-stone-950 py-4 rounded-lg font-medium hover:bg-stone-200 transition-colors duration-300"
                >
                  Send Booking Request
                </button>
              </form>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
            viewport={{ once: true }}
            className="bg-stone-100 text-stone-950 px-12 py-6 rounded-full text-xl font-medium hover:bg-stone-200 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl"
          >
            Call Now to Book
            <Phone size={24} />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 py-16 px-6 border-t border-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-light text-stone-100 mb-4">lolo bere</h3>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Professional massage therapy dedicated to your wellness journey. 
              Experience the difference that skilled, caring touch can make.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-900">
            <div className="text-stone-500 text-sm mb-4 md:mb-0">
              © 2025 lolo bere. All rights reserved.
            </div>
            <div className="flex gap-8 text-stone-500 text-sm">
              <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-stone-300 transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;