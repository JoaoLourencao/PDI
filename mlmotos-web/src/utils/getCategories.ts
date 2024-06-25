import axiosInstance from '@services/axiosInstance';

export async function handlesGetCategories(platformName: string) {
  if (platformName) {
    try {
      const response = await axiosInstance.get(`tendencias/categorias?tp_plataforma=${platformName}&tp_categoria=MAIS_VENDIDOS`);
      if (response.status !== 200) {
        throw new Error('Failed to get categories');
      }

      const data = response.data;

      localStorage.setItem('categories', JSON.stringify(data));
      return data
    } catch (e) {
      console.error(e);
    }
  } else {
    console.error('Platform not found');
  }
}
