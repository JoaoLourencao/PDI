import LoginContainer from '@containers/Login'
import { withAuth } from '@hooks/wrappers/useAuth'
import Head from 'next/head'


export default function Login() {
  return (
    <>
      <Head>
        <title>Login | ML Motos</title>
      </Head>
      <LoginContainer />
    </>
  )
}

export const getServerSideProps = withAuth(async function getServerSideProps(context) {
  return context
})
