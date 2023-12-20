import "./DropdownList.css"

const DropdownList = (props) => {

    const selectedValue = (e) => {
        props.updatedValue(e.target.value)
    }

    return (
        <div className="dropdownList">
            <label>{ props.label }</label>
            <select required={ props.required } value={ props.value } onChange={ selectedValue }>
                { props.items.map(item => <option key={ item }>{ item }</option>)}
            </select>
        </div>
    )
}

export default DropdownList