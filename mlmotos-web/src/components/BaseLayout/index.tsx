import { CustomHeader } from '@components/CustomHeader'
import { useDarkMode } from '@hooks/context/darkModeContext'
import { Layout } from 'antd'
import Head from 'next/head'
import { CustomSidebar } from '../CustomSidebar'
import styles from './styles.module.css'

type Props = {
  hasSider?: boolean
  title?: string
  children: React.ReactNode
}

export function BaseLayout({ title, children }: Props) {
  const pageTitle = title ? `${title} | ML Motos` : 'ML Motos'
  const { darkMode } = useDarkMode()

  return (
    <Layout className={styles.customLayout} >
      <Head>
        <title>{pageTitle}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <CustomHeader />
      <Layout className={darkMode ? 'tw-bg-dark-eerie-black' : 'tw-bg-light-ghost-white'}>
        <CustomSidebar className="tw-hidden lg:tw-block" />
        <Layout.Content className='tw-overflow-auto tw-h-[92vh]'>
          <div className="tw-px-24 tw-py-[33px] lg:tw-px-42 lg:tw-py-58">{children}</div>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
