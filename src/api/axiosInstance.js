import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});
//manejo de errores globales, después ajustar
axiosInstance.interceptors.response.use(
    (response) => response, // Procesar la respuesta normalmente
    (error) => {
        // Si hay un error, manejarlo aquí
        if (error.response) {
            // Errores enviados por el servidor (4xx, 5xx)
            console.error(`Error del servidor: ${error.response.status} - ${error.response.data.message}`);
        } else if (error.request) {
            // No hubo respuesta del servidor
            console.error('El servidor no respondió:', error.request);
        } else {
            // Error al configurar la solicitud
            console.error('Error al configurar la solicitud:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;