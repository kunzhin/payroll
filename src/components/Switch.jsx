import {useState} from "react";

function Switch ({text, onChange}) {

    const [checked, setChecked] = useState(true)

    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                defaultChecked={checked}
                onChange={(e) => {
                    onChange(e)
                    setChecked(!checked)
                }}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked"><b>{text}</b></label>
        </div>
    )
}

export default Switch