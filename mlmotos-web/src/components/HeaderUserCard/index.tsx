import { useDarkMode } from '@hooks/context/darkModeContext'
import { Dropdown, Menu } from 'antd'
import Cookies from 'js-cookie'
import { get } from 'lodash'
import { useRouter } from 'next/router'
import { HeaderButton } from '../HeaderButton'
import { HeaderLoadingAvatar } from '../HeaderLoadingAvatar'
import ArrowDown from '../Icons/ArrowDown'
import styles from './styles.module.css'

type Props = {
  personData: any
}

export function HeaderUserCard({ personData }: Props) {
  const router = useRouter()

  const handleLogout = () => {
    Cookies.remove('access_token')

    router.replace('/login')
  }

  const menu = (
    <Menu>
      <Menu.Item key="0" className={styles.menuCardUsers}>
        <HeaderButton text="Logout" type="link" className="hover:tw-no-underline" onclick={handleLogout} />
      </Menu.Item>
    </Menu>
  )

  // personData = undefined

  const image = get(personData, 'photo', '') as string
  const name = get(personData, 'givenName', '') as string

  const { darkMode } = useDarkMode()
  const headerText = "tw-text-white"

  if (!personData) return <HeaderLoadingAvatar menu={menu} image={image} name={name} />

  return (
    <div className="tw-flex tw-items-center">
      <div className="tw-mr-12">
        <div className="tw-flex">
          <h3 className={`${headerText} tw-leading-normal tw-text-base tw-font-semibold`}>{name}</h3>
          <Dropdown overlay={menu} trigger={['click']} className="tw-ml-8">
            <button className="tw-p-2">
              <ArrowDown />
            </button>
          </Dropdown>
        </div>
      </div>
      <div className="">
        {/* <HeaderUserAvatar src={image} alt={name} /> */}
      </div>
    </div>
  )
}
