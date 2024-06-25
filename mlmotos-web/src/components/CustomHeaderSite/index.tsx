import { CustomIcon } from '@components/CustomIcon'
import ThemeSwitcher from '@components/ThemeSwitch'
import { TopicMenu } from '@components/TopicMenu'
import { useDarkMode } from '@hooks/context/darkModeContext'
import { Button, Col, Drawer, Image, Layout, Row } from 'antd'
import cx from 'classnames'
import Cookies from 'js-cookie'
import Link from 'next/link'
import router from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import Logo from '../../assets/images/logo.png'
import { MenuHeader } from './components/MenuHeader'
import { SocialMedias } from './components/SocialMedias'

interface Platform {
  name: string;
  headerTitle: string;
}

interface Props {
  platform?: Platform;
}

export function CustomHeaderSite({ platform = { name: '', headerTitle: '' } }: Props) {
  const [visible, setVisible] = useState(false);
  const { darkMode } = useDarkMode();
  const { name, headerTitle } = platform;

  const handleLogout = useCallback(() => {
    Cookies.remove('access_token');
    router.replace('/login');
  }, [router]);

  const headerStyles = useMemo(() => ({
    headerBgColor: darkMode ? 'tw-bg-dark-woodsmoke' : 'tw-bg-light-white',
    headerBorder: darkMode ? 'lg:tw-border-b lg:tw-border-b-dark-baltic-sea' : 'lg:tw-border-b lg:tw-border-b-white-gainsboro',
    backButtonColor: darkMode ? 'tw-bg-dark-onyx tw-border-dark-onyx' : 'tw-bg-white tw-border-light-gainsboro',
    arrowStrokeColor: darkMode ? 'tw-stroke-dark-secondary' : 'tw-stroke-light-secondary',
    iconMenuStrokeClassName: darkMode ? 'tw-stroke-dark-primary' : 'tw-stroke-white',
    iconMenuFillClassName: darkMode ? 'tw-fill-dark-primary' : 'tw-fill-light-secondary',
    iconExitColor: darkMode ? 'tw-stroke-dark-primary' : 'tw-stroke-light-primary',
    textColor: darkMode ? 'tw-text-dark-secondary' : 'tw-text-light-secondary',
    textColorExit: darkMode ? 'tw-text-dark-primary' : 'tw-text-light-primary',
    borderColor: darkMode ? 'tw-border-dark-baltic-sea' : 'tw-border-white-gainsboro',
  }), [darkMode]);

  const footerStyles = useMemo(() => ({
    footerBgColor: darkMode ? 'tw-bg-dark-woodsmoke' : 'tw-bg-white',
    footerTextColor: darkMode ? 'tw-text-dark-secondary' : 'tw-text-light-secondary',
    footerTextSecondaryColor: darkMode ? 'tw-text-dark-oslo-gray' : 'tw-text-light-slate-gray',
  }), [darkMode]);

  const headerContentClassNames = cx('tw-flex tw-items-center tw-hidden lg:tw-block');

  const renderLogo = () => {
    return (
      <div className='tw-flex tw-justify-start lg:tw-justify-center'>
        <Image width={150} src={Logo.src} preview={false} />
      </div>
    );
  };

  return (
    <Layout.Header
      style={{ position: 'sticky', top: 0, zIndex: 999, width: '100%', alignItems: 'center' }}
      className={`${headerStyles.headerBgColor} tw-h-[82px] tw-content-center ${headerStyles.headerBorder}`}
    >
      <>
        <Row className='tw-text-center tw-items-center'>
          <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 4, offset: 3 }} xl={{ span: 4, offset: 3 }}>
            <Link href="/inicio">
              {renderLogo()}
            </Link>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0, offset: 0 }} lg={{ span: 12, offset: 0 }} xl={{ span: 12, offset: 0 }}>
            <div>
              <MenuHeader />
            </div>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0, offset: 0 }} lg={{ span: 2, offset: 0 }} xl={{ span: 2, offset: 0 }}>
            <SocialMedias />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 0 }} xl={{ span: 0 }}>
            <div className='tw-flex tw-justify-end'>
              <div className='tw-bg-transparent' onClick={() => setVisible(true)}>
                <CustomIcon name="IconBurgerMenu" strokeClassName={headerStyles.iconMenuStrokeClassName} fillClassName={headerStyles.iconMenuFillClassName} />
              </div>
              <Drawer
                className={`${headerStyles.headerBgColor} lg:tw-hidden`}
                width={900}
                closable={false}
                open={visible}
                footer={
                  <div className='tw-flex tw-flex-row tw-p-24 tw-items-center tw-justify-between'>
                    <div>
                      <p className={`tw-text-base tw-font-semibold ${footerStyles.footerTextColor}`}>Cor do sistema</p>
                      <p className='tw-text-xs tw-text-dark-oslo-gray tw-font-medium'>
                        {darkMode ? 'Modo escuro ativado.' : 'Modo claro ativado.'}
                      </p>
                    </div>
                    <ThemeSwitcher />
                  </div>
                }
              >
                <div>
                  <div className={`tw-flex tw-items-center tw-justify-between tw-border-b tw-p-24 tw-sticky tw-top-0 ${headerStyles.borderColor} ${headerStyles.headerBgColor}`}>
                    <Button
                      className={headerStyles.backButtonColor}
                      icon={<CustomIcon name="IconArrowStroke" strokeClassName={headerStyles.arrowStrokeColor} />}
                      onClick={() => setVisible(false)}
                      aria-label="Voltar"
                    />
                    <p className={`tw-text-sm tw-font-semibold tw-ml-26 ${headerStyles.textColor}`}>Menu</p>
                    <div onClick={handleLogout} className={`${headerStyles.textColorExit} tw-flex tw-flex-row tw-items-center tw-gap-12`}>
                      <CustomIcon name='IconLogout' strokeClassName={headerStyles.iconExitColor} />
                      <p className='tw-font-semibold tw-text-base'>Sair</p>
                    </div>
                  </div>
                  <div className='tw-mx-8'>
                    <TopicMenu />
                  </div>
                </div>
              </Drawer>
            </div>
          </Col>
        </Row>
      </>
    </Layout.Header>
  );
}
