import {useDispatch} from "react-redux";
import InputPercent from "../InputPercent";
import AmountPayout from "../AmountPayout";

import {inputCoverage, totalBonus, totalPayout} from "../../redux/actions";

function CardCoverage(props){
    const dispatch = useDispatch()

    const coveragePercentChange = (e) => {
        dispatch(inputCoverage(e.target.value))
        dispatch(totalBonus())
        dispatch(totalPayout())
    }

    return(

            <div className="card">
                <div className="card-body">
                    <AmountPayout text="Итого" id="coverageBonus" />
                    <InputPercent
                        label="Покрытие"
                        type="number"
                        id="coverage"
                        placeholder="Покрытие"
                        onChange={coveragePercentChange}
                    />
                </div>
            </div>

    )
}

export default CardCoverage