import { Outlet, useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons'
import LogoutSubmit from '../../components/button-logout';
import { Badge, Button, Space } from 'antd';
import { useStore } from '../../context/user';
import { useState } from 'react';

export const UserPage = () => {
    const navigate = useNavigate();
    const { cart } = useStore();
    const [userID] = useState('USER@123');
    const handleEditProfile = () => {
        navigate(`/user/profile/${userID}`);
    }
    const handleCreateForm = () => {
        navigate(`/user/create-form`);
    }
    const viewCart = () => {
        navigate(`/user/cart`);
    }
    const viewHisToryOrder = () => {
        navigate(`/user/history-order`);
    }
    return (
        <div>
            <h1>Welcome, User</h1>
            <Space>
                <Button type="primary" onClick={handleCreateForm}>Create Form</Button>
                <Button type='primary' onClick={handleEditProfile}>Edit Profile</Button>
                <Button type='primary' onClick={viewHisToryOrder}>View History Order</Button>
                <Badge size='default' count={cart.items.length}>
                    <Button
                        type='primary'
                        icon={<ShoppingCartOutlined />}
                        onClick={viewCart}
                    >Cart
                    </Button>
                </Badge>

                <LogoutSubmit />
            </Space>
            <Outlet />
        </div>
    )
}
