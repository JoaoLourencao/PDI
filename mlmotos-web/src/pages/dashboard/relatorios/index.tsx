import { ReportsContainer } from '@containers/Reports'
import { BaseLayout } from '../../../components/BaseLayout'

export default function Reports() {
  return (
    <>
      <BaseLayout title='Relatórios' hasSider>
        <ReportsContainer />
      </BaseLayout>
    </>
  )
}

// export const getServerSideProps = withAuth(async function getServerSideProps(context) {
//   return context
// })
