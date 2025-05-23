'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'mobile', name: 'Mobil Uygulamalar' },
  { id: 'web', name: 'Web Uygulamaları' },
  { id: 'desktop', name: 'Masaüstü Uygulamaları' }
];

const projects = [
  {
    id: 1,
    title: 'Akıllı Otobüs Doluluk Sistemi',
    description: 'TEKNOFEST 2024 projesi kapsamında geliştirilen bu sistem, görüntü işleme teknolojileri kullanarak otobüslerdeki doluluk oranını tespit ediyor ve yolculara rahat ulaşım imkanı sunuyor.',
    technologies: ['OpenCV', 'Dart', 'Flutter', 'Görüntü İşleme'],
    category: 'mobile',
    type: 'TEKNOFEST Projesi',
    image: '/images/bus-project.jpg',
    github: 'https://github.com/yourusername/smart-bus-system'
  },
  {
    id: 2,
    title: 'Soru Bankası Uygulaması',
    description: 'Öğrencilerin çalışma sürecini kolaylaştıran, kişiselleştirilmiş soru havuzu ve analiz özellikleri sunan masaüstü uygulaması.',
    technologies: ['C#', '.NET', 'WPF', 'SQLite'],
    category: 'desktop',
    type: 'Akademik Proje',
    image: '/images/question-bank.jpg',
    github: 'https://github.com/yourusername/question-bank'
  },
  {
    id: 3,
    title: 'Modern Notepad',
    description: 'Gelişmiş metin düzenleme özellikleri ve modern arayüz tasarımı ile klasik not defteri uygulamasının yeniden yorumlanması.',
    technologies: ['Java', 'JavaFX', 'Scene Builder'],
    category: 'desktop',
    type: 'Kişisel Proje',
    image: '/images/notepad.jpg',
    github: 'https://github.com/yourusername/modern-notepad'
  },
  {
    id: 4,
    title: 'Gezi Rehberi Uygulaması',
    description: 'Görsel programlama dersi kapsamında geliştirilen bu uygulama, kullanıcılara şehirleri keşfetme ve gezi planı oluşturma imkanı sunuyor. Modern ve kullanıcı dostu arayüzü ile seyahat planlamasını kolaylaştırıyor.',
    technologies: ['PyQt5', 'Qt Designer', 'Python', 'SQLite'],
    category: 'desktop',
    type: 'Akademik Proje',
    image: '/images/travel-guide.jpg',
    github: 'https://github.com/yourusername/travel-guide'
  },
  {
    id: 5,
    title: 'Fitness Takip Uygulaması',
    description: 'Kullanıcıların fitness hedeflerini takip edebilecekleri, beslenme ve egzersiz programlarını yönetebilecekleri kapsamlı web uygulaması.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'web',
    type: 'Kişisel Proje',
    image: '/images/fitness-tracker.jpg',
    github: 'https://github.com/yourusername/fitness-tracker'
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projelerim</h2>
          <p className="text-gray-300 mb-8">Geliştirdiğim önemli projeler</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  GitHub'da İncele
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 