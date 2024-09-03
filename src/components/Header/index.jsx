import Logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <header>
            <div className={styles.logo}>
                <img className={styles.imgLogo} src={Logo} alt="Logo Nu-Kenzie" />
            </div>
        </header>
    )
}