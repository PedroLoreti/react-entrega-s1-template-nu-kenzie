import styles from "./style.module.scss"

export const FinanceCard = ({ description, price, type, onDelete }) => {

    const formattedPrice = Number(price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    return (
        <>
            <li className={`${type === "Entrada" ? styles["border-green"] : styles["border-gray"]} ${styles.entry}`} >
                <div>
                    <h3 className="title3">{description}</h3>
                    <span className="body">{type}</span>
                </div>
                <div className={styles.containerPrice}>
                    <p className="body">{formattedPrice}</p>
                    <button onClick={onDelete} className="excluir">Excluir</button>
                </div>
            </li>
        </>
    )
}

