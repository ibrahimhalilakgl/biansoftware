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

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-5xl font-bold text-black tracking-tight">Hizmetlerimiz</h1>
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
    </main>
  );
} 