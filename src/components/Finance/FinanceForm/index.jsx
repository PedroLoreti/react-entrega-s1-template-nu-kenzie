import { Total } from "../Total"
import { FinanceDescription } from "./FinanceDescription"
import { FinancePrice } from "./FinancePrice"
import { FinanceSelect } from "./FinanceSelect"
import styles from "./style.module.scss"

export const FinanceForm = ({ setDescription, setPrice, setType, submit, description, price, type, transactions }) => {

    return (
        <div>
            <div className={styles.container}>
                <form onSubmit={submit} className={styles.containerForm}>
                    <FinanceDescription setDescription={setDescription} description={description} />
                    <FinancePrice setPrice={setPrice} price={price} />
                    <FinanceSelect setType={setType} type={type} />
                    <button type="submit" className="insert">Inserir valor</button>
                </form>
            </div>

            <div className={styles.containerTotal}>
                <Total transactions={transactions} />
            </div>
        </div>
    )
}