import {useSelector} from "react-redux";

function InputPercent({ label, placeholder, type, id, onChange }){

    const bonusAmount = useSelector((state) => {
        let nameId
        switch (id) {
            case "volCoffee":
                nameId = "volumeCoffeeBonus"
                break
            case "volConfectionary":
                nameId = "volumeConfBonus"
                break
            case "volFoodDairy":
                nameId = "volumeFDBonus"
                break
            case "volCPW":
                nameId = "volumeCPWBonus"
                break
            case "volPurina":
                nameId = "volumePurinaBonus"
                break
            case "totalVolume":
                nameId = "volumeTotalBonus"
                break
            case "topCoffee":
                nameId = "topCoffeeBonus"
                break
            case "topConfectionary":
                nameId = "topConfBonus"
                break
            case "topCacao":
                nameId = "topCacaoBonus"
                break
            case "topMaggi":
                nameId = "topMaggiBonus"
                break
            case "topCPW":
                nameId = "topCPWBonus"
                break
            case "topPurina":
                nameId = "topPurinaBonus"
                break

            case "strengthCoffee":
                nameId = "strengthCoffeeBonus"
                break
            case "strengthMaggi":
                nameId = "strengthMaggiPurinaBonus"
                break
            case "coverage":
                nameId = "coverageBonus"
                break
            default:
                nameId = undefined
        }
        const {inputSalaryReducer} = state
        return inputSalaryReducer[nameId]
    })

    return(
        <div className="mb-3">
            <label className="form-label" htmlFor={id}>
                {label}: {bonusAmount ? <b>{bonusAmount.toFixed(2)} p.</b> : <b></b>}
            </label>
                <input className="form-control"
                       type={type}
                       placeholder={placeholder}
                       onChange={onChange}
                       id={id}
                />
        </div>
    )
}

export default InputPercent