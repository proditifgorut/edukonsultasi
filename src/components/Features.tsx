import { CheckCircle, Combine, Users, Timer, Globe } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: "Kualitas & Orisinalitas",
    description: "Setiap proyek dikerjakan dari nol, dijamin bebas plagiarisme dan unik."
  },
  {
    icon: Combine,
    title: "Integrasi Ilmu & Teknologi",
    description: "Kami ahli dalam memadukan riset teoretis dengan aplikasi digital di dunia nyata."
  },
  {
    icon: Users,
    title: "Konsultasi & Pendampingan Personal",
    description: "Kami membimbing Anda untuk memahami proyek secara mendalam, bukan hanya menerima hasil jadi."
  },
  {
    icon: Timer,
    title: "Tepat Waktu & Terukur",
    description: "Setiap tahap dijadwalkan dengan rapi untuk memenuhi tenggat waktu kampus Anda."
  },
  {
    icon: Globe,
    title: "Fleksibel & Multi-Disiplin",
    description: "Mendukung proyek lintas jurusan dan integrasi antar-disiplin ilmu."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Mengapa Bermitra Dengan Kami?</h2>
            <p className="text-lg text-gray-600">
              Kami bukan sekadar penyedia jasa, tetapi partner akademik dan teknologi yang membantu Anda memahami, menyusun, dan mewujudkan ide penelitian menjadi karya nyata dan aplikatif.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                    <feature.icon size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/500x550/0D47A1/FFFFFF?text=Nilai+Kami&font=raleway" 
              alt="Gambar abstrak yang merepresentasikan nilai brand seperti kualitas dan kepercayaan"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
