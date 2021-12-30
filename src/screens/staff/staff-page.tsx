import { Button } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom'
import LogoutSubmit from '../../components/button-logout';

export const StaffPage = () => {
    const navigate = useNavigate();
    const handleUpdateProduct = () => {
        navigate("/staff/view-products");
    }
    const handleUploadProduct = () => {
        navigate("/staff/upload-products");
    }
    return (
        <div>
            <h1>Welcome, Sale</h1>
            <Button type='primary' onClick={handleUpdateProduct}>View Products</Button>
            <Button type='primary' onClick={handleUploadProduct}>Upload</Button>
            <LogoutSubmit />
            <Outlet />
        </div>
    )
}
