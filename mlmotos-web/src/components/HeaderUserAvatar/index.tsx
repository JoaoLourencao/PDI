import NoLogoAvailable from '@assets/images/no-logo-available.svg'
import Image from 'next/image'

interface Props {
  src?: string
  alt?: string
  size?: number
  unoptimized?: boolean
}

export function HeaderUserAvatar({ src, alt, size, unoptimized = false }: Props) {
  return (
    <Image
      src={src || NoLogoAvailable}
      alt={alt}
      width={size}
      height={size}
      unoptimized={unoptimized}
      style={{ height: size, maxWidth: size }}
    />
  )
}
