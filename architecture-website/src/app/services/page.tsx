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

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">Hizmetlerimiz</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dijital dönüşümünüz için ihtiyacınız olan tüm web ve yazılım çözümlerini sunuyoruz
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={service.title}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h2>
                <div className="w-12 h-1 bg-blue-600 mb-4 rounded"></div>
                <p className="text-gray-600 flex-1 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 