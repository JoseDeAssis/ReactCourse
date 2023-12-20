import "./TextField.css"

const TextField = (props) => {
    
    const writtenValue = (e) => {
        props.updatedValue(e.target.value)
    }

    return (
        <div className="textField">
            <label>{ props.label }</label>
            <input 
                value={ props.value } 
                onChange={ writtenValue } 
                required={ props.required } 
                placeholder={ props.placeholder } />
        </div>
    )
}

export default TextField;