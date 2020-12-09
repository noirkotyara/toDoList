import preloader from './../../assets/preloader.svg';
import style from './Preloader.module.scss';
const Preloader = () => {
    return <div>
        <img className={style.preloader} src={preloader} alt="preloader"/>
    </div>
}

export default Preloader;