import { Form, Select } from "antd";

interface ILanguageOption {
    value: string;
    title: string;
}

interface IOptions {
    options: ILanguageOption[];
}

function LangSelect({ options }: IOptions) {
    return (
        <Form className="chooseLang" name="language">
            <Select defaultValue="ru" style={{ width: "100px" }}>
                {options.map((item: ILanguageOption) => (
                    <Select.Option key={item.value} value={item.value}>
                        {item.title}
                    </Select.Option>
                ))}
            </Select>
        </Form>
    );
}

export default LangSelect;
