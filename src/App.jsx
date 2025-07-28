import React, { useState, useEffect } from 'react';
import './App.css';
import { Download, Github, Twitter, Linkedin, Instagram, ExternalLink, Menu, X, MousePointer, Bot, Settings, Camera, Code, Coffee, PenTool, GitBranch } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import meImg from './assets/me.png';
import aboutMeImg from './assets/about_me.jpg';
import xiaomiLogo from './assets/xiaomi.svg';
import AIlabLogo from './assets/AIlab.jpg';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';
import img9 from './assets/9.jpg';
import img10 from './assets/10.jpg';
import img11 from './assets/11.jpg';
import img12 from './assets/12.jpg';
import photoCard from './assets/photo.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillCardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    hover: { 
      scale: 1.05, 
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-semibold text-lg">Personal</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['About Me', 'Skills', 'Project', 'Contact me'].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`} 
                  className="text-gray-700 hover:text-black transition-colors relative"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-black"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
            
            <motion.button 
              className="bg-black text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span>Resume</span>
              <Download size={16} />
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-4">
                {['About Me', 'Skills', 'Project', 'Contact me'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="block text-gray-700 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div className="space-y-4" variants={fadeInLeft}>
                <motion.h1 
                  className="text-5xl lg:text-6xl font-light"
                  variants={fadeInUp}
                >
                  Hello I'am <motion.span 
                    className="font-bold"
                    whileHover={{ scale: 1.05, color: "#3B82F6" }}
                    transition={{ duration: 0.3 }}
                  >
                    Brooklyn.
                  </motion.span>
                </motion.h1>
                <motion.h2 
                  className="text-4xl lg:text-5xl font-light"
                  style={{ color: '#002FA7' }}
                  variants={fadeInUp}
                >
                  <motion.span 
                    className="font-bold px-4 py-1 inline-block rounded-md"
                    style={{ backgroundColor: '#002FA7', color: '#fff' }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "#000", 
                      color: "#fff",
                      rotate: 2 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    AI
                  </motion.span> Product Manager
                </motion.h2>
                <motion.h3 
                  className="text-4xl lg:text-5xl font-light"
                  variants={fadeInUp}
                >
                  Based In <motion.span 
                    className="font-bold"
                    whileHover={{ scale: 1.05, color: "#10B981" }}
                    transition={{ duration: 0.3 }}
                  >
                    Shanghai.
                  </motion.span>
                </motion.h3>
              </motion.div>
              <motion.p 
                className="text-gray-600 text-lg leading-relaxed max-w-lg"
                variants={fadeInUp}
              >
                Hey! I'm Brooklyn, a product person passionate about creating fun and useful tools with AI. I'm fascinated with building AI applications using tools like Dify and ComfyUI—they feel like magical building blocks—just as I love capturing stories and light through the lens of my camera. I hope to use my ideas and skills to create AI products that genuinely help people and bring a smile to their faces.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="w-[30rem] h-[30rem] relative overflow-hidden rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                style={{ opacity, scale }}
              >
                <img
                  src={meImg}
                  alt="Me"
                  className="w-full h-full object-cover"
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-16 px-6 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Skills
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              <span className="inline-block font-semibold text-base px-4 py-1 rounded-full border-2 border-[#002FA7] bg-white text-[#002FA7] shadow-sm">AI coding</span>
              <span className="inline-block font-semibold text-base px-4 py-1 rounded-full border-2 border-[#002FA7] bg-white text-[#002FA7] shadow-sm">Hobbies</span>
              <span className="inline-block font-semibold text-base px-4 py-1 rounded-full border-2 border-[#002FA7] bg-white text-[#002FA7] shadow-sm">Technical Stack</span>
            </div>
          </motion.h2>

          {/* 第一行：AI coding（左1/4）+ Hobbies（右3/4） */}
          {/* 刪除原有的兩行大標題行（AI coding/Hobbies/Technical Stack） */}

          {/* 第二行：四個卡片 */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            {/* Cursor */}
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200 text-center cursor-pointer transition-colors"
              variants={skillCardVariants}
              whileHover={{ scale: 1.05, y: -5, backgroundColor: '#000', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <MousePointer size={36} className="mx-auto mb-3" />
              <h3 className="font-semibold">Cursor</h3>
            </motion.div>
            {/* Dify */}
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200 text-center cursor-pointer transition-colors"
              variants={skillCardVariants}
              whileHover={{ scale: 1.05, y: -5, backgroundColor: '#000', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Bot size={36} className="mx-auto mb-3" />
              <h3 className="font-semibold">Dify</h3>
            </motion.div>
            {/* ComfyUI */}
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200 text-center cursor-pointer transition-colors"
              variants={skillCardVariants}
              whileHover={{ scale: 1.05, y: -5, backgroundColor: '#000', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Settings size={36} className="mx-auto mb-3" />
              <h3 className="font-semibold">ComfyUI</h3>
            </motion.div>
            {/* Photography */}
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200 text-center cursor-pointer transition-colors"
              variants={skillCardVariants}
              whileHover={{ scale: 1.05, y: -5, backgroundColor: '#000', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Camera size={36} className="mx-auto mb-3" />
              <h3 className="font-semibold">Photography</h3>
            </motion.div>
          </div>

          {/* 第三行：Technical Stack 標題 */}
          {/* 刪除如下內容：
          <div className="flex justify-center mb-8">
            <span className="block font-bold text-2xl px-6 py-2 rounded-xl border-2 border-[#002FA7] bg-white shadow-sm text-[#002FA7] text-center w-fit">Technical Stack</span>
          </div>
          */}

          {/* 第四行：四個技術棧卡片 */}
          <div className="grid grid-cols-4 gap-6">
            {/* Python */}
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200 text-center cursor-pointer transition-colors"
              variants={skillCardVariants}
              whileHover={{ scale: 1.05, y: -5, backgroundColor: '#000', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Code size={36} className="mx-auto mb-3" />
              <h3 className="font-semibold">Python</h3>
            </motion.div>
            {/* JAVA */}
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200 text-center cursor-pointer transition-colors"
              variants={skillCardVariants}
              whileHover={{ scale: 1.05, y: -5, backgroundColor: '#000', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Coffee size={36} className="mx-auto mb-3" />
              <h3 className="font-semibold">JAVA</h3>
            </motion.div>
            {/* Figma */}
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200 text-center cursor-pointer transition-colors"
              variants={skillCardVariants}
              whileHover={{ scale: 1.05, y: -5, backgroundColor: '#000', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <PenTool size={36} className="mx-auto mb-3" />
              <h3 className="font-semibold">Figma</h3>
            </motion.div>
            {/* Git */}
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200 text-center cursor-pointer transition-colors"
              variants={skillCardVariants}
              whileHover={{ scale: 1.05, y: -5, backgroundColor: '#000', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <GitBranch size={36} className="mx-auto mb-3" />
              <h3 className="font-semibold">Git</h3>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="py-16 px-6 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Experience
          </motion.h2>
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* 第一條經歷 */}
            <motion.div 
              className="border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-colors"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img src={xiaomiLogo} alt="Xiaomi" className="w-10 h-10 object-contain" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">AI product manager at Xiaomi</h3>
                </div>
                <span className="text-gray-400">Nov 2019 - Present</span>
              </div>
              <p className="text-gray-300 leading-relaxed">As an AI product manager at Xiaomi, I lead the design and implementation of innovative AI solutions, collaborating with cross-functional teams to deliver smart products that enhance user experience and drive business growth.</p>
            </motion.div>
            {/* 第二條經歷 */}
            <motion.div 
              className="border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-colors"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img src={AIlabLogo} alt="Shanghai AI Lab" className="w-10 h-10 object-contain" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">AI product manager at Shanghai AI Lab</h3>
                </div>
                <span className="text-gray-400">Jan 2017 - Oct 2019</span>
              </div>
              <p className="text-gray-300 leading-relaxed">At Shanghai AI Lab, I focused on building cutting-edge AI products, driving research into practical applications, and working with top-tier scientists and engineers to push the boundaries of artificial intelligence.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section 
        id="about" 
        className="py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-72 h-[27rem]">
                {/* 卡牌底層：旋轉的 photo.png */}
                <img
                  src={photoCard}
                  alt="Card Photo"
                  className="absolute left-0 bottom-0 w-full h-full object-cover rounded-lg shadow-lg"
                  style={{ transform: 'rotate(-45deg) translateY(48px)', transformOrigin: 'left bottom', zIndex: 1 }}
                />
                {/* 上層：about_me.jpg */}
                <motion.div 
                  className="absolute left-0 bottom-0 w-full h-full border-2 border-black rounded-lg flex items-center justify-center overflow-hidden bg-white"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: 2 }}
                >
                  <img
                    src={aboutMeImg}
                    alt="About Me"
                    className="w-full h-full object-cover"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-4xl font-bold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                About Me
              </motion.h2>
              <motion.div 
                className="space-y-4 text-gray-600 leading-relaxed"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.p variants={fadeInUp}>
                  My name is Brooklyn, and I'm an aspiring AI Product Manager with a deep passion for technology. My academic background in Artificial Intelligence and Human-Computer Interaction has equipped me not only with technical knowledge but also with a focus on how technology can better serve people. This is complemented by my love for photography, which has trained me to see the world from a user's perspective, capturing both needs to be solved and moments of beauty.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-16 px-6 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 p-8 rounded-lg"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-white rounded-lg p-6 mb-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-black font-bold text-lg mb-2">Get perfect freelancer for your projects</h3>
                  <motion.button 
                    className="bg-black text-white px-4 py-2 rounded text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="bg-black rounded-lg p-4 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-green-400 text-lg font-bold">Get perfect freelancer for your projects</div>
                  </motion.div>
                  <motion.div 
                    className="bg-white rounded-lg p-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-8 h-8 bg-purple-500 rounded-full mb-2"></div>
                    <div className="text-black text-sm">Profile</div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="text-6xl font-bold text-gray-600"
                whileHover={{ scale: 1.1, color: "#fff" }}
                transition={{ duration: 0.3 }}
              >
                01
              </motion.div>
              <motion.h3 
                className="text-3xl font-bold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Crypto Screener Application
              </motion.h3>
              <p className="text-gray-300 leading-relaxed">
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to specimen book.
              </p>
              <motion.button 
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink size={20} />
                <span>Visit Project</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Testimonial
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: 'Evren Shah', role: 'Designer', featured: false },
              { name: 'Flora sheen', role: 'Designer', featured: true },
              { name: 'Evren Shah', role: 'Designer', featured: false }
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className={`p-8 rounded-lg ${testimonial.featured ? 'bg-black text-white' : 'bg-gray-50'}`}
                variants={skillCardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: testimonial.featured 
                    ? "0 20px 40px rgba(0,0,0,0.3)" 
                    : "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div 
                    className={`w-12 h-12 rounded-full ${testimonial.featured ? 'bg-white' : 'bg-gray-300'}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                  <motion.div 
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    "
                  </motion.div>
                </div>
                <p className={`mb-6 leading-relaxed ${testimonial.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                  I recently had to jump on 10+ different calls across eight different countries to 
                  find the right owner.
                </p>
                <div className={`border-t ${testimonial.featured ? 'border-gray-700' : 'border-gray-200'} pt-4`}>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className={`text-sm ${testimonial.featured ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Photographic Works Section */}
      <motion.section
        id="photographic-works"
        className="py-16 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ color: '#111', letterSpacing: '0.05em' }}
          >
            My photographic works
          </motion.h2>
          <div
            className="w-full columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
          >
            {[
              img1, img2, img3, img12, img5, img6, img7, img8, img9, img10, img11, img4
            ].map((img, i) => (
              <motion.div
                key={i}
                className="mb-6 break-inside-avoid rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center group transition-all"
                style={{
                  width: '100%',
                  minHeight: 240,
                  aspectRatio:
                    i === 0 ? '1/1' :
                    i === 1 ? '2/3' :
                    i === 2 ? '3/4' :
                    i === 4 ? '1/1' :
                    i === 5 ? '2/3' :
                    '2/3',
                  height:
                    i === 0 ? 320 :
                    i === 1 ? 360 :
                    i === 2 ? 400 :
                    i === 4 ? 320 :
                    i === 5 ? 360 :
                    `${240 + (i % 3) * 60}px`
                }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.18)', y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <img
                  src={img}
                  alt={`攝影作品${i + 1}`}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{ height: '100%' }}
                />
                {/* 高級遮罩動效 */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.12 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: 'linear-gradient(120deg, #002FA7 0%, #000 100%)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-16 px-6 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.form 
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  { placeholder: "Your name", type: "text" },
                  { placeholder: "Email", type: "email" },
                  { placeholder: "Your website (if exists)", type: "text" }
                ].map((field, index) => (
                  <motion.input
                    key={index}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
                    variants={fadeInUp}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
                <motion.textarea
                  placeholder="How can I help?*"
                  rows="4"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
                  variants={fadeInUp}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
                <motion.button 
                  className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </motion.form>
              
              <motion.div 
                className="flex space-x-4 pt-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[Github, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <motion.div 
                    key={index} 
                    className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                    variants={skillCardVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "#000",
                      borderColor: "#000"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{ color: "#fff" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={20} />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-4xl font-bold mb-4"
                  variants={fadeInUp}
                >
                  Let's <motion.span 
                    className="border-2 border-black px-2 py-1 inline-block"
                    whileHover={{ 
                      backgroundColor: "#000", 
                      color: "#fff",
                      rotate: 2 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    talk
                  </motion.span> for
                </motion.h3>
                <motion.h3 
                  className="text-4xl font-bold"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Something special
                </motion.h3>
              </motion.div>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I seek to push the limits of creativity to create high-engaging, user-
                friendly, and memorable interactive experiences.
              </motion.p>
              <motion.div 
                className="space-y-2"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.p 
                  className="text-xl font-semibold"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  transition={{ duration: 0.2 }}
                >
                  Youremail@gmail.com
                </motion.p>
                <motion.p 
                  className="text-xl font-semibold"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, color: "#10B981" }}
                  transition={{ duration: 0.2 }}
                >
                  1234567890
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        transition={{ duration: 0.3 }}
      >
        ↑
      </motion.button>
    </div>
  );
};

export default App;

