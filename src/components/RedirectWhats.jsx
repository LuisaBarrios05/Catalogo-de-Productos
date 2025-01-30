
const handleWhatsApp = (product) => {
  const message = `Hola, estoy interesad@ en el producto ${product.title}`;
  const whatsappUrl = `https://wa.me/+543758547939?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};
export default handleWhatsApp;