import AmountPayout from "./AmountPayout";

function ResultHeader (props) {
    return (
        <>
            <div className="col">
                <AmountPayout text="Оклад" id="payoutSalary" />
            </div>
            <div className="col">
                <AmountPayout text="Бонус" id="totalBonus" />
            </div>
            <div className="col">
                <AmountPayout text="Итого" id="totalPayout" />
            </div>
            <div className="col">
                <AmountPayout text="На выплату" id="totalPayout" ndfl />
            </div>
        </>
    )
}

export default ResultHeader