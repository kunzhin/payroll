import Input from "../Input";

function CardLaunch(props){
    const { title } = props
    return(
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                <h3 className="text-success">{title}</h3>

                </div>
            </div>
        </div>
    )
}

export default CardLaunch