const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Hata yakalama middleware'i
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('404', { 
    title: 'Sunucu Hatası',
    personalInfo: personalInfo,
    error: process.env.NODE_ENV === 'development' ? err.message : 'Bir hata oluştu'
  });
});

// Middleware
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Statik dosyalar için mutlak yol
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));
app.use('/images', express.static(path.join(publicPath, 'images')));
app.use('/css', express.static(path.join(publicPath, 'css')));
app.use('/js', express.static(path.join(publicPath, 'js')));
app.use('/certificates', express.static(path.join(publicPath, 'certificates')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS ayarları
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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
app.get('/', (req, res, next) => {
  try {
    res.render('index', { 
      title: 'Ana Sayfa',
      projects: projects,
      personalInfo: personalInfo
    });
  } catch (error) {
    next(error);
  }
});

app.get('/portfolio', (req, res, next) => {
  try {
    res.render('portfolio', { 
      title: 'Portfolyo',
      projects: projects,
      personalInfo: personalInfo
    });
  } catch (error) {
    next(error);
  }
});

app.get('/about', (req, res, next) => {
  try {
    res.render('about', { 
      title: 'Hakkımda',
      personalInfo: personalInfo
    });
  } catch (error) {
    next(error);
  }
});

app.get('/skills', (req, res, next) => {
  try {
    res.render('skills', { 
      title: 'Yeteneklerim',
      personalInfo: personalInfo
    });
  } catch (error) {
    next(error);
  }
});

app.get('/contact', (req, res, next) => {
  try {
    res.render('contact', { 
      title: 'İletişim',
      personalInfo: personalInfo
    });
  } catch (error) {
    next(error);
  }
});

// İletişim formu gönderimi
app.post('/contact', (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    // Burada e-posta gönderme işlemi yapılabilir
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

// Proje detay sayfası route'u
app.get('/projects/:projectId', (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
});

// 404 sayfası
app.use((req, res) => {
  res.status(404).render('404', { 
    title: 'Sayfa Bulunamadı',
    personalInfo: personalInfo
  });
});

// Port dinleme
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

module.exports = app; 