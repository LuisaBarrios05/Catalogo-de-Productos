
    const handleWhatsApp = (product) => {
      const message = `Hola, estoy interesado en la vela: ${product.title}`;
      const whatsappUrl = `https://wa.me/+543758430739?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };
    export default handleWhatsApp;