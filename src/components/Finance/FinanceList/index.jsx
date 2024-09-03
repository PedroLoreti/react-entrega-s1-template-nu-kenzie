import { FinanceCard } from "./FinanceCard"
import styles from "./style.module.scss"

export const FinanceList = ({ transactions, setTransactions }) => {

    const deleteTransaction = (indexToRemove) => {
        const updatedTransactions = transactions.filter((_, index) => index !== indexToRemove)
        setTransactions(updatedTransactions)
    }

    return (
        <div className={styles.containerEntries}>
            <h3 className={`${styles.titleMargin} title3`}>Resumo financeiro</h3>
            {transactions.length > 0 ? (
                <ul className={styles.containerUl}>
                    {transactions.map((arr, index) => (
                        <FinanceCard
                            key={index}
                            description={arr.description}
                            price={arr.price}
                            type={arr.type} 
                            onDelete={() => deleteTransaction(index)}
                            />
                    ))}
                </ul>
            ) : (
                <h2 className="title2">Você ainda não possui nenhum lançamento</h2>
            )}

        </div>
    )
}