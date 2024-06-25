import Alert from "@components/CustomAlert";
import CustomButton from "@components/CustomButton";
import axiosInstance from "@services/axiosInstance";
import { validationMessages } from "@utils/formValidationMessages";
import { removeAllCookies } from "@utils/removeAllCookies";
import { Col, Form, Image, Input, Row } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import BackgroundImage from "../../assets/images/motosBg.jpg";

type FieldType = {
  Email: string;
  Senha: string;
};

type AlertType = 'error' | 'success' | 'warning' | 'info';

export default function LoginContainer() {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<AlertType>('info');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const router = useRouter();
  const [form] = Form.useForm();

  useEffect(() => {
    removeAllCookies();
  }, []);

  const handleShowAlert = (message: string, type: AlertType) => {
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertMessage('');
    setAlertType('info');
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      const response = await axiosInstance.post('/login', {
        email: values.Email,
        password: values.Senha,
      });

      if (response.status === 200) {
        document.cookie = `access_token=${response.data.token}`;
        router.replace('/home');
      } else {
        handleShowAlert('Erro ao realizar login', 'error');
      }
    } catch (error) {
      handleShowAlert('Erro ao realizar login', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleFieldsChange = () => {
    const { Email, Senha } = form.getFieldsValue(['Email', 'Senha']);
    setIsButtonDisabled(!(Email && Senha));
  };

  return (
    <div className="tw-flex tw-h-screen tw-bg-dark-nero">
      {showAlert && (
        <Alert message={alertMessage} type={alertType} duration={3000} onClose={handleCloseAlert} />
      )}
      <div className="tw-flex-1 tw-self-center">
        <Row>
          <Col
            xl={{ span: 16, offset: 4 }}
            lg={{ span: 18, offset: 3 }}
            md={{ span: 18, offset: 3 }}
            sm={{ span: 16, offset: 4 }}
            xs={{ span: 20, offset: 2 }}
          >
            <div className="tw-flex tw-flex-col">
              <Image width={150} src={Logo.src} preview={false} />

              <h3 className="tw-font-semibold tw-mt-[82px] tw-mb-24 tw-text-dark-secondary">
                ML Motos
              </h3>
              <Form
                className="form-login"
                name="login-form"
                initialValues={{ remember: true }}
                form={form}
                validateMessages={validationMessages}
                onFieldsChange={handleFieldsChange}
              >
                <Form.Item<FieldType>
                  name="Email"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input
                    className="tw-bg-dark-shark tw-w-full tw-h-56 tw-rounded"
                    placeholder="E-mail"
                    variant="borderless"
                    disabled={loading}
                  />
                </Form.Item>

                <Form.Item<FieldType>
                  name="Senha"
                  rules={[{ required: true }]}
                >
                  <Input.Password
                    className="tw-bg-dark-shark tw-w-full tw-h-56 tw-rounded tw-text-dark-secondary"
                    placeholder="Senha"
                    variant="borderless"
                    disabled={loading}
                  />
                </Form.Item>

                <div className="tw-text-right tw-mb-[41px]">
                  <a className="tw-font-semibold tw-text-light-primary tw-text-dark-oslo-gray hover:tw-text-dark-primary">
                    Esqueci minha senha
                  </a>
                </div>

                <Form.Item wrapperCol={{ span: 24 }}>
                  <CustomButton
                    htmlType="submit"
                    text="Entrar"
                    onClick={handleLogin}
                    customClass="tw-font-bold tw-h-56 tw-rounded"
                    disabled={isButtonDisabled || loading}
                    loading={loading}
                  />
                </Form.Item>
              </Form>
              <div className="tw-text-center tw-mt-96">
                <p className="tw-text-dark-secondary">
                  Não tem uma conta?{" "}
                  <a className="tw-font-semibold tw-text-light-primary tw-text-dark-primary hover:tw-opacity-90" href="">
                    Crie uma agora
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className="tw-hidden lg:tw-block tw-flex-1 tw-bg-no-repeat tw-bg-cover tw-bg-center"
        style={{ background: `url("${BackgroundImage.src}")` }}
      />
    </div>
  );
}
