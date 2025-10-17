import { BookOpen, Code, Database, Layers, PenTool, Tv } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: "Penulisan Proposal & Skripsi",
    description: "Penulisan lengkap (Bab 1-5) disesuaikan dengan kaidah ilmiah dan format universitas."
  },
  {
    icon: Code,
    title: "Pengembangan Aplikasi",
    description: "Aplikasi berbasis Website, Mobile (Android/iOS), dan Desktop sesuai topik penelitian Anda."
  },
  {
    icon: Layers,
    title: "Desain & Implementasi Sistem",
    description: "Sistem informasi, e-commerce, e-learning, sistem monitoring, dan manajemen data."
  },
  {
    icon: Tv,
    title: "Pendampingan Akademik & E-Course",
    description: "Pelatihan pembuatan proposal, analisis data, dan bimbingan pengembangan aplikasi."
  },
  {
    icon: PenTool,
    title: "Desain UI/UX & Visual",
    description: "Desain UI/UX aplikasi, branding digital, dan animasi edukatif untuk mahasiswa DKV."
  },
  {
    icon: Database,
    title: "Platform E-Learning",
    description: "Pengembangan platform pembelajaran daring dengan integrasi video, kuis, dan penilaian otomatis."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Layanan Utama Kami</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Kami memberikan solusi komprehensif dari ide penelitian hingga produk jadi yang siap digunakan.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
              <div className="bg-brand-blue-light text-white p-4 rounded-full mb-6">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
