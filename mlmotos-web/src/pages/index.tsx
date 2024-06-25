import { BaseLayout } from '../components/BaseLayout'
import { HomeContainer } from '../containers/Home'
import { withAuth } from '../hooks/wrappers/useAuth'

export default function Home() {
  return (
    <BaseLayout hasSider>
      <HomeContainer />
    </BaseLayout>
  )
}

export const getServerSideProps = withAuth(async function getServerSideProps(context) {
  return context
})
