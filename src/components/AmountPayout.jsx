import {useSelector} from "react-redux";

function AmountPayout(props){
    const { text, ndfl, id } = props

    const amount = useSelector((state) => {
        const {inputSalaryReducer} = state
        return inputSalaryReducer[id]
    })

    return (
        !ndfl
            ? <><h4>{text}: {Number(amount).toFixed(2)}p.</h4></>
            : <><h4>{text}: {(amount * 0.87).toFixed(2)}p.</h4></>
    )
}

export default AmountPayout