import {useDispatch, useSelector} from "react-redux";
import InputPercent from "../InputPercent";
import AmountPayout from "../AmountPayout";
import { volumeCoffee, volumeConf, volumeCPW, volumePurina, volumeFoodDairy, volumeTotal } from "../../data/inputObjectList";
import {
    inputVolCoffeePercent,
    inputVolConfPercent,
    inputVolCPWPercent,
    inputVolFDPercent,
    inputVolPurinaPercent,
    inputVolTotalPercent,
    totalBonus,
    totalPayout
} from "../../redux/actions";


function CardVolume(props){

    const dispatch = useDispatch()

    const totalVolumePercent = useSelector((state) => {
        const {inputSalaryReducer} = state
        return inputSalaryReducer.volumeTotalPercent
    })

    const update = (percent) => {
        dispatch(inputVolTotalPercent(percent))
        dispatch(totalBonus())
        dispatch(totalPayout())
    }

    const volCoffeePercentChange = (e) => {
        dispatch(inputVolCoffeePercent(e.target.value))
        update(totalVolumePercent)
    }
    const volConfPercentChange = (e) => {
        dispatch(inputVolConfPercent(e.target.value))
        update(totalVolumePercent)
    }
    const volCPWPercentChange = (e) => {
        dispatch(inputVolCPWPercent(e.target.value))
        update(totalVolumePercent)
    }
    const volFDPercentChange = (e) => {
        dispatch(inputVolFDPercent(e.target.value))
        update(totalVolumePercent)
    }
    const volPurinaPercentChange = (e) => {
        dispatch(inputVolPurinaPercent(e.target.value))
        update(totalVolumePercent)
    }
    const volTotalPercentChange = (e) => {
        update(e.target.value)
    }

    return(

            <div className="card">
                <div className="card-body">
                    <AmountPayout text="Итого" id="volumeTotalBonus" />
                    <InputPercent
                        label={volumeCoffee.label}
                        type={volumeCoffee.type}
                        placeholder={volumeCoffee.placeholder}
                        id={volumeCoffee.id}
                        onChange={volCoffeePercentChange}
                    />
                    <InputPercent
                        label={volumeConf.label}
                        type={volumeConf.type}
                        placeholder={volumeConf.placeholder}
                        id={volumeConf.id}
                        onChange={volConfPercentChange}
                    />
                    <InputPercent
                        label={volumeCPW.label}
                        type={volumeCPW.type}
                        placeholder={volumeCPW.placeholder}
                        id={volumeCPW.id}
                        onChange={volCPWPercentChange}
                    />
                    <InputPercent
                        label={volumeFoodDairy.label}
                        type={volumeFoodDairy.type}
                        placeholder={volumeFoodDairy.placeholder}
                        id={volumeFoodDairy.id}
                        onChange={volFDPercentChange}
                    />
                    <InputPercent
                        label={volumePurina.label}
                        type={volumePurina.type}
                        placeholder={volumePurina.placeholder}
                        id={volumePurina.id}
                        onChange={volPurinaPercentChange}
                    />
                    <InputPercent
                        label={volumeTotal.label}
                        type={volumeTotal.type}
                        placeholder={volumeTotal.placeholder}
                        id={volumeTotal.id}
                        onChange={volTotalPercentChange}
                    />
                </div>
            </div>

    )
}

export default CardVolume