import { useState } from "react";
import { Link } from "react-router-dom";
import FormTitle from "../formTitle/FormTitle";
import FormButton from "../formButton/FormButton";
import { Form, Input, DatePicker, Select } from "antd";
import CongrForRegistr from "../congrForRegistr/CongrForRegistr";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useHttp } from "../../hooks/https.hook";
import { IRegistrationData } from "../../types/userTypes";
import { TIsSuccessRegistr } from "../../types/congrForRegistrTypes";

dayjs.extend(customParseFormat);

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
const disabledDate = (current) => {
    const today = new Date();
    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);

    return (
        current &&
        (current.valueOf() > today || current.valueOf() > threeYearsAgo)
    );
};

function RegistrationForm() {
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");

    const [isSuccessRegistr, setIsSuccessRegistr] =
        useState<TIsSuccessRegistr>("unSuccess");

    const registrationData: IRegistrationData = {
        name,
        surname,
        username,
        email,
        password,
        city,
        birthday,
        role: ["USER"],
    };

    const { request, error } = useHttp();

    const registrationUser = () => {
        request({
            url: `http://localhost:3000/registration`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationData),
        })
            .then(() => {
                setName("");
                setSurname("");
                setUsername("");
                setEmail("");
                setPassword("");
                setCity("");
                setBirthday("");

                setIsSuccessRegistr("success");

                setTimeout(() => {
                    setIsSuccessRegistr("unSuccess");
                }, 10000);
            })
            .catch((err) => {
                if (
                    error &&
                    error.includes("Пользователь с таким именем уже существует")
                ) {
                    console.error(error);
                    setIsSuccessRegistr("error");
                } else {
                    console.error(
                        "Произошла ошибка при выполнении запроса:",
                        err
                    );
                }
            });
    };
    return (
        <div
            style={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "40px",
            }}
            id="regForm"
        >
            {isSuccessRegistr !== "success" ? (
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
                    onFinish={registrationUser}
                >
                    <FormTitle title=" Регистрация" />
                    {/* Имя */}
                    <Form.Item
                        style={{ marginRight: "20px" }}
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                        ]}
                    >
                        <Input
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Item>
                    {/* Фамилия */}
                    <Form.Item
                        style={{ marginRight: "20px" }}
                        label="Surname"
                        name="surname"
                        rules={[
                            {
                                required: true,
                                message: "Please input your surname!",
                            },
                        ]}
                    >
                        <Input
                            defaultValue={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </Form.Item>
                    {/*  Имя пользователя */}
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
                        <Input
                            defaultValue={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        {isSuccessRegistr === "error" && (
                            <span style={{ color: "red", fontSize: "15px" }}>
                                Пользователь с таким именем уже существует
                            </span>
                        )}
                    </Form.Item>
                    {/* Email */}
                    <Form.Item
                        style={{ marginRight: "20px" }}
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                        ]}
                    >
                        <Input
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Item>
                    {/* Пароль */}
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
                        <Input.Password
                            defaultValue={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    {/* Город */}
                    <Form.Item
                        style={{ marginRight: "20px" }}
                        name="city"
                        label="City"
                        // hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please select your city!",
                            },
                        ]}
                    >
                        <Select
                            placeholder="Please select a city"
                            onChange={(value) => setCity(value)}
                        >
                            <Select.Option value="Moscow">Moscow</Select.Option>
                            <Select.Option value="Kazan">Kazan</Select.Option>
                            <Select.Option value="Ekaterinburg">
                                Ekaterinburg
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    {/* Дата рождения */}
                    <Form.Item
                        style={{ marginRight: "20px" }}
                        label="Birthday"
                        name="birthday"
                        rules={[
                            {
                                required: true,
                                message: "Please input your birthday!",
                            },
                        ]}
                    >
                        <DatePicker
                            onChange={(date, dateString) =>
                                setBirthday(dateString)
                            }
                            format={dateFormatList}
                            disabledDate={disabledDate}
                        />
                    </Form.Item>
                    <Form.Item style={{ margin: " -10px 0 20px 200px" }}>
                        <div>
                            Есть аккаунт? <Link to="/login">Вход</Link>
                        </div>
                    </Form.Item>
                    <FormButton buttonName="Зарегистрироваться" />
                </Form>
            ) : (
                isSuccessRegistr === "success" && (
                    <CongrForRegistr
                        setIsSuccessRegistr={setIsSuccessRegistr}
                    />
                )
            )}
        </div>
    );
}

export default RegistrationForm;
