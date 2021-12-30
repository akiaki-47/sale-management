import { Button } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom'
import LogoutSubmit from '../../components/button-logout'

const AdminPage = () => {
    const navigate = useNavigate();
    const onNavigate = () => {
        navigate("/admin/get-form-register");
    }
    return (
        <div>
            <h1>Welcome, Admin</h1>
            <Button onClick={onNavigate}>Form Register</Button>
            <LogoutSubmit />
            <Outlet />
        </div>
    )
}

export default AdminPage
