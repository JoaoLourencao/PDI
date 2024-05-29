import { MenuOutlined } from '@ant-design/icons'
import Logo from '@assets/images/logoNoBg.png'
import { HeaderUserCard } from '@components/HeaderUserCard'
import { TopicMenu } from '@components/TopicMenu'
import { Button, Drawer, Image, Layout } from 'antd'
import cx from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

export function CustomHeader() {
  const [visible, setVisible] = useState(false);

  const headerBg = "tw-bg-nero"
  const headerBorder = "tw-border-grey"

  const headerContentClassNames = cx('tw-flex tw-items-center tw-hidden md:tw-block')
  let person = {
    id: 1234,
    primaryEmail: 'admin@gmail.com',
    create_at: new Date(),
    givenName: 'Admin',
    fullName: 'System Admin',
    occupation_title: 'Admin',
    occupation_description: 'Desenvolvedor Fullstack',
    phone: '123456789',
    photo: '',
    role: 'admin',
  }
  return (
    <Layout.Header className={`${headerBg} ${headerBorder} tw-border-b-[1px] tw-px-42 tw-h-[82px] tw-content-center tw-border-b-[#26282E]`} >
      <div className='tw-flex tw-flex-row tw-justify-between tw-items-center'>
        <Link href="/dashboard" passHref>
          <Image preview={false} src={Logo.src} alt="Logo" height={25} />
        </Link>
        <div className={headerContentClassNames}>
          <HeaderUserCard personData={person} />
        </div>
        <div className='tw-block md:tw-hidden'>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setVisible(true)}
          />
          <Drawer
            className={`${headerBg} md:tw-hidden`}
            title="Menu"
            placement="right"
            onClick={() => setVisible(false)}
            onClose={() => setVisible(false)}
            open={visible}
          >
            <TopicMenu />
          </Drawer>
        </div>
      </div>
    </Layout.Header >
  )
}
