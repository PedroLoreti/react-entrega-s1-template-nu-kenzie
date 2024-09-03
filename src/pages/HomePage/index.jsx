import { Header } from "../../components/Header"
import styles from "./style.module.scss"

export const HomePage = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
        </>
    )
}