import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Authorization': `Bearer ${Cookies.get('access_token')}`,
  },
});

// Interceptor de requisição para adicionar o token de acesso a cada requisição
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get('access_token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Interceptor de resposta para lidar com erros
axiosInstance.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  const status = error.response ? error.response.status : null;

  // if (status === 401) {
  //   try {
  //     // Tente atualizar o token de acesso aqui
  //     // const { data } = await axiosInstance.post('/auth/refresh', { token: Cookies.get('access_token') });

  //     // Cookies.set('access_token', data.token);
  //     // error.config.headers['Authorization'] = `Bearer ${data.token}`;

  //     // Retente a requisição original com o novo token
  //     // return axiosInstance(error.config);

  //   } catch (refreshError) {
  //     // Se a atualização do token falhar, redirecionar para a página de login
  //     Cookies.remove('access_token');
  //     window.location.href = '/login';
  //     return Promise.reject(refreshError);
  //   }
  // }

  // if (status === 401) {
  //   // Se a resposta for 403 (proibido), remover o token e redirecionar para login
  //   Cookies.remove('access_token');
  //   window.location.href = '/login';
  // }

  return Promise.reject(error);
});

export default axiosInstance;
