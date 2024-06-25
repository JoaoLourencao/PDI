import { SettingsContainer } from '@containers/Settings'
import { BaseLayout } from '../../../components/BaseLayout'

export default function Settings() {
  return (
    <>
      <BaseLayout title='Configurações' hasSider>
        <SettingsContainer />
      </BaseLayout>
    </>
  )
}

// export const getServerSideProps = withAuth(async function getServerSideProps(context) {
//   return context
// })
