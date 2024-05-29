import { useDarkMode } from '@hooks/context/darkModeContext';
import { getMenuItems } from '@utils/menuItems';
import { Menu } from 'antd';
import styles from './styles.module.css';

export function TopicMenu() {

  const selectedKeys = [location.pathname]
  const { darkMode } = useDarkMode()
  const sideBarBg = darkMode ? "tw-bg-dark-woodsmoke" : "tw-bg-light-white"
  const textColorActive = darkMode ? "tw-text-dark-primary" : "tw-text-light-primary"
  const textColor = darkMode ? "tw-text-dark-oslo-gray" : "tw-text-light-slate-gray"
  const stylesMobileMenu = darkMode && styles.mobileMenuDark

  const menuItems = getMenuItems(selectedKeys[0].split('/')[1], darkMode, textColorActive, textColor)

  return (
    <div
      className={`${styles.mobileMenu} ${stylesMobileMenu}`}
    >
      <Menu
        className={`${sideBarBg} tw-border-0`}
        mode="inline"
        defaultSelectedKeys={['/home']}
        selectedKeys={[`/${selectedKeys[0].split('/')[1]}`]}
        items={menuItems}
      />
    </div>
  );
}
