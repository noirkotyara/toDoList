import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import Preloader from './../Common/Preloader';

const Header = (props) => {
    return(<>
        <div className={style.header}>
        <div className={style.preloader}>  {props.isFetching && <Preloader/> }</div>
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