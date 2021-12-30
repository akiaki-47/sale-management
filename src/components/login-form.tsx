import { Button, Checkbox, Form, Input } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import useLogin from '../hooks/user/mutations/useLogin';
import { Role } from '../interfaces';
import 'antd/dist/antd.css';
interface LoginForm {
    email: string;
    password: string;
}
export const LoginForm = () => {
    const { login, role } = useLogin();
    const navigate = useNavigate();
    const onFinish = async (dataForm: LoginForm) => {
        const values = {
            email: dataForm.email,
            password: dataForm.password
        }
        login(values)
    }
    const onFinishFailed = (errorInfo: unknown) => {
        if (errorInfo) {
            alert("Email or password is wrong!!");
        }
    };
    const handleBack = () => {
        navigate("/", { replace: true });
    };

    return (
        <div>
            {role == Role.USER && <Navigate to="/user" replace={true}></Navigate>}
            {role == Role.STAFF && <Navigate to="/staff" replace={true}></Navigate>}
            {role == Role.ADMIN && <Navigate to="/admin" replace={true}></Navigate>}
            <Form
                name="basic"
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 5,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            min: 6,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 8,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 8,
                    }}
                >
                    <Button type='link' onClick={handleBack}>Back to Home Page</Button>
                </Form.Item>
            </Form>
        </div >
    )
}
export default LoginForm;