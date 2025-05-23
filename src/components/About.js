'use client';

import { motion } from 'framer-motion';

const education = [
  {
    school: 'Balıkesir Üniversitesi',
    degree: 'Bilgisayar Mühendisliği',
    period: '2023 - 2027',
    description: 'Lisans eğitimi'
  }
];

const experience = [
  {
    company: 'Kilikya Resort Çamyuva',
    position: 'Otelcilik',
    period: '2022 - 2023 Yaz Sezonu',
    description: 'Yaz sezonunda otelcilik deneyimi'
  }
];

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Ben Kimim?</h2>
          <p className="text-gray-300">Eğitim ve deneyimlerim</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Eğitim</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-blue-500 pl-4"
                >
                  <h4 className="text-xl font-semibold text-white">{edu.school}</h4>
                  <p className="text-blue-400">{edu.degree}</p>
                  <p className="text-gray-400">{edu.period}</p>
                  <p className="text-gray-500 mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Deneyim</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-purple-500 pl-4"
                >
                  <h4 className="text-xl font-semibold text-white">{exp.company}</h4>
                  <p className="text-purple-400">{exp.position}</p>
                  <p className="text-gray-400">{exp.period}</p>
                  <p className="text-gray-500 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 