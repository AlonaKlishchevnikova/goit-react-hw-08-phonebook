import { useSelector, useDispatch } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import { getUser } from "redux/auth/auth-selectors";
import styles from './navbar-user.module.css'
const NavbarUser = () => {
    const { name } = useSelector(getUser);
    const dispatch = useDispatch();
    const onLogOut = () => {
        dispatch(logOut());
    }
    return (
        <div className={styles.menu}>

<p className={styles.name}> Welcome, {name} </p><button className={styles.btn} onClick={onLogOut}>Logout</button>
        </div>
    )
}
export default NavbarUser;