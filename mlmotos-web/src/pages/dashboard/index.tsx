import { BaseLayout } from '@components/BaseLayout'
import { DashboardContainer } from '@containers/Dashboard'

export default function Dashboard() {
  return (
    <>
      <BaseLayout title='Dashboard'>
        <DashboardContainer />
      </BaseLayout>
    </>
  )
}

// export const getServerSideProps = withAuth(async function getServerSideProps(context) {
//   return context
// })
