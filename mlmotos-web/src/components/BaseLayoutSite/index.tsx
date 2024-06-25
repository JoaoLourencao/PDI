import { CustomHeaderSite } from '@components/CustomHeaderSite'
import { useDarkMode } from '@hooks/context/darkModeContext'
import { Col, Layout, Row } from 'antd'
import Head from 'next/head'
import styles from './styles.module.css'

type Props = {
  hasSider?: boolean
  title?: string
  children: React.ReactNode
}

export function BaseLayoutSite({ title, children }: Props) {
  const pageTitle = title ? `${title} | ML Motos` : 'ML Motos'
  const { darkMode } = useDarkMode()

  return (
    <Layout className={styles.customLayout} >
      <Head>
        <title>{pageTitle}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className='tw-flex tw-flex-row tw-justify-center tw-items-center tw-bg-dark-primary tw-py-10'>
        <a className='tw-text-sm tw-font-bold tw-text-dark-secondary hover:tw-text-opacity-80' href="">Rua Felipe Camarão, 113 - Marília-SP</a>
      </div>
      <CustomHeaderSite />
      <Layout className={darkMode ? 'tw-bg-dark-eerie-black' : 'tw-bg-light-ghost-white'}>
        <Layout.Content className='tw-overflow-auto tw-h-[92vh]'>
          <Row className='tw-py-30 tw-px-50 lg:tw-px-0'>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18, offset: 4 }}>
              {children}
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
