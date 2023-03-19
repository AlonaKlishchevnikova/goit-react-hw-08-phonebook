import  useForm  from "components/shared/useForm/useForm";
import TextField from "components/TextField/TextField";
import Button  from "components/shared/Button/Button";
import initialState from "./initialState"
import fields from "./fields";
import styles from "./register-form.module.css";

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { name, email, password } = state;
    
    
    return (
        <form className={styles.form } onSubmit={handleSubmit}>
            <TextField value={name} handleChange={handleChange}{...fields.name} />
            <TextField value={email} handleChange={handleChange}{...fields.email} />
            <TextField value={password} handleChange={handleChange}{...fields.password} />
            <Button>Register</Button>
        </form>
    )
    
}
export default RegisterForm;