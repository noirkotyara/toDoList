import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
    return(<>
        <div className={style.header}>
            <NavLink to='/todolist' className={style.logoName} activeClassName={style.activeNavLink}>
                MKdir
            </NavLink >  
            <NavLink to='/login' className={style.login} activeClassName={style.activeNavLink}>
                Login
            </NavLink >  
        </div>
    </>);
} 
export default Header;