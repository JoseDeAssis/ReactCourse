import "./Field.css"

const Field = ({ type = 'text', label, placeholder, value, updatedValue, required=false }) => {
    return (
        <div className={`field field-${type}`}>
            <label>{ label }</label>
            <input 
                type={ type }
                value={ value } 
                onChange={ e => updatedValue(e.target.value) } 
                required={ required } 
                placeholder={ placeholder } />
        </div>
    )
}

export default Field;