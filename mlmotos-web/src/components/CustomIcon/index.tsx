import * as Icons from '@components/Icons';
import { Children, ReactElement, cloneElement } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  name: string;
  strokeClassName?: string;
  fillClassName?: string;
}

export const CustomIcon = ({ name, strokeClassName = '', fillClassName = '', ...restProps }: Props): ReactElement => {
  const Icon = Icons[name]

  return (
    <svg {...Icon().props} {...restProps}>
      {Children.map(Icon().props.children, (child) => {
        const childProps = child.props.stroke ? { className: strokeClassName } : { className: fillClassName }

        return cloneElement(child, { ...child.props, ...childProps })
      })}
    </svg>
  )
}
