import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Ben Kimim?</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              Merhaba! Ben [İsminiz], tutkulu bir web geliştiricisiyim. Yazılım dünyasında [X] yıldır aktif olarak çalışıyorum
              ve sürekli olarak kendimi geliştirmeye odaklanıyorum.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eğitim</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>[Üniversite Adı] - [Bölüm], [Yıl]</li>
              <li>[Varsa diğer eğitimler]</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Deneyim</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>[Şirket Adı] - [Pozisyon] ([Tarih Aralığı])</li>
              <li>[Diğer deneyimler]</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">İlgi Alanları</h2>
            <p className="mb-6">
              Profesyonel yaşamımın dışında, [hobiler/ilgi alanları] ile ilgileniyorum.
              Teknoloji dünyasındaki gelişmeleri yakından takip ediyor ve yeni şeyler öğrenmeye
              her zaman açık oluyorum.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hedeflerim</h2>
            <p className="mb-6">
              Teknoloji alanında sürekli gelişen ve değişen trendleri takip ederek,
              kullanıcı dostu ve yenilikçi web uygulamaları geliştirmeyi hedefliyorum.
              Aynı zamanda, öğrendiklerimi toplulukla paylaşmayı ve başkalarının gelişimine
              katkıda bulunmayı önemsiyorum.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 