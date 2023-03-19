import  useForm  from "components/shared/useForm/useForm";
import TextField from "components/TextField/TextField";
import Button  from "components/shared/Button/Button";
import initialState from "./initialState"
import fields from "./fields";
import styles from "./login-form.module.css";

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { email, password } = state;
    
    
    return (
        <form className={styles.form } onSubmit={handleSubmit}>
            <TextField value={email} handleChange={handleChange}{...fields.email} />
            <TextField value={password} handleChange={handleChange}{...fields.password} />
            <Button>Login</Button>
        </form>
    )
    
}
export default LoginForm;