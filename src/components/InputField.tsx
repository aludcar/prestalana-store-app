/* import Wrapper from "../assets/styled-wrappers/InputWrapper"; */
import { ParentType } from "../types/base";

export type InputFieldProps = {
    labelText: string;
    inputName: string;
    inputType: string;
    isRequired: boolean;
    handlerOnChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
    parentType?:ParentType;
}

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