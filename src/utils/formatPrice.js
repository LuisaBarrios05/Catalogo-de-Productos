export const formatPrice = (inputValue) => {
    if (!inputValue) return "";

    // Eliminar caracteres inválidos y permitir solo un punto o coma decimal
    let numericValue = inputValue.replace(/[^\d,]/g, "").replace(/,{2,}/g, ",");

    // Si comienza con coma, agregar un cero delante
    if (numericValue.startsWith(",")) {
        numericValue = "0" + numericValue;
    }

    return numericValue;
};

// Formatea el precio correctamente cuando el usuario sale del input
export const formatPriceOnBlur = (inputValue) => {
    let numericValue = inputValue.replace(/[^\d,]/g, "").replace(",", ".");

    let number = parseFloat(numericValue);
    if (isNaN(number)) return "0,00";

    return number.toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

// Convierte el precio formateado a número antes de enviarlo a la DB
export const parsePrice = (formattedPrice) => {
    if (!formattedPrice) return 0;

    let numericValue = formattedPrice.replace(/[^\d,]/g, "").replace(",", ".");

    return parseFloat(numericValue) || 0;
};
