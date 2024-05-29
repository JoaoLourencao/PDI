import ArrowSideLeft from '@components/Icons/ArrowSidebarLeft'
import ArrowSideRight from '@components/Icons/ArrowSidebarRight'
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
  const sideBarBg = "tw-bg-nero"
  const textColorActive = "tw-text-nero"
  const textColor = "tw-text-white"

  console.log(selectedKeys[0].split('/')[1])
  console.log(selectedKeys[0])

  const menuItems = getMenuItems(selectedKeys[0].split('/')[1], darkMode, textColorActive, textColor)

  if (selectedKeys[0].includes('/profile'))
    selectedKeys.push('/profile/list')

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['/dashboard']}
      selectedKeys={selectedKeys}
      items={menuItems}
      className={`${sideBarBg} tw-border-0`}
    />
  )
}

export function CustomSidebar({ className }: Props) {
  const [mounted, setMounted] = useState(false)
  const [isCollapseLocalStorage, setIsCollapseLocalStorage] = useLocalStorage('sider-collapse', false)

  const { darkMode } = useDarkMode()
  const sideBarBg = "tw-bg-nero"
  const sideBarBorder = "tw-border-r-gray"
  const stylesSider = darkMode && styles.siderDark

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Layout.Sider
      collapsed={isCollapseLocalStorage}
      breakpoint={"xl"}
      className={`${sideBarBg} ${sideBarBorder} tw-overflow-auto tw-border-r-[1px] ${styles.sider} ${stylesSider} ${className}`}
      collapsible
      collapsedWidth={100}
      width={300}
      trigger={isCollapseLocalStorage ? <ArrowSideRight /> : <ArrowSideLeft />}
      onCollapse={(collapsed) => {
        setIsCollapseLocalStorage(collapsed)
      }}>
      <div className="tw-mt-32 tw-mr-0 tw-mb-40 tw-mx-0">
        <CustomMenu />
      </div>
    </Layout.Sider>
  )
}
