import Graph from "@components/Icons/Graph";
import GraphOutline from "@components/Icons/GraphOutline";
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
  textColor: string
): MenuItem => ({
  label: (
    <Link href={href} className={href.includes(selectedKeys) ? textColorActive : textColor}>
      {label}
    </Link>
  ),
  key: href,
  icon: href.includes(selectedKeys) ? iconActive : iconInactive,
});

export const getMenuItems = (
  selectedKeys: string,
  darkMode: boolean,
  textColorActive: string,
  textColor: string
): MenuItem[] => {
  const menuItemsConfig: MenuItemConfig[] = [
    {
      href: "/geral",
      label: "Início",
      iconActive: <GraphOutline />,
      iconInactive: <Graph />,
    },
    {
      href: "/profile/list",
      label: "Lista de Perfis",
      iconActive: <GraphOutline />,
      iconInactive: <Graph />,
    },
    {
      href: "/social-cannon",
      label: "Canhão Social",
      iconActive: <GraphOutline />,
      iconInactive: <Graph />,
    },
  ];

  return menuItemsConfig.map((config) =>
    createMenuItem(config, selectedKeys, textColorActive, textColor)
  );
};
