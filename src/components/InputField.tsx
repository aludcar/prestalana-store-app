import { InputFieldProps } from "../types/input";

const InputField: React.FC<InputFieldProps> = (
    {
        labelText,
        inputName,
        inputType,
        isRequired = false,
        handlerOnChange }) => {

    return (<>
        <label htmlFor={inputName}>{labelText}</label>
        <input name={inputName} type={inputType} required={isRequired} onChange={handlerOnChange} />
    </>)

}

export default InputField;