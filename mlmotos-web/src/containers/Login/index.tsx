import BackgroundImage from '@assets/images/motosBg.jpg';
import CustomButton from "@components/CustomButton";
import axiosInstance from "@services/axiosInstance";
import { validationMessages } from "@utils/formValidationMessages";
import { Col, Form, Image, Input, Row } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from '../../assets/images/logo.png';

type FieldType = {
  Email: string;
  Senha: string;
};

export default function LoginContainer() {
  const [loading, setLoading] = useState(false)

  const router = useRouter();
  const [form] = Form.useForm();

  const handleLogin = async () => {
    try {
      setLoading(true);

      const values = await form.validateFields();
      const { Email, Senha } = values;

      const response = await axiosInstance.post('/login', {
        email: Email,
        password: Senha
      });

      if (response.status === 200) {
        document.cookie = `access_token=${response.data.token}`;
        router.replace('/dashboard');
      }
    } catch (error) {
      console.error('Erro no login:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tw-flex tw-h-screen tw-bg-black">
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
              <Image width={100} src={Logo.src} preview={false} />

              <h3 className="tw-text-white tw-font-semibold tw-mt-[52px] tw-mb-24">
                ML Motos Dashboard
              </h3>
              <Form
                className="form-login"
                name="login-form"
                initialValues={{ remember: true }}
                // autoComplete="off"
                form={form}
                validateMessages={validationMessages}
              >
                <Form.Item<FieldType>
                  name="Email"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input
                    className="tw-bg-half-black tw-w-full tw-h-56 tw-rounded"
                    placeholder="E-mail"
                    variant="borderless"
                    disabled={loading}
                  />
                </Form.Item>

                <Form.Item<FieldType> name="Senha" rules={[{ required: true }]}>
                  <Input.Password
                    className="tw-bg-half-black tw-w-full tw-h-56 tw-rounded"
                    placeholder="Senha"
                    variant="borderless"
                    disabled={loading}
                  />
                </Form.Item>

                <div className="tw-text-right tw-mb-[41px]">
                  <a className="tw-font-semibold tw-text-white">
                    Esqueci minha senha
                  </a>
                </div>

                <Form.Item wrapperCol={{ span: 24 }}>
                  <CustomButton
                    text="Entrar"
                    onClick={handleLogin}
                    customClass="tw-font-bold tw-h-56 tw-rounded"
                    disabled={loading}
                    loading={loading}
                  />
                </Form.Item>
              </Form>
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
