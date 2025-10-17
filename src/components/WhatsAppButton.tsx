import WhatsappIcon from './icons/WhatsappIcon';

const WhatsAppButton = () => {
  const phoneNumber = '6283119226089';
  const message = encodeURIComponent("Halo EduTech Project Consultant, saya tertarik dengan layanan Anda dan ingin berkonsultasi lebih lanjut.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <WhatsappIcon className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
