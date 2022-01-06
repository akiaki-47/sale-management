import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Space, Button, Popconfirm, message } from 'antd';
import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import { useDeleteProduct } from '../../hooks/product/mutations/useDeleteProduct';
import { useUpdateProduct } from '../../hooks/product/mutations/useUpdateProduct';
import { useQueryProduct } from '../../hooks/staff/query/useQueryProduct';
import { IProduct } from '../../interfaces';
import { UpdateProduct } from './update-product';

type valueColumnTable =
    boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
export interface ProductFormUpdate {
    key: string,
    name: string,
    description: string
}

// interface ListProductsOfSellerProps {}
export const ListProductsOfSeller: React.FC = () => {
    const WIDTH = 150;
    const { removeProductById } = useDeleteProduct();
    const { updateProductById } = useUpdateProduct();
    const { data, isLoading } = useQueryProduct();
    const isState = {
        visible: false,
    };
    const [state, setState] = useState(isState);
    const [productInfo, setProductInfo] = useState<IProduct>();
    const { visible } = state;

    const showModal = (product: IProduct) => {
        setProductInfo(product);
        console.log("123: ", product);

        setState({
            visible: true,
        });
    };

    const handleOk = (productObj: ProductFormUpdate) => {
        updateProductById(productObj);
        setState({ visible: false });
    };

    const handleCancel = () => {
        setState({ visible: false });
    };
    const onDelete = (id: string) => {
        removeProductById(id);
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (value: valueColumnTable) => <a>{value}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            width: WIDTH,
            title: 'Action',
            key: 'action',
            render: (product: any) => (
                <Space size="middle">
                    <Button onClick={() => showModal(product)} icon={<EditOutlined />} type='primary' shape="round"> Edit</Button>

                    <span>|</span>

                    <Popconfirm title="Are you sure？" okText="Yes" cancelText="No"
                        onConfirm={() => onDelete(product.key)}
                        onCancel={() => message.error("failed!")}>
                        <Button icon={<DeleteOutlined />} type='primary' danger shape="round"></Button>
                    </Popconfirm>
                </Space >
            ),
        },
    ];
    const dataTable = data?.data.items.map((value) => {
        return {
            key: value.id,
            name: value.name,
            description: value.description
        }
    })

    return (
        <>
            <h2>List Products</h2>
            <Table
                loading={isLoading}
                bordered={true}
                columns={columns}
                dataSource={dataTable}
                pagination={{ position: ['bottomCenter'] }}
            />
            <UpdateProduct product={productInfo} visible={visible}
                handleOk={() => handleOk}
                handleCancel={handleCancel}
            />
        </>
    )
}
