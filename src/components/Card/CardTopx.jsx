import {useDispatch} from "react-redux";
import InputPercent from "../InputPercent";
import AmountPayout from "../AmountPayout";
import {topMaggi, topCoffee, topPurina, topCPW, topConf, topCacao} from "../../data/inputObjectList";
import {
    inputTopCoffeePercent,
    inputTopConfPercent,
    inputTopMaggiPercent,
    inputTopCPWPercent,
    inputTopCacaoPercent,
    inputTopPurinaPercent,
    topTotalBonus,
    totalBonus,
    totalPayout
} from "../../redux/actions";

function CardTopx(props){

    const dispatch = useDispatch()

    const update = () => {
        dispatch(topTotalBonus())
        dispatch(totalBonus())
        dispatch(totalPayout())
    }

    const topCoffeePercentChange = (e) => {
        dispatch(inputTopCoffeePercent(e.target.value))
        update()
    }
    const topConfPercentChange = (e) => {
        dispatch(inputTopConfPercent(e.target.value))
        update()
    }
    const topMaggiPercentChange = (e) => {
        dispatch(inputTopMaggiPercent(e.target.value))
        update()
    }
    const topCPWPercentChange = (e) => {
        dispatch(inputTopCPWPercent(e.target.value))
        update()
    }
    const topCacaoPercentChange = (e) => {
        dispatch(inputTopCacaoPercent(e.target.value))
        update()
    }
    const topPurinaPercentChange = (e) => {
        dispatch(inputTopPurinaPercent(e.target.value))
        update()
    }

    return(

            <div className="card">
                <div className="card-body">
                <AmountPayout text="Итого" id="topTotalBonus" />
                    <InputPercent
                        label={topCoffee.label}
                        type={topCoffee.type}
                        placeholder={topCoffee.placeholder}
                        id={topCoffee.id}
                        onChange={topCoffeePercentChange}
                    />
                    <InputPercent
                        label={topConf.label}
                        type={topConf.type}
                        placeholder={topConf.placeholder}
                        id={topConf.id}
                        onChange={topConfPercentChange}
                    />
                    <InputPercent
                        label={topMaggi.label}
                        type={topMaggi.type}
                        placeholder={topMaggi.placeholder}
                        id={topMaggi.id}
                        onChange={topMaggiPercentChange}
                    />
                    <InputPercent
                        label={topCPW.label}
                        type={topCPW.type}
                        placeholder={topCPW.placeholder}
                        id={topCPW.id}
                        onChange={topCPWPercentChange}
                    />
                    <InputPercent
                        label={topCacao.label}
                        type={topCacao.type}
                        placeholder={topCacao.placeholder}
                        id={topCacao.id}
                        onChange={topCacaoPercentChange}
                    />
                    <InputPercent
                        label={topPurina.label}
                        type={topPurina.type}
                        placeholder={topPurina.placeholder}
                        id={topPurina.id}
                        onChange={topPurinaPercentChange}
                    />
                </div>
            </div>

    )
}

export default CardTopx