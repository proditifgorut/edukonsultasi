import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-brand-blue-light to-brand-blue text-white overflow-hidden">
       <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-80px)] py-20 md:py-0">
          <div className="text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Partner Akademik & Teknologi Anda
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto md:mx-0">
              Dari ide penelitian hingga aplikasi siap pakai. Kami menyediakan solusi terpadu untuk proposal, skripsi, dan pengembangan program untuk semua bidang ilmu.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#pricing" className="bg-brand-gold hover:bg-brand-gold-dark text-brand-blue font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                Lihat Paket Harga
                <ArrowRight size={20} />
              </a>
              <a href="#services" className="bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/30 flex items-center justify-center">
                Jelajahi Layanan
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x500/FFFFFF/0D47A1?text=Ilustrasi+EduTech&font=raleway" 
              alt="Ilustrasi konsultan membantu mahasiswa dengan proyek digital"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
