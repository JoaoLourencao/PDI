import { HomeContainer } from '@containers/Home'
import { BaseLayout } from '../../../components/BaseLayout'

export default function Home() {
  return (
    <>
      <BaseLayout title='Início' hasSider>
        <HomeContainer />
      </BaseLayout>
    </>
  )
}

// export const getServerSideProps = withAuth(async function getServerSideProps(context) {
//   return context
// })
