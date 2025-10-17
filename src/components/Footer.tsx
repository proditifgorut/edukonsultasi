import { GraduationCap, Mail } from 'lucide-react';
import WhatsappIcon from './icons/WhatsappIcon';

const Footer = () => {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-brand-gold" />
              <span className="text-xl font-bold text-white">EduTech Project Consultant</span>
            </a>
            <p className="text-blue-200 max-w-md">
              Partner Anda dalam menjembatani teori akademik dengan inovasi teknologi. Kami membantu Anda sukses dari ide hingga implementasi.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#features" className="text-blue-200 hover:text-white transition-colors">Mengapa Kami</a></li>
              <li><a href="#pricing" className="text-blue-200 hover:text-white transition-colors">Harga</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-brand-gold"/>
                <a href="mailto:infoedukonsultasi@unisgu.ac.id" className="text-blue-200 hover:text-white transition-colors">infoedukonsultasi@unisgu.ac.id</a>
              </li>
              <li className="flex items-center">
                <WhatsappIcon className="h-[18px] w-[18px] mr-3 text-brand-gold"/>
                <a href="https://wa.me/6283119226089" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">+62 831-1922-6089</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-800 pt-8 text-center text-blue-300">
          <p>&copy; 2025 EduTech Project Consultant. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
