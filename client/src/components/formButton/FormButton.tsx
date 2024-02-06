import { Button, Form } from "antd";
import { IFormButton } from "../../types/formButtonTypes";

function FormButton({ buttonName }: IFormButton) {
    return (
        <Form.Item
            // style={{ paddingBottom: "20px" }}
            wrapperCol={{ offset: 8, span: 16 }}
        >
            <Button type="primary" htmlType="submit">
                {buttonName}
            </Button>
        </Form.Item>
    );
}

export default FormButton;
