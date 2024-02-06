import { Link } from "react-router-dom";
import FormTitle from "../formTitle/FormTitle";
import FormButton from "../formButton/FormButton";
import { Checkbox, Form, Input } from "antd";
function LoginForm() {
    return (
        <div
            style={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{
                    maxWidth: 600,
                    flex: "1",
                    backgroundColor: "#f5f5f5",
                    boxShadow:
                        "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
                }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <FormTitle title="Вход" />
                <Form.Item
                    style={{ marginRight: "20px" }}
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    style={{ marginRight: "20px" }}
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    style={{ margin: "-15px 0 10px 0" }}
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item style={{ margin: " -10px 0 10px 200px" }}>
                    <div>
                        Нет аккаунта?{" "}
                        <Link to="/registration">Регистрация</Link>
                    </div>
                </Form.Item>
                <FormButton buttonName="Войти" />
            </Form>
        </div>
    );
}

export default LoginForm;
