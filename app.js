const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Kişisel bilgiler
const personalInfo = {
    name: "Ahmet Musap KARAKAYALI",
    title: "Bilgisayar Mühendisliği Öğrencisi",
    description: "Merhaba! Ben Ahmet Musap KARAKAYALI. Balıkesir Üniversitesi'nde Bilgisayar Mühendisliği okuyorum. Yazılım geliştirme ve yeni teknolojiler konusunda tutkulu bir öğrenciyim.",
    education: [
        {
            school: "Balıkesir Üniversitesi",
            degree: "Lisans - Bilgisayar Mühendisliği",
            year: "2023 - Devam Ediyor"
        },
        {
            school: "Tarsus Şehit Halil Özdemir Fen Lisesi",
            degree: "Lise",
            year: "2018 - 2022"
        }
    ],
    skills: [
        {
            category: "Programlama Dilleri",
            items: ["JavaScript", "Python", "Java", "C", "C#"]
        },
        {
            category: "Web Teknolojileri",
            items: ["HTML5", "CSS3", "React.js"]
        },
        {
            category: "Mobil Teknolojiler",
            items: ["Flutter"]
        },
        {
            category: "Veritabanları",
            items: ["SQLite"]
        }
    ],
    certificates: [
        {
            name: "Ege Bilişim Zirvesi",
            issuer: "Ege Üniversitesi",
            date: "2024"
        },
        {
            name: "A'dan Z'ye Siber Güvenlik",
            issuer: "Siber Güvenlik Akademisi",
            date: "2023"
        }
    ],
    socialMedia: {
        github: "https://github.com/AhmetMusap-KARAKAYALI",
        linkedin: "https://www.linkedin.com/in/ahmet-musap-karakayali-323705293",
        instagram: "https://www.instagram.com/musap.karakayal1?igsh=bHM4YW5icXpmaXA2",
        youtube: "https://youtube.com/shorts/Qsu6_RDHfII?si=MvPrqk4EVNW7Xyjx",
        facebook: "https://www.facebook.com/share/15hPo6TJRt/"
    }
};

// Proje verileri
const projects = [
  {
    id: 2,
    title: 'Soru Bankası Uygulaması',
    description: 'Öğrencilerin çalışma sürecini kolaylaştıran, kişiselleştirilmiş soru havuzu ve analiz özellikleri sunan masaüstü uygulaması.',
    technologies: ['C#', '.NET', 'WPF', 'SQLite'],
    category: 'desktop',
    type: 'Akademik Proje',
    image: '/images/lined-paper.jpg',
    githubLink: 'https://github.com/AhmetMusap-KARAKAYALI/sorubankas-'
  },
  {
    id: 3,
    title: 'Modern Notepad',
    description: 'Gelişmiş metin düzenleme özellikleri ve modern arayüz tasarımı ile klasik not defteri uygulamasının yeniden yorumlanması.',
    technologies: ['Java', 'JavaFX', 'Scene Builder'],
    category: 'desktop',
    type: 'Kişisel Proje',
    image: '/images/question-marks-paper.jpg',
    githubLink: 'https://github.com/AhmetMusap-KARAKAYALI/notepad'
  },
  {
    id: 4,
    title: 'Gezi Rehberi Uygulaması',
    description: 'Görsel programlama dersi kapsamında geliştirilen bu uygulama, kullanıcılara şehirleri keşfetme ve gezi planı oluşturma imkanı sunuyor. Modern ve kullanıcı dostu arayüzü ile seyahat planlamasını kolaylaştırıyor.',
    technologies: ['PyQt5', 'Qt Designer', 'Python', 'SQLite'],
    category: 'desktop',
    type: 'Akademik Proje',
    image: '/images/world-night.jpg',
    githubLink: 'https://github.com/AhmetMusap-KARAKAYALI/gezirehberi'
  },
  {
    id: 5,
    title: 'Fitness Takip Uygulaması',
    description: 'Kullanıcıların fitness hedeflerini takip edebilecekleri, beslenme ve egzersiz programlarını yönetebilecekleri kapsamlı web uygulaması.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'web',
    type: 'Kişisel Proje',
    image: '/images/dumbbell-rack.jpg',
    githubLink: 'https://github.com/AhmetMusap-KARAKAYALI/fitness'
  },
  {
    id: 1,
    title: 'Akıllı Otobüs Doluluk Sistemi',
    description: 'TEKNOFEST 2024 projesi kapsamında geliştirilen bu sistem, görüntü işleme teknolojileri kullanarak otobüslerdeki doluluk oranını tespit ediyor ve yolculara rahat ulaşım imkanı sunuyor.',
    technologies: ['OpenCV', 'Dart', 'Flutter', 'Görüntü İşleme'],
    category: 'mobile',
    type: 'TEKNOFEST Projesi',
    image: '/images/bus-blur.jpg',
    githubLink: null
  }
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Ana Sayfa',
    projects: projects,
    personalInfo: personalInfo
  });
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { 
    title: 'Portfolyo',
    projects: projects,
    personalInfo: personalInfo
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'Hakkımda',
    personalInfo: personalInfo
  });
});

app.get('/skills', (req, res) => {
  res.render('skills', { 
    title: 'Yeteneklerim',
    personalInfo: personalInfo
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'İletişim',
    personalInfo: personalInfo
  });
});

// İletişim formu gönderimi
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Burada e-posta gönderme işlemi yapılabilir
  res.json({ success: true });
});

// Proje detay sayfası route'u
app.get('/projects/:projectId', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.projectId));
  if (!project) {
    return res.status(404).render('404', { 
      title: 'Sayfa Bulunamadı',
      personalInfo: personalInfo
    });
  }
  res.render('project-detail', { 
    title: project.title,
    project: project,
    personalInfo: personalInfo
  });
});

// 404 sayfası
app.use((req, res) => {
  res.status(404).render('404', { 
    title: 'Sayfa Bulunamadı',
    personalInfo: personalInfo
  });
});

// Port dinleme
const server = app.listen(port, () => {
  const serverUrl = `http://localhost:${port}`;
  console.log(`Server is running at ${serverUrl}`);
  console.log('Press Ctrl+C to stop the server');
}); 