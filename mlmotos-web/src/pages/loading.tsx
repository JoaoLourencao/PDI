'use client'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomLoading } from '../components/CustomLoading'

export default function Loading() {
  const router = useRouter()

  useEffect(() => {
    const redirect = () => router.push((router.query.redirect as string) || ('/geral' as string))
    if (router.query.delay) {
      setTimeout(() => {
        redirect()
      }, Number(router.query.delay))
    } else {
      redirect()
    }
  })

  return (
    <main>
      <CustomLoading />
    </main>
  )
}
