import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";
import LoginForm from "modules/LoginForm/LoginForm";
import styles from './login-page.module.css'
const LoginPage = () => {
    
     const dispatch = useDispatch();
    const handleLogin = (data) => {
       dispatch(login(data));
    }
 
    return (
        <div className={styles.wrapper}>
            <h3>Please, login</h3>
            <LoginForm onSubmit={handleLogin}/>
        </div>
    )
    
}
export default LoginPage;