import { Modal, Button, Input, Form } from 'antd';
import { IProduct } from '../../interfaces';

interface UpdateProductProps {
    product: IProduct | undefined;
    visible: boolean;
    handleOk: () => void;
    handleCancel: () => void;
}

export const UpdateProductModal = ({ visible, handleCancel, handleOk, product }: UpdateProductProps) => {
    console.log(product?.name);

    return (
        <>
            <Modal
                visible={visible}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Submit
                    </Button>,
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                ]}
            >
                <Form
                    name="wrap"
                    labelCol={{ flex: '110px' }}
                    labelAlign="left"
                    wrapperCol={{ flex: 1 }}
                    colon={false}
                >
                    <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                        <Input defaultValue={product?.name} />
                    </Form.Item>

                    <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                        <Input defaultValue={product?.description} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
