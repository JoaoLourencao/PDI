import { useRouter } from 'next/router'
import { CustomLoading } from '../../components/CustomLoading'

export default function LoadingContainer() {
  const router = useRouter()

  const redirect = () => router.push((router.query.redirect as string) || ('/home' as string))

  if (router.query.delay) {
    setTimeout(() => {
      redirect()
    }, Number(router.query.delay))
  } else {
    redirect()
  }

  return (
    <main>
      <CustomLoading />
    </main>
  )
}
