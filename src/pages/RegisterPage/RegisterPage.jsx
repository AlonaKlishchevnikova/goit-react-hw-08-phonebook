import { useDispatch } from "react-redux";
import { signup } from "redux/auth/auth-operations";
import RegisterForm from "modules/RegisterForm/RegisterForm";
import styles from './register-page.module.css'

const RegisterPage = () => {
  
     const dispatch = useDispatch();
    const handleSignup = (data) => {
       dispatch(signup(data));
    }
    return (
        <div className={styles.wrapper}>
            <h3>Please, register</h3>
            <RegisterForm onSubmit={handleSignup}/>
        </div>
    )
    
}
export default RegisterPage;