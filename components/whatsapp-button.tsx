import { FaWhatsapp } from 'react-icons/fa6'

const whatsappNumber = '5545988311915'
const whatsappHref = `https://wa.me/${whatsappNumber}`

const WhatsAppFloatButton = () => {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed z-40 right-4 bottom-20 md:bottom-6 md:right-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 transition-colors hover:bg-emerald-600 hover:shadow-emerald-500/60 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-emerald-400 dark:bg-emerald-600 dark:hover:bg-emerald-500"
    >
      <FaWhatsapp className="h-6 w-6" />
    </a>
  )
}

export default WhatsAppFloatButton
