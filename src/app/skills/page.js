import Navbar from '@/components/Navbar';

const skills = [
  {
    category: 'Frontend Teknolojileri',
    items: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'TailwindCSS', level: 85 },
    ],
  },
  {
    category: 'Backend Teknolojileri',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'SQL', level: 65 },
    ],
  },
  {
    category: 'Diğer Yetenekler',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'AWS', level: 55 },
      { name: 'TypeScript', level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Neler Yapabilirim?</h1>
          
          <div className="space-y-12">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">{skillGroup.category}</h2>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Sertifikalar ve Başarılar</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>[Sertifika/Başarı 1]</li>
              <li>[Sertifika/Başarı 2]</li>
              <li>[Sertifika/Başarı 3]</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 