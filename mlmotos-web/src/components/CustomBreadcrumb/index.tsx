import { CustomIcon } from "@components/CustomIcon";
import { useDarkMode } from "@hooks/context/darkModeContext";
import { Breadcrumb } from "antd";
import React from "react";
import styles from "./styles.module.css";

interface BreadcrumbItem {
  key: string;
  title: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export function CustomBreadCrumb({ items, separator, ...rest }: Props) {
  const { darkMode } = useDarkMode();
  const arrowStrokeColor = darkMode ? 'tw-stroke-dark-secondary' : 'tw-stroke-light-secondary';

  const defaultSeparator = (
    <div className='tw-h-full tw-w-full tw-content-center'>
      <CustomIcon name='IconArrowStroke' strokeClassName={arrowStrokeColor} className='tw-rotate-180' />
    </div>
  );

  const breadcrumbItems = items.map(item => ({
    title: item.title,
    href: item.href,
    key: item.key,
  }));

  return (
    <Breadcrumb
      className={styles.breadcrumb}
      separator={separator || defaultSeparator}
      items={breadcrumbItems}
      {...rest} />
  );
}
