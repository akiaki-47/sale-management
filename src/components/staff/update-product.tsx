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
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Submit
                    </Button>,
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                ]}
            >
                <Text>Name</Text>: <Input placeholder={product.name} />
                <Text>Description</Text>: <Input placeholder={product.description} />
            </Modal>
        </>
    )
}
