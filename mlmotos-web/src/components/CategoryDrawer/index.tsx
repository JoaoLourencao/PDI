import { CustomIcon } from "@components/CustomIcon";
import CategoriesContext from "@hooks/context/categoriesContext";
import { useDarkMode } from "@hooks/context/darkModeContext";
import { usePlatform } from "@hooks/context/platformContext";
import { convertToPath } from "@utils/convertToPath";
import { Collapse, Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useState } from "react";
import styles from './styles.module.css';

interface Props {
  onClose: () => void;
  open: boolean;
  selectedCategory?: any;
}

interface Category {
  id: string;
  nm_categoria: string;
  subcategorias: Category[];
}

interface CategoryData {
  categorias_wap: Category[];
  categorias: Category[];
  tp_plataforma: string;
}

export function CategoryDrawer({ onClose, open, selectedCategory }: Props) {
  const router = useRouter();
  const { platform } = usePlatform();
  const { darkMode } = useDarkMode();
  const { fetchCategories } = useContext(CategoriesContext);
  const [localCategories, setLocalCategories] = useState<CategoryData>({
    categorias: [],
    categorias_wap: [],
    tp_plataforma: ''
  });

  const drawerStyles = useMemo(() => ({
    exitIconFillColor: darkMode ? 'tw-fill-dark-secondary' : 'tw-fill-light-secondary',
    exitBorderColor: darkMode ? 'tw-bg-dark-onyx tw-border-transparent' : 'tw-border-light-gainsboro',
  }), [darkMode]);

  useEffect(() => {
    const platformName = platform ? platform?.name.toUpperCase() : JSON.parse(localStorage.getItem('platform')).name;

    const loadCategories = async () => {
      const categories = await fetchCategories(platformName); // Fetch categories
      setLocalCategories(categories);
    };

    loadCategories();
  }, []);

  const renderChildren = (category: Category) => {
    return [{
      key: category.id,
      label: (
        <Link onClick={() => localStorage.setItem('category', category.nm_categoria)} href={`${router.asPath}/${convertToPath(category.nm_categoria)}`}>
          <span className={`${selectedCategory.nm_categoria === category.nm_categoria ? `${darkMode ? 'tw-text-dark-primary-blue' : 'tw-text-light-primary'} tw-font-semibold` : `${darkMode ? 'hover:tw-text-dark-primary-blue' : 'hover:tw-text-light-primary'} tw-text-light-slate-gray`} tw-font-medium tw-text-sm hover:tw-font-semibold`}>
            {category.nm_categoria}
          </span>
        </Link>
      ),
      children: (
        <div className={`tw-border-l ${darkMode ? 'tw-border-[#2C2E35]' : 'tw-border-light-gainsboro'}`}>
          {category.subcategorias.map((subcategory) => {
            return (
              subcategory.subcategorias.length > 0
                ? <Collapse key={subcategory.id} className={darkMode ? styles.subCollapseDark : styles.subCollapse} ghost items={renderChildren(subcategory)} expandIconPosition="end" />
                : (
                  <Link onClick={() => localStorage.setItem('category', category.nm_categoria)} key={subcategory.id} href={`${router.asPath}/${convertToPath(subcategory.nm_categoria)}`}>
                    <p className={`${selectedCategory.nm_categoria === subcategory.nm_categoria ? (darkMode ? 'hover:tw-text-dark-primary-blue' : 'tw-text-light-primary') : 'tw-text-dark-oslo-gray'} tw-ml-24 tw-mb-24 ${darkMode ? 'hover:tw-text-dark-primary-blue' : 'tw-text-light-slate-gray hover:tw-text-light-primary'} tw-font-medium tw-text-sm hover:tw-font-semibold`}>
                      {subcategory.nm_categoria}
                    </p>
                  </Link>
                )
            )
          })}
        </div>
      )
    }];
  }

  const renderCategoryItems = (categories: Category[], isWap = false) => (
    <div className={`tw-border-l ${darkMode ? 'tw-border-[#2C2E35]' : 'tw-border-light-gainsboro'}`}>
      {
        isWap && (
          <Link onClick={() => localStorage.setItem('category', category.nm_categoria)} href={`${router.asPath}`}>
            <p className={`tw-ml-24 tw-font-medium tw-text-sm tw-mb-24 hover:tw-font-semibold ${router.asPath.split('/').at(-1) === 'mais-vendidos' ? `${darkMode ? 'tw-text-dark-primary-blue' : 'tw-text-light-primary'} tw-font-semibold` : 'tw-text-light-slate-gray'}`}>
              Ver Tudo em Wap
            </p>
          </Link>
        )
      }
      {categories.map((category) => {
        if (selectedCategory.nm_categoria === category.nm_categoria) {
          console.log(selectedCategory.nm_categoria, '1');
          console.log(category.nm_categoria, '2');
        }
        return (
          category.subcategorias.length > 0
            ? <Collapse key={category.id} className={darkMode ? styles.subCollapseDark : styles.subCollapse} ghost items={renderChildren(category)} expandIconPosition="end" />
            : (
              <Link key={category.id} onClick={() => localStorage.setItem('category', category.nm_categoria)} href={`/tendencias/${platform?.name}/mais-vendidos/categoria/${category.id}`}>
                <p className={`${selectedCategory.nm_categoria === category.nm_categoria ? `${darkMode ? 'tw-text-dark-primary-blue' : 'tw-text-light-primary'} tw-font-semibold` : `${darkMode ? 'hover:tw-text-dark-primary-blue' : 'hover:tw-text-light-primary'} tw-text-light-slate-gray`} tw-ml-24 tw-mb-24 tw-font-medium tw-text-sm hover:tw-font-semibold`}>
                  {category.nm_categoria}
                </p>
              </Link>
            )
        )
      })}
    </div>
  );

  const wapCategories = localCategories.categorias_wap || [];
  const platformCategories = localCategories.categorias || [];

  return (
    <Drawer
      title="Categorias"
      onClose={onClose}
      className={darkMode ? 'tw-bg-dark-woodsmoke' : 'tw-bg-white'}
      closable={false}
      width={478}
      open={open}
      extra={
        <div onClick={onClose} className={`tw-cursor-pointer tw-border tw-rounded-full tw-p-2 tw-flex ${drawerStyles.exitBorderColor}`}>
          <CustomIcon name='IconClose' fillClassName={drawerStyles.exitIconFillColor} />
        </div>
      }
    >
      {wapCategories.length > 0 && (
        <Collapse
          className={darkMode ? styles.collapseStyleDark : styles.collapseStyle}
          defaultActiveKey={['1']}
          ghost
          items={[{
            key: '1',
            label: 'Wap',
            children: renderCategoryItems(wapCategories, true)
          }]}
          expandIconPosition="end"
        />
      )}
      {platformCategories.length > 0 && (
        <Collapse
          className={darkMode ? styles.collapseStyleDark : styles.collapseStyle}
          ghost
          items={[{
            key: '1',
            label: localCategories?.tp_plataforma,
            children: renderCategoryItems(platformCategories)
          }]}
          expandIconPosition="end"
        />
      )}
      {wapCategories.length === 0 && platformCategories.length === 0 && (
        <div className="tw-p-42">
          <p className={`${darkMode ? 'tw-text-dark-oslo-gray' : 'tw-text-light-slate-gray'} tw-font-medium tw-text-sm`}>
            Nenhuma categoria encontrada.
          </p>
        </div>
      )}
    </Drawer>
  );
}
