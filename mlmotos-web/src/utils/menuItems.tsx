import { CustomIcon } from "@components/CustomIcon";
import { Tooltip } from "antd";
import Link from "next/link";

type MenuItem = {
  label: JSX.Element;
  key: string;
  icon: JSX.Element;
  children?: MenuItem[];
};

type MenuItemConfig = {
  href: string;
  label: string;
  iconActive: JSX.Element;
  iconInactive: JSX.Element;
};

const createMenuItem = (
  { href, label, iconActive, iconInactive }: MenuItemConfig,
  selectedKeys: string,
  textColorActive: string,
  textColor: string,
  darkMode: boolean
): MenuItem => ({
  label: (
    <Link href={href} className={href.includes(selectedKeys) ? textColorActive : textColor}>
      {label}
    </Link>
  ),
  key: href,
  icon: (
    <Tooltip title={label} placement="right" color={darkMode ? '#32343B' : '#1D1E21'} key={href} destroyTooltipOnHide>
      <Link href={href} className={href.includes(selectedKeys) ? textColorActive : textColor}>
        {href.includes(selectedKeys) ? iconActive : iconInactive}
      </Link>
    </Tooltip>
  ),
});

export const getMenuItems = (
  selectedKeys: string,
  darkMode: boolean,
  textColorActive: string,
  textColor: string
): MenuItem[] => {
  const activeColor = darkMode ? "tw-stroke-dark-primary" : "tw-stroke-light-primary"
  const inactiveColor = darkMode ? "tw-stroke-dark-oslo-gray" : "tw-stroke-light-slate-gray"
  const menuItemsConfig: MenuItemConfig[] = [
    {
      href: "/dashboard/home",
      label: "Início",
      iconActive: <CustomIcon name="IconHome" strokeClassName={activeColor} />,
      iconInactive: <CustomIcon name="IconHome" strokeClassName={inactiveColor} />,
    },
    {
      href: "/dashboard/relatorios",
      label: "Relatórios",
      iconActive: <CustomIcon name="IconReports" strokeClassName={activeColor} />,
      iconInactive: <CustomIcon name="IconReports" strokeClassName={inactiveColor} />,
    },
    {
      href: "/dashboard/configuracoes",
      label: "Configurações",
      iconActive: <CustomIcon name="IconSettings" strokeClassName={activeColor} />,
      iconInactive: <CustomIcon name="IconSettings" strokeClassName={inactiveColor} />,
    }
  ];

  return menuItemsConfig.map((config) =>
    createMenuItem(config, selectedKeys, textColorActive, textColor, darkMode)
  );
};
