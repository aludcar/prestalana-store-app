export type InputFieldProps = {
    labelText: string;
    inputName: string;
    inputType: string;
    isRequired: boolean;
    handlerOnChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = (
    {
        labelText,
        inputName,
        inputType,
        isRequired = false,
        handlerOnChange }) => {

    return (<div>
        <label htmlFor={inputName}>{labelText}</label>
        <input name={inputName} type={inputType} required={isRequired} onChange={handlerOnChange} />
    </div>)

}

export default InputField;