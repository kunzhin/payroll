function Input({ label, placeholder, type, id, onChange }){

    return(
        <div className="mb-3">
            <label className="form-label" htmlFor={id}>
                {label}:
                <input className="form-control"
                       type={type}
                       placeholder={placeholder}
                       onChange={onChange}
                       id={id}
                />
            </label>
        </div>
    )
}

export default Input