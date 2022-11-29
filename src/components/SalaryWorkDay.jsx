import {useDispatch, useSelector} from "react-redux";
import Input from "./Input";
import {
    inputSalary,
    inputDayWork,
    inputDayWorked,
    payoutSalary,
    inputVolCoffeePercent,
    inputVolConfPercent,
    inputVolCPWPercent,
    inputVolFDPercent,
    inputVolPurinaPercent,
    inputVolTotalPercent,
    inputTopCoffeePercent,
    inputTopConfPercent,
    inputTopMaggiPercent,
    inputTopCPWPercent,
    inputTopCacaoPercent,
    inputTopPurinaPercent,
    inputStrengthCoffeePercent,
    inputStrengthMaggiPercent,
    inputStrengthPurinaPercent,
    strengthTotalBonus,
    inputCoverage,
    topTotalBonus,
    totalBonus,
    totalPayout
} from "../redux/actions";

function SalaryWorkDay (props) {

    const percent = useSelector((state) => {
        const {inputSalaryReducer} = state
        return inputSalaryReducer
    })

    const dispatch = useDispatch()

    const update = () => {
        dispatch(payoutSalary())
        dispatch(inputVolCoffeePercent(percent.volumeCoffeePercent))
        dispatch(inputVolConfPercent(percent.volumeConfPercent))
        dispatch(inputVolCPWPercent(percent.volumeConfPercent))
        dispatch(inputVolFDPercent(percent.volumeFDPercent))
        dispatch(inputVolPurinaPercent(percent.volumePurinaPercent))
        dispatch(inputVolTotalPercent(percent.volumeTotalPercent))
        dispatch(inputTopCoffeePercent(percent.topCoffeePercent))
        dispatch(inputTopConfPercent(percent.topConfPercent))
        dispatch(inputTopMaggiPercent(percent.topMaggiPercent))
        dispatch(inputTopCPWPercent(percent.topCPWPercent))
        dispatch(inputTopCacaoPercent(percent.topCacaoPercent))
        dispatch(inputTopPurinaPercent(percent.topPurinaPercent))
        dispatch(inputStrengthCoffeePercent(percent.strengthCoffeePercent))
        dispatch(inputStrengthMaggiPercent(percent.strengthMaggiPercent))
        dispatch(inputStrengthPurinaPercent(percent.strengthPurinaPercent))
        dispatch(strengthTotalBonus())
        dispatch(inputCoverage(percent.coveragePointOfSale))
        dispatch(topTotalBonus())
        dispatch(totalBonus())
        dispatch(totalPayout())
    }

    const salaryChange = (e) => {
        dispatch(inputSalary(e.target.value))
        update()
    }

    const dayWorkChange = (e) => {
        dispatch(inputDayWork(e.target.value))
        update()
    }

    const dayWorkedChange = (e) => {
        dispatch(inputDayWorked(e.target.value))
        update()
    }

    return (
        <>
            <div className="col align-self-center">
                <Input
                    label="Оклад"
                    placeholder="Внеси оклад"
                    type="number"
                    id="salary"
                    onChange={salaryChange}
                />
            </div>
            <div className="col align-self-center">
                <Input
                    label="Кол-во рабочих дней"
                    placeholder="Рабочие дни"
                    type="number"
                    id="dayWork"
                    onChange={dayWorkChange}
                />
            </div>
            <div className="col align-self-center">
                <Input
                    label="Отработано дней"
                    placeholder="Отаботанные дни"
                    type="number"
                    id="daysWorked"
                    onChange={dayWorkedChange}
                />
            </div>
        </>
    )
}

export default SalaryWorkDay