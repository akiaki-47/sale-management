import { Modal, Button, Input } from 'antd';
import Text from 'antd/lib/typography/Text';
import { IProduct } from '../../interfaces';

interface UpdateProductProps {
    product: IProduct;
    visible: boolean;
    handleOk: () => void;
    handleCancel: () => void;
}

export const UpdateProduct = ({ visible, handleCancel, handleOk, product }: UpdateProductProps) => {
    return (
        <>
            <Modal
                visible={visible}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Submit
                    </Button>,
                ]}
            >
                <Text>Name</Text>: <Input addonBefore="Name:" />
                <Text>Description</Text>: <Input defaultValue={product.description} />
            </Modal>
        </>
    )
}
