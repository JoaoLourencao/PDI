import { CustomIcon } from "@components/CustomIcon";
import { useDarkMode } from "@hooks/context/darkModeContext";
import { Menu } from "antd";
import Cookies from "js-cookie";
import router from "next/router";
import { useCallback, useMemo } from "react";
import styles from "./styles.module.css";

interface Props {
  profile: any;
}

export function CustomMenu({ profile }: Props) {
  const { primaryEmail } = profile;
  const { darkMode } = useDarkMode();
  const cardStyles = useMemo(() => ({
    cardColor: darkMode ? 'tw-bg-dark-shark' : 'tw-bg-gainsboro',
    iconExitColor: darkMode ? 'tw-stroke-dark-primary' : 'tw-stroke-light-primary',
    textColor: darkMode ? 'tw-text-dark-primary' : 'tw-text-light-primary',
    headerText: darkMode ? "tw-text-light-white" : "tw-text-dark-woodsmoke"
  }), [darkMode]);

  const handleLogout = useCallback(() => {
    Cookies.remove('access_token');
    router.replace('/login');
  }, [router]);

  return (
    <Menu className={`${styles.menuCardUsers} ${cardStyles.cardColor}`}>
      <div onClick={handleLogout} className='tw-px-24 tw-py-24 tw-cursor-pointer'>
        <p className='tw-text-sm tw-text-dark-oslo-gray tw-mb-16 tw-font-medium'>{primaryEmail}</p>
        <div className={`${cardStyles.textColor} tw-flex tw-flex-row tw-items-center tw-gap-12`}>
          <CustomIcon name='IconLogout' strokeClassName={cardStyles.iconExitColor} />
          <p className='tw-font-semibold tw-text-base'>Sair</p>
        </div>
      </div>
    </Menu>
  );
}
