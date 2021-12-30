import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Space, Button, Popconfirm, message } from 'antd';
import { ReactChild, ReactFragment, ReactPortal, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDeleteProduct } from '../../hooks/product/mutations/useDeleteProduct';
import { useQueryProduct } from '../../hooks/staff/query/useQueryProduct';
import { UpdateProduct } from './update-product';

type valueColumnTable =
    boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;

// interface ListProductsOfSellerProps {}

export const ListProductsOfSeller: React.FC = () => {

    const { removeProductById } = useDeleteProduct();
    const { data, isLoading } = useQueryProduct();
    const isState = {
        visible: false,
    };
    const [state, setState] = useState(isState);
    const { visible } = state;

    const showModal = () => {
        setState({
            visible: true,
        });
    };

    const handleOk = () => {
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
            width: 150,
            title: 'Action',
            key: 'action',
            render: (product: any) => (
                <Space size="middle">
                    <Button onClick={showModal} icon={<EditOutlined />} type='primary' shape="round"> Edit</Button>
                    <UpdateProduct product={product} visible={visible} handleOk={handleOk} handleCancel={handleCancel} />
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
        </>
    )
}
