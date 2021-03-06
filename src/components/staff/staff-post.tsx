import { Form, Input, InputNumber, Button } from 'antd';
import { usePostProduct } from '../../hooks/product/mutations/usePostProduct';

// interface SellerPostProps{}

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 17 },
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
};

export interface ProductForm {
    name: string;
    description: string
}

export const PostProduct: React.FC = () => {
    const { addProduct } = usePostProduct();

    const onFinish = (values: ProductForm) => {
        addProduct(values);
    };

    return (
        <div>
            <h2>Sale Post</h2>
            <div className="card-seller-post">
                <Form {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                    className="seller-post-form"
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="quantity"
                        label="Quantity"
                        rules={[{ type: 'number', min: 0, max: 99 }]}
                    >
                        <InputNumber style={{ float: 'left' }} />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                        <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

