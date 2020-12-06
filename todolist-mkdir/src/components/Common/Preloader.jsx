import preloader from './../../assets/preloader.svg';
import style from './Preloader.module.css';
const Preloader = () => {
    return <div>
        <img className={style.preloader} src={preloader} alt="preloader"/>
    </div>
}

export default Preloader;