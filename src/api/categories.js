import axiosInstance from './axiosInstance';

export const getCategories = async () => {
    return axiosInstance.get('/categories');
};

export const getCategoryById = async (id) => {
    return axiosInstance.get(`/categories/${id}`);
};

export const createCategory = async (categoryData) => {
    return axiosInstance.post('/categories', categoryData);
};

export const updateCategory = async (id, categoryData) => {
    return axiosInstance.put(`/categories/${id}`, categoryData);
};

export const deleteCategory = async (id) => {
    return axiosInstance.delete(`/categories/${id}`);
};
