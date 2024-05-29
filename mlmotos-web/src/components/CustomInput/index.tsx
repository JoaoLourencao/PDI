import { Input } from 'antd';

interface Props {
  placeholder: string;
  isPassword?: boolean;
}

const CustomInput = ({ placeholder, isPassword = false }: Props) => {
  return (
    <>
      {
        isPassword ? (
          <Input.Password placeholder={placeholder}/>
        ) : (
          <Input placeholder={placeholder}/>
        )
      }
    </>
  );
};

export default CustomInput;
