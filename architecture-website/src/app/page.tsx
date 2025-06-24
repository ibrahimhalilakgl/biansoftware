'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Web Tasarım',
    description:
      'Modern, kullanıcı dostu ve responsive web tasarımları ile markanızı dijital dünyada öne çıkarıyoruz. SEO uyumlu, hızlı ve etkileyici web siteleri tasarlıyoruz.',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    icon: '💻'
  },
  {
    title: 'Web Geliştirme',
    description:
      'React, Next.js, Node.js gibi modern teknolojilerle güçlü ve ölçeklenebilir web uygulamaları geliştiriyoruz. E-ticaret, CMS ve özel web çözümleri sunuyoruz.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    icon: '⚡'
  },
  {
    title: 'E-Ticaret Çözümleri',
    description:
      'Online satış platformları, ödeme sistemleri entegrasyonu ve e-ticaret web siteleri geliştiriyoruz. WooCommerce, Shopify ve özel e-ticaret çözümleri.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    icon: '🛒'
  },
  {
    title: 'SEO & Dijital Pazarlama',
    description:
      'Web sitenizi arama motorlarında üst sıralara taşıyoruz. SEO optimizasyonu, içerik pazarlaması ve sosyal medya yönetimi hizmetleri sunuyoruz.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    icon: '📈'
  },
  {
    title: 'Bakım & Destek',
    description:
      'Web sitelerinizin sürekli güncel ve güvenli kalması için 7/24 bakım ve destek hizmetleri sunuyoruz. Yedekleme, güvenlik güncellemeleri ve teknik destek.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    icon: '🔧'
  },
];

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="BİAN Software Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              BİAN Software
            </h1>
            <p className="mb-8 text-xl md:text-2xl">
              Dijital dünyada markanızı öne çıkarıyoruz
            </p>
            <p className="mb-8 text-lg text-gray-200">
              Modern web tasarım, geliştirme ve dijital çözümler
            </p>
            <a
              href="mailto:info@biansoftware.com"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
              >
                İletişime Geç
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section id="hizmetler" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dijital dönüşümünüz için ihtiyacınız olan tüm web ve yazılım çözümlerini sunuyoruz
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.02] transition-transform border border-gray-100"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <div className="w-12 h-1 bg-blue-600 mb-4 rounded" />
                  <p className="text-gray-600 flex-1 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknolojiler */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Kullandığımız Teknolojiler</h2>
            <p className="text-xl text-gray-600">Modern ve güvenilir teknolojilerle projelerinizi geliştiriyoruz</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section id="hakkimizda" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Hakkımızda</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                BİAN Software olarak, dijital dünyada markaların başarısı için çalışıyoruz. Modern web teknolojileri ve yaratıcı tasarım anlayışımızla, işletmenizi dijital dünyada öne çıkarıyoruz.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Deneyimli ekibimiz ile web tasarım, web geliştirme, mobil uygulama geliştirme ve dijital pazarlama alanlarında kapsamlı çözümler sunuyoruz. Her projede müşteri memnuniyetini ve kaliteyi ön planda tutuyoruz.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dijital dönüşüm yolculuğunuzda yanınızdayız. Hayalinizdeki projeyi birlikte gerçeğe dönüştürelim.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.964964370964!2d38.3107014!3d38.3457882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407637264f64adf9%3A0x3d56b4673f478666!2sBian%20Mimarl%C4%B1k!5e0!3m2!1str!2str!4v1718030000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BİAN Software Konum"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-8 text-4xl font-bold text-gray-900">İletişim Bilgilerimiz</h2>
            <div className="mb-8 text-gray-600 space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">✉️</span>
                <span><b>E-posta:</b> <a href="mailto:info@biansoftware.com" className="hover:underline text-blue-600">info@biansoftware.com</a></span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">📍</span>
                <span><b>Adres:</b> Hamidiye Mahallesi, Emeksiz Caddesi. Kına Plaza Kat: 3 No: 2 Battalgazi/Malatya</span>
              </div>
            </div>
            <a
              href="mailto:info@biansoftware.com"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
              >
                İletişime Geç
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
