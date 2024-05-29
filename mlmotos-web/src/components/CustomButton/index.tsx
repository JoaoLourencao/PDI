import { CustomLoading } from '@components/CustomLoading';
import { Button } from 'antd';
import { BaseButtonProps } from 'antd/lib/button/button';
import { ReactNode } from 'react';

interface Props extends BaseButtonProps {
  onClick?: () => void;
  text: ReactNode;
  customClass?: string;
}

const CustomButton = ({ text, onClick, customClass, disabled, loading, ...rest }: Props) => {
  const buttonClassName = !disabled ? 'tw-bg-primary tw-w-full tw-rounded-full' : 'tw-bg-white tw-w-full tw-rounded-full';

  return (
    <Button
      {...rest}
      onClick={onClick}
      className={`${buttonClassName} ${customClass}`}
      type="primary"
      shape="default"
      loading={loading}
    >
      {loading ? (
        <CustomLoading />
      ) : (
        <p className='tw-font-semibold tw-text-secondary'>{text}</p>
      )}
    </Button>
  );
};

export default CustomButton;
