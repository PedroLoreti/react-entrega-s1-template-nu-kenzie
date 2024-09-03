import styles from "./style.module.scss"

export const FinanceDescription = ({ setDescription, description }) => {

    const handleChange = (e) => {
        setDescription(e.target.value)
    }

    return (
        <>
            <label htmlFor="name" className="caption left">Descrição</label>
            <input
                type="text"
                placeholder="Digite aqui sua descrição"
                name="name"
                id="name"
                value={description}
                onChange={handleChange}
                required
                className="headline inputArea"
            />
            <p className={`${styles.example} left`}>Ex: Compra de roupas</p>
        </>
    )
}