
export const FinanceSelect = ({ setType, type }) => {

    const handleChange = (e) => {
        setType(e.target.value)
    }

    return (
        <>
            <p className="caption left">Tipo de valor</p>

            <select value={type} onChange={handleChange} className="inputArea">
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>
        </>
    )
}