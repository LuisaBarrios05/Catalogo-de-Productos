import axiosInstance from './axiosInstance';

export const getProducts = async () => {
    try {
        const response = await axiosInstance.get('products'); // Ruta después de baseURL

        return response.data;
    } catch (error) {
        console.error('Error al obtener los productos:', error.message);
    }

};

export const getProductById = async (id) => {
    return axiosInstance.get(`/products/${id}`);
};

export const createProduct = async (productData) => {
    return axiosInstance.post('/products', productData);
};

export const updateProduct = async (id, productData) => {
    return axiosInstance.put(`/products/${id}`, productData);
};

export const deleteProduct = async (id) => {
    return axiosInstance.delete(`/products/${id}`);
};
