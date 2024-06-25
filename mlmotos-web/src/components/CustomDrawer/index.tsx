import { CustomIcon } from "@components/CustomIcon";
import { useDarkMode } from "@hooks/context/darkModeContext";
import { Drawer } from "antd";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
  title: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
}

export function CustomDrawer({ onClose, open, title, children, placement = "right" }: Props) {
  const router = useRouter();
  const { darkMode } = useDarkMode();

  const drawerStyles = useMemo(() => ({
    exitIconFillColor: darkMode ? 'tw-fill-dark-secondary' : 'tw-fill-light-secondary',
    exitBorderColor: darkMode ? 'tw-bg-dark-onyx tw-border-transparent' : 'tw-border-light-gainsboro',
  }), [darkMode]);

  return (
    <Drawer
      title={title}
      onClose={onClose}
      className={darkMode ? 'tw-bg-dark-woodsmoke' : 'tw-bg-white'}
      closable={false}
      width={478}
      placement={placement}
      open={open}
      extra={
        <div onClick={onClose} className={`tw-cursor-pointer tw-border tw-rounded-full tw-p-2 tw-flex ${drawerStyles.exitBorderColor}`}>
          <CustomIcon name='IconClose' fillClassName={drawerStyles.exitIconFillColor} />
        </div>
      }
    >
      {children}
    </Drawer>
  );
}
