import { GetServerSidePropsContext } from 'next'
import CookieToObject from '../../utils/cookieToObject'

export function withAuth(handler) {
  return async function (context: GetServerSidePropsContext) {
    try {
      let contextWithAuth = {
        req: {
          headers: {
            cookie: context.req.headers.cookie
          }
        }
      }
      const cookies: any = CookieToObject(contextWithAuth.req.headers.cookie)
      const isLogin = context.req.url.includes('/login')

      const redirectToLogin = {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }

      if (!cookies && !isLogin) {
        return redirectToLogin
      }

      if (!cookies && isLogin) {
        return await handler({ props: {} })
      }

      if (!cookies.access_token && !isLogin) {
        return redirectToLogin
      }

      if (!cookies.access_token && isLogin) {
        return await handler({ props: {} })
      }

      return await handler({ props: { session: cookies.access_token !== undefined } })
    } catch (err) {
      console.error(err)
      context.req.headers.cookie = ''
      return {
        ...context,
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }
  }
}
