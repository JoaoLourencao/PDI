import { ConfigProvider, theme } from 'antd';
import { AuthProvider } from '../hooks/context/authContext';
import { DarkModeProvider, useDarkMode } from '../hooks/context/darkModeContext';
import '../styles/fonts.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <DarkModeProvider>
      <MyAppContent Component={Component} session={session} pageProps={pageProps} />
    </DarkModeProvider>
  );
}

const MyAppContent = ({ Component, session, pageProps }) => {
  const { darkMode } = useDarkMode();

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          fontFamily: 'Montserrat',
          colorTextPlaceholder: '#707589',
          colorBgBase: darkMode ? '#1D1E21' : '#FAFAFC '
        },
      }}
    >
      <AuthProvider session={session}>
        <Component {...pageProps} />
      </AuthProvider>
    </ConfigProvider>
  );
};

export default MyApp;
