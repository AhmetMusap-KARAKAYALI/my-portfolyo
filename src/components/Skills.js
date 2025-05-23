'use client';

import { motion } from 'framer-motion';

const technicalSkills = [
  { name: 'HTML', percentage: 60 },
  { name: 'CSS', percentage: 60 },
  { name: 'JavaScript', percentage: 60 },
  { name: 'Python', percentage: 60 },
  { name: 'C#', percentage: 60 }
];

const nonTechnicalSkills = [
  { name: 'Satranç', icon: '♟️', description: 'Turnuva deneyimi' },
  { name: 'Yüzme', icon: '🏊‍♂️', description: 'Profesyonel eğitim' },
  { name: 'Fitness', icon: '💪', description: 'Düzenli antrenman' },
  { name: 'Enstrüman', icon: '🎸', description: 'Gitar çalma' }
];

export default function Skills() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Neler Yapabilirim?</h2>
          <p className="text-gray-300">Teknik ve kişisel yeteneklerim</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Teknik Yetenekler</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-white">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Non-Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Meslek Dışı Yetenekler</h3>
            <div className="grid grid-cols-2 gap-6">
              {nonTechnicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center hover:bg-gray-600 transition-colors duration-300"
                >
                  <span className="text-4xl mb-2">{skill.icon}</span>
                  <span className="text-white font-medium mb-1">{skill.name}</span>
                  <span className="text-gray-400 text-sm">{skill.description}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 