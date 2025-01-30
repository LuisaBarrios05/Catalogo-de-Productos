import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-6">
            <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
                {/* Logo */}
                <div className="mb-4  mx-8 md:mb-0">
                    <img src="/logo.png" alt="Logo" className="w-32" />
                </div>

                {/* Iconos */}
                <div className="flex gap-4 mb-4 mx-8 md:mb-0">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-6 h-6 hover:text-pink-500" />
                    </a>
                    <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="w-6 h-6 hover:text-green-500" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-4 border-t border-gray-700 pt-4">
                <p>&copy; {new Date().getFullYear()} LuisaDev. Todos los derechos reservados.</p>
            </div>
        </footer>
    );

};

export default Footer;
