import { useRouter } from 'next/router'

type Props = {
}

export function HomeContainer() {
  const router = useRouter()

  return (
    <>
      <p>Início</p>
    </>
  )
}
