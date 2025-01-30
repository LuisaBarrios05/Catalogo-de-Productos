import axiosInstance from './axiosInstance';

export const getUsers = async () => {
    return axiosInstance.get('/users');
};

export const getUserById = async (id) => {
    return axiosInstance.get(`/users/${id}`);
};

export const createUser = async (userData) => {
    return axiosInstance.post('/users', userData);
};

export const updateUser = async (id, userData) => {
    return axiosInstance.put(`/users/${id}`, userData);
};

export const deleteUser = async (id) => {
    return axiosInstance.delete(`/users/${id}`);
};
