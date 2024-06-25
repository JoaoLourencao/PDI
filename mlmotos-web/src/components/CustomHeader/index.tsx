import { CustomIcon } from '@components/CustomIcon'
import { HeaderUserCard } from '@components/HeaderUserCard'
import ThemeSwitcher from '@components/ThemeSwitch'
import { TopicMenu } from '@components/TopicMenu'
import { useDarkMode } from '@hooks/context/darkModeContext'
import { Button, Drawer, Image, Layout } from 'antd'
import cx from 'classnames'
import Cookies from 'js-cookie'
import Link from 'next/link'
import router from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import Logo from '../../assets/images/logo.png'

interface Platform {
  name: string;
  headerTitle: string;
}

interface Props {
  platform?: Platform;
}

export function CustomHeader({ platform = { name: '', headerTitle: '' } }: Props) {
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

  const person = useMemo(() => ({
    id: 1234,
    primaryEmail: 'joao@gmail.com',
    create_at: new Date(),
    givenName: 'João Lourenção',
    fullName: 'João Lourenção',
    occupation_title: 'Desenvolvedor',
    occupation_description: 'Desenvolvedor Fullstack',
    phone: '123456789',
    photo: '',
    role: 'Desenvolvedor',
  }), []);

  const renderLogo = () => {
    return (
      <div className='tw-flex'>
        <Image width={150} src={Logo.src} preview={false} />
      </div>
    );
  };

  return (
    <Layout.Header
      style={{ position: 'sticky', top: 0, zIndex: 999, width: '100%', alignItems: 'center' }}
      className={`${headerStyles.headerBgColor} tw-px-24 lg:tw-px-42 tw-h-[82px] tw-content-center ${headerStyles.headerBorder}`}
    >
      <div className='tw-flex tw-flex-row tw-justify-between tw-items-center'>
        {name ? (
          <>
            <div className='tw-flex lg:tw-hidden tw-flex-row tw-items-center tw-gap-12'>
              <Button
                className={headerStyles.backButtonColor}
                icon={<CustomIcon name="IconArrowStroke" strokeClassName={headerStyles.arrowStrokeColor} />}
                onClick={() => router.back()}
                aria-label="Voltar"
              />
              <p className='tw-text-sm tw-font-semibold'>{headerTitle}</p>
            </div>
            <Link className='tw-hidden lg:tw-block' href="/dashboard/home">
              {renderLogo()}
            </Link>
          </>
        ) : (
          <Link href="/dashboard/home">
            {renderLogo()}
          </Link>
        )}
        <div className={headerContentClassNames}>
          <HeaderUserCard personData={person} />
        </div>
        <div className='tw-block lg:tw-hidden'>
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
              <div>
                <HeaderUserCard personData={person} />
              </div>
              <div className='tw-mx-8'>
                <TopicMenu />
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </Layout.Header>
  );
}
