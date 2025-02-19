import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { getCategories, createCategory } from "../../api/categories";
import { validateFormCreate } from "../adminProduct/formCreateValidation";
import { formatPrice, parsePrice } from "../../utils/formatPrice";

const FormCreate = ({ onSubmit, isAdmin }) => {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        image: null,
        description: "",
        categoryId: "",
        stock: "",
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategories();
                setCategories(response.data);
            } catch (error) {
                console.error("Error obteniendo categorías:", error);
            }
        };
        fetchCategories();
    }, []);

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;

        let formattedValue = value;

        if (name === "price") {
            formattedValue = formatPrice(value)
        }
        else if (["title", "description"].includes(name)) {
            formattedValue = capitalizeFirstLetter(value);
        }

        setFormData({ ...formData, [name]: formattedValue });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
    
        if (name === "price") {
            setFormData({ ...formData, [name]: formatPriceOnBlur(value) }); // Formateo final
        }
    };
    

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file }); // Guardar el archivo
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Vista previa
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateFormCreate(formData);
        if (Object.keys(errors).length > 0) {
            console.error("Errores en el formulario:", errors);
            return;
        }

        const formDataToSend = new FormData();

        // Agregar cada campo al FormData

        // Convertir el precio a un número antes de enviarlo
        const numericPrice = parsePrice(formData.price);

        formDataToSend.append("title", formData.title);
        formDataToSend.append("price", numericPrice);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("categoryId", formData.categoryId);
        formDataToSend.append("stock", formData.stock);

        // Agregar imagen solo si existe
        if (formData.image) {
            formDataToSend.append("image", formData.image);
        }

        try {
            await onSubmit(formDataToSend);
        } catch (error) {
            console.error("Error al crear producto:", error);
        }
    };

    const handleAddCategory = async () => {
        const newCategoryName = prompt("Ingrese el nombre de la nueva categoría:");
        if (newCategoryName) {
            try {
                const response = await createCategory({ name: newCategoryName });
                setCategories([...categories, response.data])
            } catch (error) {
                console.error("Error al agregar categoría", error);
            }
        }
    }
    // if (!isAdmin) {
    //     return (
    //         <div className="max-w-lg mx-auto bg-white border border-gray-600 p-6 rounded-xl shadow-lg text-center">
    //             <h2 className="text-lg font-semibold text-black">
    //                 No tienes permisos para crear productos.
    //             </h2>
    //         </div>
    //     );
    // }

    return (
        <div className="max-w-2xl mx-auto bg-white border border-gray-600 p-6 rounded-xl shadow-lg mt-5">
            {/* Título */}
            <h2 className="text-xl font-semibold text-black text-center mb-4">
                Crear Producto
            </h2>
            <hr className="m-8 border border-gray-300" />
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                {/* Columna izquierda: Imagen */}
                <div className="flex flex-col items-center">

                    <label
                        htmlFor="imageUpload"
                        className="w-56 h-56 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg cursor-pointer"
                    >
                        {imagePreview ? (
                            <img
                                src={imagePreview}
                                alt="Vista previa"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        ) : (
                            <div className="flex flex-col items-center">
                                <FaPlus className="text-gray-500 text-3xl" />
                                <p>Agregar imagen</p>
                            </div>
                        )}
                    </label>
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                </div>

                {/* Columna derecha: Campos del formulario */}
                <div className="space-y-3">
                    <div>
                        <label className="block text-black text-sm font-medium">Título</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-pink-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-black text-sm font-medium">Precio</label>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-pink-300"
                            required

                        />
                    </div>

                    <div>
                        <label className="block text-black text-sm font-medium">Descripción</label>
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-pink-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-black text-sm font-medium">Categoría</label>
                        <div className="flex items-center gap-2">
                            <select
                                name="categoryId"
                                value={formData.categoryId}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-pink-300"
                                required
                            >
                                <option value="">Seleccionar una categoría</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <button
                                type="button"
                                className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
                                onClick={handleAddCategory}
                            >
                                <FaPlus />
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-black text-sm font-medium">Stock</label>
                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-pink-300"
                            required
                        />
                    </div>
                </div>

                {/* Botón de enviar en toda la fila */}
                <div className="col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className="w-80 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
                    >
                        Crear Producto
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormCreate;
