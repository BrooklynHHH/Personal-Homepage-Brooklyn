import React, { useState, useEffect } from 'react';
import './App.css';
import { Download, Github, Twitter, Linkedin, Instagram, ExternalLink, Menu, X, MousePointer, Bot, Settings, Camera, Code, Coffee, PenTool, GitBranch, Mail, Phone, MapPin } from 'lucide-react';
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
import hamburgerImg from './assets/hamburger.png';
import musicImg from './assets/music.png';
import touristImg from './assets/tourist.png';
import Projects from './components/Projects';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // 平滑滾動到指定區域
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
              {[
                { name: 'About Me', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Project', id: 'projects' },
                { name: 'My photographic works', id: 'photographic-works' }
              ].map((item, index) => (
                <motion.button 
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-black transition-colors relative bg-transparent border-none cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-black"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
            
            <motion.button 
              className="bg-black text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/hyr.pdf';
                link.download = 'Brooklyn_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
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
                {[
                  { name: 'About Me', id: 'about' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Project', id: 'projects' },
                  { name: 'My photographic works', id: 'photographic-works' }
                ].map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="block text-gray-700 hover:text-black transition-colors bg-transparent border-none cursor-pointer text-left w-full"
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.button>
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
                className="text-gray-600 text-xl leading-loose max-w-lg"
                variants={fadeInUp}
              >
                大家好，我是Brooklyn！一名热爱用AI创造有趣实用产品的产品人。像Dify和ComfyUI这样的工具对我来说就像魔法积木，我特别喜欢拿来搭建AI应用——就像我也喜欢用镜头捕捉光影故事那样。我希望能用自己的创意和技能，打造出真正帮到人、让人会心一笑的AI产品。
              </motion.p>
              <motion.div 
                className="flex items-center space-x-4"
                variants={fadeInUp}
              >
                <motion.button 
                  className="bg-[#002FA7] text-white px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-[#001F7A] transition-colors relative overflow-hidden text-lg font-medium"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,47,167,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 4px 15px rgba(0,47,167,0.2)",
                      "0 8px 25px rgba(0,47,167,0.4)",
                      "0 4px 15px rgba(0,47,167,0.2)"
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/hyr.pdf';
                    link.download = 'Brooklyn_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <motion.span
                    animate={{
                      x: [0, 2, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    点击我了解更多
                  </motion.span>
                  <motion.div
                    animate={{
                      y: [0, -2, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <Download size={20} />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.button>
                <motion.div 
                  className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-black hover:border-black transition-colors cursor-pointer bg-white"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#000",
                    borderColor: "#000"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://github.com/BrooklynHHH', '_blank')}
                >
                  <motion.div
                    whileHover={{ color: "#fff" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github size={20} />
                  </motion.div>
                </motion.div>
              </motion.div>
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
                <span className="text-gray-400">May. 2025 - Present</span>
              </div>
              <p className="text-gray-300 leading-relaxed">在小米实习期间，我专注于探索AI如何让产品更"懂"用户。我动手搭建了多个AI原型来验证想法：比如为小米浏览器设计了"AI日报"语音播客功能，从挖掘用户需求开始，到独立完成端到端的Demo开发和技术验证，再到优化核心的AI工作流和提示词策略，最终让功能成功落地。我还从0到1设计和开发了一个"旅游规划Agent"的高保真原型，用LangGraph等技术拆解复杂任务，通过可交互的Demo验证了AI提供个性化行程的可行性。这段经历让我深刻体会到，好的AI产品需要既深入技术细节，又始终紧贴用户真实场景。</p>
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
                                  <span className="text-gray-400">Jan. 2025 - Apr. 2025</span>
              </div>
              <p className="text-gray-300 leading-relaxed">我专注于将AI技术应用于传统行业，并参与了从需求洞察到商业落地的完整闭环。我的核心实践是为具体业务场景构建务实的AI解决方案：例如，为了解决教育AI阅卷中手写数学公式识别率低的痛点，我参与了基于InternVL多模态大模型的SFT微调工作，来提升模型的识别精度；同时，我也探索了AI在重工业的应用，通过搭建一个融合专家知识的智能Agent原型，来辅助炼钢过程中的火焰识别与决策。我习惯于协同行业专家、算法和数据团队，共同验证最优技术路径，并坚信技术的核心价值在于为真实的商业场景带来可衡量的效率提升。</p>
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
                className="space-y-4 text-gray-600 text-xl leading-loose"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.p variants={fadeInUp}>
                  你好呀，我是Brooklyn 👋<br/>
                  一个用AI搭积木的产品人，也是用镜头捕故事的观察者。<br/><br/>
                  我相信科技的温度，在于它如何贴合人的心跳。<br/>
                  我的AI学术背景和人机交互研究，给了我拆解技术的工具；而举起相机的这些年，让我学会了蹲下来——用普通人的眼睛，发现真实世界的痛与美。<br/><br/>
                  所以你看我：<br/>
                  🔧 左手折腾着Dify、ComfyUI…把AI Agent搭成解决问题的"小魔法"；<br/>
                  📸 右手穿行在街头巷尾，用镜头冻结那些被忽略的微光与渴望。<br/>
                  音乐和旅行是充电站，而"创造让人会心一笑的AI产品" 是我的北极星。<br/><br/>
                  （对了，主页里藏着我拍下的故事碎片，欢迎来逛逛 👉）
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <Projects />

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
            Life, Unfiltered
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                title: 'Offbeat Moments', 
                description: 'Jazz solos in daily chaos & other survival notes',
                details: [
                  '攀岩时在岩点哼R&B',
                  '把过期胶卷拍出忧郁滤镜'
                ],
                featured: false,
                image: musicImg
              },
              { 
                title: 'Pieces of Brooklyn', 
                description: 'A collage of film grains, cliffhangers & cold sandwiches',
                details: [
                  '今日穿搭：流浪诗人混搭公园管理员',
                  '在便利店研究饭团包装美学'
                ],
                featured: true,
                image: touristImg
              },
              { 
                title: 'Life Between Bites', 
                description: 'Where noodles slurp louder than existential crises',
                details: [
                  '徒步是为了山顶泡面仪式',
                  '爵士歌单配便利店关东煮'
                ],
                featured: false,
                image: hamburgerImg
              }
            ].map((card, index) => (
              <motion.div 
                key={index} 
                className={`p-8 rounded-lg ${card.featured ? 'bg-black text-white' : 'bg-gray-50'}`}
                variants={skillCardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: card.featured 
                    ? "0 20px 40px rgba(0,0,0,0.3)" 
                    : "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div 
                    className="w-20 h-20 rounded-full overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${card.featured ? 'text-white' : 'text-gray-800'}`}>
                  {card.title}
                </h3>
                <p className={`mb-4 leading-relaxed ${card.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                  {card.description}
                </p>
                <div className="space-y-2">
                  {card.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className={`text-sm ${card.featured ? 'text-gray-400' : 'text-gray-500'}`}>
                      • {detail}
                    </p>
                  ))}
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
              className="space-y-8"
              initial={{ opacity: 0, x: -60 }}
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
                className="flex items-center space-x-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.button 
                  className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get In Touch</span>
                </motion.button>
                
                <motion.div 
                  className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-black hover:border-black transition-colors cursor-pointer bg-white"
                  variants={skillCardVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#000",
                    borderColor: "#000"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://github.com/BrooklynHHH', '_blank')}
                >
                  <motion.div
                    whileHover={{ color: "#fff" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github size={20} />
                  </motion.div>
                </motion.div>
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
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center space-x-4"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center bg-white">
                    <Mail size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-semibold hover:text-blue-600 transition-colors cursor-pointer">
                      13870287190@163.com
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center bg-white">
                    <Phone size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-lg font-semibold hover:text-green-600 transition-colors cursor-pointer">
                      13870287190
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center bg-white">
                    <MapPin size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-lg font-semibold hover:text-purple-600 transition-colors">
                      Shanghai, China
                    </p>
                  </div>
                </motion.div>
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

