import { CategoryDrawer } from "@components/CategoryDrawer";
import { CustomBreadCrumb } from "@components/CustomBreadcrumb";
import { CustomIcon } from "@components/CustomIcon";
import { FilterDrawer } from "@components/FilterDrawer";
import { useDarkMode } from "@hooks/context/darkModeContext";
import { PlatformProps } from "@pages/tendencias/[platformname]/mais-vendidos";
import { Button, Dropdown, Input, Layout, Modal } from "antd";
import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";

interface CustomSubHeaderProps {
  handleBack: () => void;
  platform: PlatformProps;
  openFilter?: boolean;
  showDrawerFilter?: () => void;
  onCloseFilter?: () => void;
  openCategory?: boolean;
  showDrawerCategory?: () => void;
  onCloseCategory?: () => void;
  breadcrumbItems: any;
  bestSellers?: any;
  handleMenuClickPeriod?: (e: any) => void;
  selectedPeriod?: any;
  options?: any;
  hasSearch?: boolean;
  hasButtons?: boolean;
}

export function CustomSubHeader({ handleBack, platform, openFilter, showDrawerFilter, onCloseFilter, openCategory, showDrawerCategory, onCloseCategory, breadcrumbItems, bestSellers, handleMenuClickPeriod, selectedPeriod, options, hasSearch = false, hasButtons = true }: CustomSubHeaderProps) {
  const { darkMode } = useDarkMode();
  const [isOpenPeriod, setIsOpenPeriod] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (searchQuery === '') {
      setIsOpen(false);
    }
  }, [searchQuery]);

  const handleSearchClick = () => {
    if (isOpen && searchQuery) {
      // Realiza a busca
      console.log('Searching for:', searchQuery);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const headerStyles = useMemo(() => ({
    headerBgColor: darkMode ? 'tw-bg-dark-woodsmoke tw-border-b tw-border-dark-baltic-sea' : 'tw-bg-white tw-border-b',
    backButtonColor: darkMode ? 'tw-bg-dark-onyx tw-border-dark-onyx' : 'tw-bg-white tw-border-light-gainsboro',
    arrowStrokeColor: darkMode ? 'tw-stroke-dark-secondary' : 'tw-stroke-light-secondary',
  }), [darkMode]);

  const headerButtonStyles = useMemo(() => ({
    buttonColor: darkMode ? 'tw-bg-dark-onyx tw-border-dark-onyx tw-text-white' : 'tw-bg-white tw-border-light-gainsboro tw-text-light-secondary',
    secondaryButtonColor: darkMode ? 'tw-bg-dark-primary tw-border-dark-shark tw-text-dark-woodsmoke' : 'tw-bg-light-primary tw-border-light-gainsboro tw-text-white',
    iconStrokeColor: darkMode ? 'tw-stroke-dark-secondary' : 'tw-stroke-light-secondary',
    secondaryIconStrokeColor: darkMode ? 'tw-stroke-dark-woodsmoke' : 'tw-stroke-white',
    iconFillColor: darkMode ? 'tw-fill-dark-secondary' : 'tw-fill-light-secondary',
    selectedTextButtonColors: darkMode ? 'tw-text-dark-primary-blue' : 'tw-text-light-primary',
    selectedIconButtonColors: darkMode ? 'tw-stroke-dark-primary-blue' : 'tw-stroke-light-primary',
    selectedBorderColor: darkMode ? 'tw-border-dark-primary tw-shadow-3xl' : 'tw-border-light-primary tw-shadow-3xl',
  }), [darkMode]);

  const cardStyles = useMemo(() => ({
    cardColor: darkMode ? 'tw-bg-dark-woodsmoke' : 'tw-bg-gainsboro',
    iconExitColor: darkMode ? 'tw-stroke-dark-primary' : 'tw-stroke-light-primary',
    textColor: darkMode ? 'tw-text-dark-primary' : 'tw-text-light-primary',
    headerText: darkMode ? "tw-text-light-white" : "tw-text-dark-woodsmoke",
  }), [darkMode]);

  const menuItems = options?.flatMap((option, index) => {
    const items = [
      {
        key: option.key,
        label: (
          <p className={`tw-text-sm tw-font-semibold tw-p-16 ${selectedPeriod && selectedPeriod.key === option.key ? headerButtonStyles.selectedTextButtonColors : 'tw-text-light-slate-gray'}`}>
            {option.text}
          </p>
        ),
      },
    ];
    if (index < options.length - 1) {
      items.push({
        type: 'divider' as const,
      });
    }
    return items;
  });

  const menu = {
    items: menuItems,
    onClick: handleMenuClickPeriod,
    className: `${styles.menuCardUsers} ${cardStyles.cardColor}`,
  };

  return (
    <Layout.Header className={`${headerStyles.headerBgColor} tw-flex tw-relative tw-flex-row tw-justify-between tw-items-center tw-py-40 lg:tw-py-0 tw-px-24 lg:tw-px-42 lg:tw-sticky tw-top-0 tw-z-[999]`}>
      <div className='tw-hidden lg:tw-flex tw-flex-row tw-items-center tw-gap-12'>
        <Button
          className={headerStyles.backButtonColor}
          icon={<CustomIcon name="IconArrowStroke" strokeClassName={headerStyles.arrowStrokeColor} />}
          onClick={handleBack}
          aria-label="Voltar"
        />
        <CustomBreadCrumb items={breadcrumbItems} />
      </div>
      {
        hasButtons && (
          <div className='tw-flex tw-flex-row tw-gap-12'>
            {
              hasSearch && <div className="tw-hidden lg:tw-flex tw-items-center">
                <Input
                  className={`tw-transition-opacity tw-duration-300 tw-rounded-[10px] tw-ease-in-out ${isOpen ? 'tw-opacity-100 tw-block' : 'tw-opacity-0 tw-hidden'} ${headerButtonStyles.buttonColor}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar Produto"
                />
                <div
                  onClick={handleSearchClick}
                  className="tw-ml-12 tw-cursor-pointer tw-flex tw-flex-row tw-items-center tw-rounded-[10px] tw-px-8 tw-py-8 tw-border tw-gap-8"
                >
                  <CustomIcon name="IconSearch" strokeClassName={headerButtonStyles.iconStrokeColor} />
                </div>
              </div>
            }

            <Dropdown menu={menu} trigger={['click']} className='tw-cursor-pointer tw-hidden lg:tw-flex' onOpenChange={(visible) => setIsOpenPeriod(visible)}>
              <div className={`${headerButtonStyles.buttonColor} tw-font-bold tw-cursor-pointer tw-flex tw-flex-row tw-items-center tw-rounded-[10px] tw-px-12 tw-py-8 tw-border tw-gap-8 ${isOpenPeriod ? headerButtonStyles.selectedBorderColor : ''}`}>
                <CustomIcon name="IconCalendar" strokeClassName={isOpenPeriod ? headerButtonStyles.selectedIconButtonColors : `${headerButtonStyles.iconStrokeColor}`} />
                <p className={`tw-text-xs tw-font-semibold ${isOpenPeriod && headerButtonStyles.selectedTextButtonColors}`}>Período: {selectedPeriod ? selectedPeriod.text : 'Selecione uma opção'}</p>
              </div>
            </Dropdown>

            <div onClick={showModal} className={`${headerButtonStyles.buttonColor} tw-font-bold tw-cursor-pointer tw-flex lg:tw-hidden tw-flex-row tw-items-center tw-rounded-[10px] tw-px-12 tw-py-8 tw-border tw-gap-8 ${isOpenPeriod ? headerButtonStyles.selectedBorderColor : ''}`}>
              <CustomIcon name="IconCalendar" strokeClassName={isOpenPeriod ? headerButtonStyles.selectedIconButtonColors : `${headerButtonStyles.iconStrokeColor}`} />
              <p className={`tw-text-xs tw-font-semibold ${isOpenPeriod && headerButtonStyles.selectedTextButtonColors}`}>Período: {selectedPeriod ? selectedPeriod.text : 'Selecione uma opção'}</p>
            </div>

            <Modal className={styles.customMobileModal} open={isModalOpen} footer={null} closable={false} onCancel={() => { handleCancel() }}>
              <div className="tw-h-4 tw-w-36 tw-bg-light-gainsboro tw-rounded-full tw-text-center tw-self-center tw-mt-16" />
              {
                options && options.map((option, index) => {

                  return (
                    <div key={index} onClick={() => handleMenuClickPeriod(option)} className={`${index < options.length - 1 && 'tw-border-b'} tw-py-16 tw-px-24 tw-text-sm tw-font-semibold tw-cursor-pointer ${selectedPeriod && selectedPeriod.key === option.key ? headerButtonStyles.selectedTextButtonColors : 'tw-text-light-slate-gray'}`}>
                      {option.text}
                    </div>
                  )
                })
              }
            </Modal>

            <div onClick={showDrawerFilter} className={`${headerButtonStyles.buttonColor} tw-cursor-pointer tw-flex tw-flex-row tw-items-center tw-rounded-[10px] tw-px-12 tw-py-8 tw-border tw-gap-8`}>
              <CustomIcon name="IconFilter" strokeClassName={''} fillClassName={`${headerButtonStyles.iconFillColor}`} />
              <p className='tw-text-xs tw-font-semibold'>Filtros</p>
            </div>
            <FilterDrawer onClose={onCloseFilter} open={openFilter} />
            <div onClick={showDrawerCategory} className={`${headerButtonStyles.secondaryButtonColor} tw-cursor-pointer tw-hidden md:tw-flex tw-flex-row tw-items-center tw-rounded-[10px] tw-px-12 tw-py-8 tw-border tw-gap-8`}>
              <CustomIcon name="IconBurgerMenuSmall" strokeClassName={headerButtonStyles.secondaryIconStrokeColor} />
              <p className='tw-text-xs tw-font-semibold tw-capitalize'>{bestSellers && bestSellers.nm_categoria ? bestSellers.nm_categoria : 'Wap: Todas as categorias'}</p>
            </div>
            <CategoryDrawer onClose={onCloseCategory} open={openCategory} platform={platform} selectedCategory={bestSellers ? bestSellers : 'Wap: Todas as categorias'} />
          </div>
        )
      }

    </Layout.Header>
  );
}
