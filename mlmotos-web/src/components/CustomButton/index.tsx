import { CustomLoading } from '@components/CustomLoading';
import { Button, ButtonProps } from 'antd';
import { ReactNode } from 'react';


interface Props extends ButtonProps {
  onClick?: () => void;
  text: ReactNode;
  customClass?: string;
}

const CustomButton = ({ text, onClick, customClass, disabled, loading, ...rest }: Props) => {

  const buttonClassName = !disabled ? 'tw-bg-dark-primary tw-w-full tw-rounded tw-border-none' : 'tw-bg-dark-shark tw-w-full tw-rounded';

  return (
    <Button
      {...rest}
      onClick={onClick}
      className={buttonClassName + customClass}
      type="text"
      disabled={disabled}
      loading={loading}
    >
      {loading ? (
        <CustomLoading />
      ) : (
        <p className='tw-font-semibold tw-text-dark-secondary'>{text}</p>
      )}
    </Button>
  );
};

export default CustomButton;
