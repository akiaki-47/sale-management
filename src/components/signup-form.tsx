import { Button, Form, Input, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../hooks/user/mutations/useSignUp";
import { Role } from "../interfaces";
import 'antd/dist/antd.css';

const layout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 4,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
    string: {
        min: '${label} must be at least ${min} characters!'
    }
};

export interface SignUpForm {
    name: string,
    email: string,
    password: string,
    age: number,
}

export const SignUpForm = () => {
    const { signup } = useSignUp();
    const onFinish = (values: SignUpForm) => {
        const signUpForm = {
            name: values.name,
            email: values.email,
            password: values.password,
            role: Role.USER,
            age: values.age,
        }
        signup(signUpForm);
    };

    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/", { replace: true });
    };
    return (
        <div>
            <h1>Sign Up</h1>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name='name'
                    label="Name"
                    rules={[
                        {
                            required: true,
                            min: 6,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='email'
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true
                        },
                        { min: 6 }
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name='age'
                    label="Age"
                    rules={[
                        {
                            type: 'number',
                            min: 18,
                            max: 99,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
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
                    <Button type='link' onClick={handleBack} >Back to Home Page</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
