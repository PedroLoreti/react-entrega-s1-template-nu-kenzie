import { useState } from "react"
import { FinanceForm } from "./FinanceForm"
import { FinanceList } from "./FinanceList"
import styles from "./style.module.scss"

export const Finance = () => {
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState()
    const [type, setType] = useState("Entrada")
    const [transactions, setTransactions] = useState([])

    const submit = (e) => {
        e.preventDefault()

        const newTransaction = {
            description,
            price,
            type
        }

        setTransactions([...transactions, newTransaction])

        setDescription("")
        setPrice("")
        setType("Entrada")

    }


    return (
        <section className={styles.sectionContainer}>
            <div className={"container"}>
                <div className={styles.flexBox}>
                    <FinanceForm setDescription={setDescription} setPrice={setPrice} setType={setType} submit={submit} description={description} price={price} type={type} transactions={transactions} />
                    <FinanceList transactions={transactions} setTransactions={setTransactions} />
                </div>
            </div>
        </section>
    )
}