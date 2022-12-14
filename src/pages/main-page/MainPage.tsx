import { Title } from "../../components/title/Title"
import svgIcons from '../../img/icons.svg'
import styles from './MainPage.module.scss'

export const MainPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}><Title /></div>
            <div className={styles.wrapper}>
                <svg width={40} height={25} className={styles.rotate}>
                    <use xlinkHref={`${svgIcons}#arrow`} />
                </svg>
                <p className={styles.text}>Войти</p>
            </div>
        </div>
    )
}