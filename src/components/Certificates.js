'use client';

import { motion } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: 'Ege Bilişim Zirvesi',
    pdfUrl: '/certificates/Ege Bilişim Zirvesi.pdf',
    date: '2024',
    issuer: 'Ege Üniversitesi',
    description: 'Bilişim teknolojileri ve güncel trendler hakkında kapsamlı eğitim'
  },
  {
    id: 2,
    title: "A'dan Z'ye Siber Güvenlik",
    pdfUrl: '/certificates/A\'dan Z\'ye Siber Güvenlik.pdf',
    date: '2023',
    issuer: 'Siber Güvenlik Akademisi',
    description: 'Temel ve ileri düzey siber güvenlik eğitimi'
  }
];

export default function Certificates() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Sertifikalarım</h2>
          <p className="text-gray-300">Eğitim ve gelişim sertifikalarım</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">{certificate.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{certificate.issuer}</p>
                <p className="text-gray-500 text-sm">{certificate.date}</p>
              </div>
              <p className="text-gray-300 mb-4">{certificate.description}</p>
              <a
                href={certificate.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Sertifikayı Görüntüle
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 