import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Travel Agent",
      description: "你的数字游牧搭档。在复杂的需求里打捞真正重要的风景，把'想去'变成清晰的下一站。",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      link: "https://github.com/BrooklynHHH/AI_Travel_Agent",
      number: "01",
      icon: "/travel.png"
    },
    {
      id: 2,
      title: "AI Podcast",
      description: "通勤路上的声音知己。把晨间新闻熬成有温度的故事粥，让机械旅程长出会呼吸的褶皱。",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      link: "https://github.com/BrooklynHHH/AI_Podcast",
      number: "02",
      icon: "/podcast.png"
    },
    {
      id: 3,
      title: "AI Fortune",
      description: "在算法的褶皱里打捞古老星图。当八字遇见神经网络，命运不再是单行道的预言，而是可对话的河流。",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      link: "https://github.com/BrooklynHHH/AI_Fortune",
      number: "03",
      icon: "/fortune.png"
    }
  ];

  return (
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
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Project Image/Card */}
              <motion.div 
                className="flex-1 relative max-w-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 p-8 rounded-lg h-80">
                  <div className="bg-white rounded-lg p-6 relative h-full flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-black font-bold text-2xl">{project.title}</h3>
                    </div>
                    <motion.button 
                      className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      Get Started
                    </motion.button>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 w-40 h-40"
                    >
                      <img 
                        src={project.icon} 
                        alt={`${project.title} icon`}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Project Content */}
              <motion.div 
                className="flex-1 space-y-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
              >
                <motion.div 
                  className="text-6xl font-bold text-gray-600"
                  whileHover={{ scale: 1.1, color: "#fff" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.number}
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-300 text-xl leading-loose">
                  {project.description}
                </p>
                <motion.button 
                  className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <ExternalLink size={20} />
                  <span>Visit Project</span>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects; 