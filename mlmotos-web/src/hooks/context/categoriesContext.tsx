import axiosInstance from '@services/axiosInstance';
import { createContext, useEffect, useState } from 'react';

const CategoriesContext = createContext({
  categoriesReponse: {
    categorias: [],
    categorias_wap: [],
    tp_plataforma: ''
  },
  fetchCategories: async (platform) => { }
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesReponse, setCategoriesReponse] = useState({
    categorias: [],
    categorias_wap: [],
    tp_plataforma: ''
  });

  const fetchCategories = async (platform = { name: '' }) => {
    let platformName = platform?.name || JSON.parse(localStorage.getItem('platform')).name.toUpperCase();
    if (platformName) {
      try {
        const response = await axiosInstance.get(`tendencias/categorias?tp_plataforma=${platformName}&tp_categoria=MAIS_VENDIDOS`);
        if (response.status !== 200) {
          console.error('Failed to get categories', response);
          return {
            categorias: [],
            categorias_wap: [],
            tp_plataforma: ''
          };
        }

        const data = response.data;
        localStorage.setItem('categories', JSON.stringify(data));
        setCategoriesReponse(data);
        return data;
      } catch (e) {
        console.error('Failed to get categories', e);
        return {
          categorias: [],
          categorias_wap: [],
          tp_plataforma: ''
        };
      }
    } else {
      console.error('Platform not found');
      return {
        categorias: [],
        categorias_wap: [],
        tp_plataforma: ''
      };
    }
  };

  useEffect(() => {
    fetchCategories(); // Fetch categories with default platform on mount
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesReponse, fetchCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
