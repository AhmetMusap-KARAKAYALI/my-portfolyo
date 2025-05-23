import Image from 'next/image';
import Navbar from '@/components/Navbar';

const projects = [
  {
    title: 'Modern Notepad',
    description: 'Modern ve kullanıcı dostu bir not defteri uygulaması. Python ile geliştirilmiş, temiz ve sade bir arayüze sahip.',
    image: '/images/project1.jpg',
    technologies: ['Python', 'Tkinter', 'SQLite'],
    demoUrl: 'https://github.com/AhmetMusap-KARAKAYALI/notepad',
    githubUrl: 'https://github.com/AhmetMusap-KARAKAYALI/notepad',
  },
  {
    title: 'Soru Bankası Uygulaması',
    description: 'Öğrenciler için geliştirilmiş, soru ekleme, düzenleme ve çözme imkanı sunan bir soru bankası uygulaması.',
    image: '/images/project2.jpg',
    technologies: ['Python', 'Tkinter', 'SQLite'],
    demoUrl: 'https://github.com/AhmetMusap-KARAKAYALI/sorubankas-',
    githubUrl: 'https://github.com/AhmetMusap-KARAKAYALI/sorubankas-',
  },
  {
    title: 'Fitness Takip Uygulaması',
    description: 'Kişisel fitness hedeflerinizi takip etmenizi sağlayan, antrenman programı oluşturabileceğiniz bir web uygulaması.',
    image: '/images/project3.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://github.com/AhmetMusap-KARAKAYALI/fitness',
    githubUrl: 'https://github.com/AhmetMusap-KARAKAYALI/fitness',
  },
  {
    title: 'Gezi Rehberi',
    description: 'Seyahat planlarınızı yapmanıza yardımcı olan, gezi rotaları ve öneriler sunan bir uygulama.',
    image: '/images/project4.jpg',
    technologies: ['Python', 'Tkinter'],
    demoUrl: 'https://github.com/AhmetMusap-KARAKAYALI/gezirehberi',
    githubUrl: 'https://github.com/AhmetMusap-KARAKAYALI/gezirehberi',
  },
  {
    title: 'Akıllı Otobüs Doluluk Sistemi',
    description: 'Otobüslerin doluluk oranlarını gerçek zamanlı takip edebileceğiniz, yolculara bilgi veren bir sistem.',
    image: '/images/project5.jpg',
    technologies: ['Python', 'OpenCV', 'Arduino'],
    demoUrl: '#',
    githubUrl: null
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Portfolyo</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 