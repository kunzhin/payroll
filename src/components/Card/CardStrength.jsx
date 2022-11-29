import {useDispatch} from "react-redux";
import InputPercent from "../InputPercent";
import AmountPayout from "../AmountPayout";
import Switch from "../Switch";

import {strengthCoffee, strengthMaggi, strengthPurina} from "../../data/inputObjectList";
import {
    inputStrengthCoffeePercent,
    inputStrengthMaggiPercent,
    inputStrengthPurinaPercent,
    switchStrengthPhotoCoffee,
    switchStrengthPhotoMaggi,
    switchStrengthPhotoPurina,
    strengthTotalBonus,
    totalBonus,
    totalPayout
} from "../../redux/actions";

function CardStrength(props){

    const dispatch = useDispatch()

    const update = () => {
        dispatch(strengthTotalBonus())
        dispatch(totalBonus())
        dispatch(totalPayout())
    }

    const strCoffeePercentChange = (e) => {
        dispatch(inputStrengthCoffeePercent(e.target.value))
        update()
    }
    const strMaggiPercentChange = (e) => {
        dispatch(inputStrengthMaggiPercent(e.target.value))
        update()
    }
    const strPurinaPercentChange = (e) => {
        dispatch(inputStrengthPurinaPercent(e.target.value))
        update()
    }

    const changeSwitchPhotoCoffee = (e) => {
        dispatch(switchStrengthPhotoCoffee(e.target.checked))
        update()
    }

    const changeSwitchPhotoMaggi = (e) => {
        dispatch(switchStrengthPhotoMaggi(e.target.checked))
        update()
    }

    const changeSwitchPhotoPurina = (e) => {
        dispatch(switchStrengthPhotoPurina(e.target.checked))
        update()
    }

    return(

            <div className="card">
                <div className="card-body">
                    <AmountPayout text="Итого" id="strengthTotalBonus" />
                    <InputPercent
                        label={strengthCoffee.label}
                        type={strengthCoffee.type}
                        placeholder={strengthCoffee.placeholder}
                        id={strengthCoffee.id}
                        onChange={strCoffeePercentChange}
                    />
                    <Switch text="Фото >=95%" onChange={changeSwitchPhotoCoffee} />
                    <InputPercent
                        label={strengthMaggi.label}
                        type={strengthMaggi.type}
                        placeholder={strengthMaggi.placeholder}
                        id={strengthMaggi.id}
                        onChange={strMaggiPercentChange}
                    />
                    <Switch text="Фото >=100%" onChange={changeSwitchPhotoMaggi} />
                    <InputPercent
                        label={strengthPurina.label}
                        type={strengthPurina.type}
                        placeholder={strengthPurina.placeholder}
                        id={strengthPurina.id}
                        onChange={strPurinaPercentChange}
                    />
                    <Switch text="Фото >=100%" onChange={changeSwitchPhotoPurina} />
                </div>
            </div>

    )
}

export default CardStrength