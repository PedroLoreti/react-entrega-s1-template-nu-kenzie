import styles from "./style.module.scss"

export const Total = ({ transactions }) => {


    const calculateTotalPrice = () => {
        return transactions.reduce((totalValue, transaction) => {
            return transaction.type === "Entrada" ? totalValue + Number(transaction.price) : totalValue - Number(transaction.price)
        }, 0)
    }

    const totalPrice = calculateTotalPrice();

    return (
        <section className={styles.containerTotalValue}>
            <div className={styles.totalValue}>
                <h3 className="title3">Valor total: </h3>
                <span className="title3 pink">{totalPrice.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
            </div>
            <p className="body">O valor se refere ao saldo</p>
        </section>
    )
}