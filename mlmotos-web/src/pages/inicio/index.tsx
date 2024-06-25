import { BaseLayoutSite } from '@components/BaseLayoutSite'
import { HomeContainerSite } from '@containers/HomeSite'

export default function Inicio() {
  return (
    <>
      <BaseLayoutSite title='Início'>
        <HomeContainerSite />
      </BaseLayoutSite>
    </>
  )
}
