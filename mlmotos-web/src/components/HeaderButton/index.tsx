import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon'
import { Button } from 'antd'
import { BaseButtonProps } from 'antd/lib/button/button'
import styles from './styles.module.css'

interface Props extends BaseButtonProps {
  text: string
  leftIcon?: AntdIconProps
  rightIcon?: AntdIconProps
  htmlType?: 'submit' | 'button' | 'reset'
  onclick?: () => void
}

export function HeaderButton({ text, leftIcon, rightIcon, className, htmlType = 'submit', size = 'large', onclick, ...rest }: Props) {
  return (
    <Button {...rest} className={`${styles.buttonCustom} ${className}`} htmlType={htmlType} size={size} onClick={onclick}>
      {leftIcon} {text} {rightIcon}
    </Button>
  )
}
