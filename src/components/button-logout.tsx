import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const LogoutSubmit = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/", { replace: true });
    }
    return (
        <Button type='ghost' onClick={handleLogout}>Logout</Button>
    )
}

export default LogoutSubmit;
