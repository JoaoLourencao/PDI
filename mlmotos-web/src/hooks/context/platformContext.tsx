import { createContext, useContext, useState } from "react";

const PlatformContext = createContext({
  platform: {
    name: '',
    headerTitle: '',
    category: '',
    categoryId: '',
  },
  setPlatformData: (platform) => { },
  resetPlatformData: () => { }
});

export const usePlatform = () => {
  return useContext(PlatformContext);
};

export const PlatformProvider = ({ children }) => {
  const [platform, setPlatform] = useState({
    name: '',
    headerTitle: '',
    category: '',
    categoryId: '',
  });

  const setPlatformData = (newData) => {
    console.log('newData', newData);
    setPlatform((prevPlatform) => {
      const updatedPlatform = {
        ...prevPlatform,
        ...newData
      };
      localStorage.setItem("platform", JSON.stringify(updatedPlatform));
      return updatedPlatform;
    });
  };

  const resetPlatformData = () => {
    setPlatform({
      name: '',
      headerTitle: '',
      category: '',
      categoryId: '',
    });
  };

  return (
    <PlatformContext.Provider value={{ platform, setPlatformData, resetPlatformData }}>
      {children}
    </PlatformContext.Provider>
  );
};
