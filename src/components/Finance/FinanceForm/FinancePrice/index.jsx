
export const FinancePrice = ({ setPrice, price }) => {
    const handleChange = (e) => {
        setPrice(e.target.value)
    }

    return (
        <>
            <label htmlFor="number" className="caption left">Valor R$</label>
            <input
                type="number"
                placeholder="1"
                name="number"
                id="number"
                value={price}
                onChange={handleChange}
                required
                className="headline inputArea"
            />
        </>
    )
}