'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Mimari Proje Hizmetleri',
    description:
      'Yenilikçi, fonksiyonel ve estetik mimari projeler ile yaşam alanlarınızı en iyi şekilde tasarlıyoruz. Her projede kullanıcı odaklı, sürdürülebilir ve çağdaş çözümler sunuyoruz.',
    image:
      'https://norm-art.com/wp-content/uploads/2020/09/mimarlik-1024x683.jpg',
  },
  {
    title: 'İç Mimarlık Hizmetleri',
    description:
      'İç mekanlarınızda estetik, konfor ve fonksiyonelliği bir araya getiriyoruz. Kişiye ve mekana özel iç mimari çözümler ile yaşam alanlarınızı güzelleştiriyoruz.',
    image:
      'https://www.hca.com.tr/webimg/img/blog/uygun-fiyatli-ic-mimarlik-hizmeti.jpg',
  },
  {
    title: 'Proje Yönetim Hizmetleri',
    description:
      'Projelerinizin her aşamasında profesyonel yönetim ve danışmanlık hizmeti sunuyoruz. Zamanında ve bütçeye uygun teslimat için tüm süreçleri titizlikle takip ediyoruz.',
    image:
      'https://revconyapi.com/wp-content/uploads/2023/11/CB-SA%C2%B6z-Bir-Blog-35.jpg',
  },
  {
    title: 'Uygulama Hizmetleri',
    description:
      'Anahtar teslim uygulama ve inşaat hizmetlerimiz ile projelerinizi hayata geçiriyoruz. Kaliteli malzeme ve işçilik ile güvenilir çözümler sunuyoruz.',
    image:
      'https://www.axainsaat.com/wp-content/uploads/2023/11/mimari-proje-1024x683-1.jpg',
  },
  {
    title: '3D Görselleştirme Hizmetleri',
    description:
      'Projelerinizi hayata geçmeden önce gerçekçi 3D görseller ile deneyimleyin. Sunum ve pazarlama süreçleriniz için etkileyici görselleştirme hizmetleri sağlıyoruz.',
    image:
      'https://norwellan.com/wp-content/uploads/2024/04/c43862184245961.65faf6fba408f.gif',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
            alt="Bian Mimarlık Logo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              Bian Mimarlık
            </h1>
            <p className="mb-8 text-xl md:text-2xl">
              Geleceğin yaşam alanlarını bugünden tasarlıyoruz
            </p>
            <a
              href="https://wa.me/905414434648"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-black px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-gray-800"
              >
                İletişime Geç
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section id="hizmetler" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-black tracking-tight">Hizmetlerimiz</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:scale-[1.025] transition-transform border border-gray-200"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx === 0}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-2xl font-semibold mb-2 text-black tracking-tight">{service.title}</h2>
                  <div className="w-12 h-1 bg-black mb-4 rounded" />
                  <p className="text-gray-700 mb-4 flex-1 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hakkımızda ve Harita */}
      <section id="hakkimizda" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.964964370964!2d38.3107014!3d38.3457882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407637264f64adf9%3A0x3d56b4673f478666!2sBian%20Mimarl%C4%B1k!5e0!3m2!1str!2str!4v1718030000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bian Mimarlık Konum"
              ></iframe>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">Hakkımızda</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Bian Mimarlık olarak; yenilikçi, fonksiyonel ve estetik çözümlerle yaşam alanlarınıza değer katıyoruz. Mimari proje, iç mimarlık, proje yönetimi, uygulama ve 3D görselleştirme alanlarında uzman ekibimizle, her projede müşteri memnuniyetini ve kaliteyi ön planda tutuyoruz. 
                <br /><br />
                Vizyonumuz; modern mimarlık anlayışını, sürdürülebilirlik ve kullanıcı odaklı tasarım ilkeleriyle birleştirerek, bulunduğumuz her mekâna özgün bir kimlik kazandırmaktır. 
                <br /><br />
                Hayalinizdeki projeyi birlikte gerçeğe dönüştürmek için buradayız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-4xl font-bold">İletişim Bilgilerimiz</h2>
            <div className="mb-8 text-gray-600 space-y-2">
              <div><b>Telefon:</b> <a href="tel:+905414434648" className="hover:underline">+90 541 443 4648</a></div>
              <div><b>E-posta:</b> <a href="mailto:ensarisaracoglu@hotmail.com" className="hover:underline">ensarisaracoglu@hotmail.com</a></div>
              <div><b>Adres:</b> Hamidiye Mahallesi, Emeksiz Caddesi. Kına Plaza Kat: 3 No: 2 Battalgazi/Malatya</div>
            </div>
            <a
              href="https://wa.me/905414434648"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-black px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-gray-800"
              >
                İletişime Geçin
              </motion.button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
