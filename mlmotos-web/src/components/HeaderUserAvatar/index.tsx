import { CustomIcon } from '@components/CustomIcon'
import { useDarkMode } from '@hooks/context/darkModeContext'
import Image from 'next/image'

interface Props {
  src?: string
  alt?: string
  isOpen?: boolean
  size?: number
  unoptimized?: boolean
}

export function HeaderUserAvatar({ src, alt, isOpen, size, unoptimized = false }: Props) {
  const { darkMode } = useDarkMode()

  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        unoptimized={unoptimized}
        style={{ height: size, maxWidth: size }}
      />
    )
  }

  const iconStrokeClassName = darkMode ? 'tw-stroke-dark-secondary' : (isOpen ? 'tw-stroke-light-primary' : 'tw-stroke-light-secondary')
  const iconFillClassName = darkMode ? 'tw-fill-dark-shark' : 'tw-fill-light-shark'

  return <CustomIcon name='NoPhotoAvailableLight' strokeClassName={iconStrokeClassName} fillClassName={iconFillClassName} />
}
