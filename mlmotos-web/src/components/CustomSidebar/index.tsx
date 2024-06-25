import ArrowSidebarLeftDark from '@components/Icons/ArrowSidebarLeftDark'
import ArrowSidebarLeftLight from '@components/Icons/ArrowSidebarLeftLight'
import ArrowSidebarRightDark from '@components/Icons/ArrowSidebarRightDark'
import ArrowSidebarRightLight from '@components/Icons/ArrowSidebarRightLight'
import { useDarkMode } from '@hooks/context/darkModeContext'
import { getMenuItems } from '@utils/menuItems'
import { Layout, Menu } from 'antd'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import styles from './styles.module.css'

type Props = {
  className: string,
}

function CustomMenu({ role = 'admin' }) {
  const { darkMode } = useDarkMode()
  const selectedKeys = [location.pathname]
  const sideBarBg = darkMode ? "tw-bg-dark-woodsmoke" : "tw-bg-light-white"
  const textColorActive = darkMode ? "tw-text-dark-primary" : "tw-text-light-primary"
  const textColor = darkMode ? "tw-text-dark-oslo-gray" : "tw-text-light-slate-gray"
  const menuItems = getMenuItems(selectedKeys[0].split('/')[2], darkMode, textColorActive, textColor)

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['/dashboard/home']}
      selectedKeys={[`/${selectedKeys[0].split('/')[2]}`]}
      items={menuItems}
      className={`${sideBarBg} tw-border-0`}
    />
  )
}

export function CustomSidebar({ className }: Props) {
  const [mounted, setMounted] = useState(false)
  const [isCollapseLocalStorage, setIsCollapseLocalStorage] = useLocalStorage('sider-collapse', false)

  const { darkMode } = useDarkMode()
  const sideBarBg = darkMode ? "tw-bg-dark-woodsmoke tw-border-r-dark-baltic-sea" : "tw-bg-light-white tw-border-r-white-gainsboro"
  const stylesSider = darkMode ? styles.siderDark : ''
  const arrowSideLeft = darkMode ? <ArrowSidebarLeftDark /> : <ArrowSidebarLeftLight />
  const arrowSideRight = darkMode ? <ArrowSidebarRightDark /> : <ArrowSidebarRightLight />

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Layout.Sider
      collapsed={isCollapseLocalStorage}
      breakpoint={!isCollapseLocalStorage ? 'xl' : null}
      className={`${sideBarBg} tw-overflow-auto tw-border-r-[1px] ${styles.sider} ${stylesSider} ${className}`}
      collapsible
      collapsedWidth={100}
      width={342}
      trigger={isCollapseLocalStorage ? arrowSideRight : arrowSideLeft}
      onCollapse={(collapsed) => {
        setIsCollapseLocalStorage(collapsed)
      }}>
      <div className="tw-mt-32 tw-mr-0 tw-mb-40 tw-mx-0">
        <CustomMenu />
      </div>
    </Layout.Sider>
  )
}
