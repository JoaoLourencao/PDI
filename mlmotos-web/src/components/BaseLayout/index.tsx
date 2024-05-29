import { CustomHeader } from '@components/CustomHeader'
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

  return (
    <Layout className={styles.customLayout} >
      <Head>
        <title>{pageTitle}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <CustomHeader />
      <Layout>
        <CustomSidebar className="tw-hidden md:tw-block" />
        <Layout.Content className='tw-bg-half-black'>
          <div className="tw-mx-12 md:tw-mx-42 tw-my-42">{children}</div>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
