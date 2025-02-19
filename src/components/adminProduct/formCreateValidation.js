export const validateFormCreate = (formData) => {
    const errors = {};

    // Validación del título
    if (!formData.title) {
        errors.title = "El título es obligatorio.";
    } else if (!/^[A-Z][A-Za-z\s]{0,29}$/.test(formData.title)) {
        errors.title = "El título debe empezar con mayúscula, sin números y máximo 30 caracteres.";
    }

    // Validación del precio
    if (!formData.price) {
        errors.price = "El precio es obligatorio.";
    } else if (!/^[0-9$,.]+$/.test(formData.price)) {
        errors.price = "El precio solo puede contener números y los caracteres especiales ($, .).";
    }

    // Validación de la descripción
    if (!formData.description) {
        errors.description = "La descripción es obligatoria.";
    } else if (!/^[A-Z][A-Za-z0-9\s¿?¡!.,\""-]{0,28}[.]$/.test(formData.description)) {
        errors.description = "Debe empezar con mayúscula, terminar en punto y máximo 30 caracteres.";
    }

    // Validación de categoría (si se crea una nueva)
    if (formData.newCategory && !/^[A-Z][a-z]{0,17}$/.test(formData.newCategory)) {
        errors.newCategory = "La categoría debe empezar con mayúscula, sin caracteres especiales y máximo 18 letras.";
    }

    // Validación del stock
    if (!formData.stock) {
        errors.stock = "El stock es obligatorio.";
    } else if (!/^\d{1,10}$/.test(formData.stock)) {
        errors.stock = "El stock solo puede contener números y máximo 10 cifras.";
    }

    return errors;
};
