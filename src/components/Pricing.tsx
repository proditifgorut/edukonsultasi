import { CheckCircle, Star } from 'lucide-react';
import { useState } from 'react';

const academicPlans = [
  { name: 'Akademik Dasar', price: '500.000', features: ['Proposal Bab 1-3', 'Sesuai format kampus', '1x Revisi', 'Konsultasi 30 menit'] },
  { name: 'Riset Standar', price: '1.500.000', popular: true, features: ['Skripsi Lengkap Bab 1-5', 'Revisi hingga ACC', 'Format Word + PDF', 'Kutipan & daftar pustaka otomatis'] },
  { name: 'Tesis Premium', price: '2.800.000', features: ['Proposal + Skripsi Lengkap', 'Revisi tanpa batas hingga ACC', 'Panduan presentasi sidang', 'Konsultasi via Zoom/Chat'] },
];

const devPlans = [
  { name: 'Aplikasi Starter', price: '1.800.000', features: ['Desain sederhana (1-3 halaman)', 'Backend dasar (CRUD)', 'Gratis hosting 1 bulan', 'Dokumentasi singkat'] },
  { name: 'Sistem Profesional', price: '3.500.000', popular: true, features: ['Fitur login & multiuser', 'Dashboard Admin', 'Database MySQL/Firebase', 'Laporan otomatis (PDF/Excel)'] },
  { name: 'Kustom Enterprise', price: '7.000.000', features: ['Fitur kompleks & siap AI', 'Desain UI/UX profesional', 'Integrasi API & Keamanan', 'Maintenance 1 bulan'] },
];

const customPlans = [
  { name: 'Riset Akademik Kustom', price: '2.000.000', features: ['Metode penelitian unik', 'Analisis data SPSS/Python', 'Bab teori khusus'] },
  { name: 'Sistem Multi-Disiplin', price: '5.000.000', popular: true, features: ['Kombinasi antar bidang (misal: TI + Hukum)', 'Integrasi database & visualisasi', 'Desain adaptif'] },
  { name: 'Platform E-Course Kustom', price: '6.000.000', features: ['Platform e-learning lengkap', 'Modul video, kuis, dashboard', 'Sertifikat otomatis'] },
];

const PricingCard = ({ plan, isPopular }: { plan: any, isPopular?: boolean }) => (
  <div className={`border rounded-xl p-8 flex flex-col h-full ${isPopular ? 'border-brand-blue-light shadow-2xl scale-105 bg-white' : 'border-gray-200 bg-gray-50'}`}>
    {isPopular && (
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <span className="bg-brand-blue-light text-white text-xs font-bold px-4 py-1 rounded-full uppercase flex items-center gap-1"><Star size={12}/> Paling Populer</span>
      </div>
    )}
    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
    <p className="mt-4 text-gray-900">
      <span className="text-sm font-medium">Mulai dari </span>
      <span className="text-4xl font-extrabold">Rp {plan.price}</span>
    </p>
    <ul className="mt-6 space-y-4 text-gray-600 flex-grow">
      {plan.features.map((feature: string) => (
        <li key={feature} className="flex items-start">
          <CheckCircle className="h-5 w-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
          <span className="ml-3">{feature}</span>
        </li>
      ))}
    </ul>
    <a href="#" className={`mt-8 block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${isPopular ? 'bg-brand-blue hover:bg-brand-blue-dark text-white' : 'bg-white border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'}`}>
      Pilih Paket
    </a>
  </div>
);

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('dev');

  const tabs = [
    { id: 'dev', label: 'Pengembangan Aplikasi' },
    { id: 'academic', label: 'Penulisan Akademik' },
    { id: 'custom', label: 'Proyek Kustom' },
  ];

  const plans:any = {
    academic: academicPlans,
    dev: devPlans,
    custom: customPlans,
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Harga Fleksibel & Transparan</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Pilih paket yang sesuai dengan kebutuhan Anda, atau hubungi kami untuk penawaran khusus.</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-gray-200 rounded-full p-1 flex space-x-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors ${activeTab === tab.id ? 'bg-white text-brand-blue shadow' : 'text-gray-600 hover:bg-gray-300'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 xl:gap-10 items-start">
          {plans[activeTab].map((plan: any) => (
            <div key={plan.name} className="relative">
              <PricingCard plan={plan} isPopular={plan.popular} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
            <h4 className="text-xl font-semibold">Butuh solusi kustom?</h4>
            <p className="text-gray-600 mt-2">Kami bisa membangun apa saja. Hubungi kami untuk penawaran personal untuk proyek unik Anda.</p>
            <a href="#" className="mt-4 inline-block bg-brand-gold hover:bg-brand-gold-dark text-brand-blue font-bold py-3 px-8 rounded-full transition-colors">
                Hubungi Kami
            </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
