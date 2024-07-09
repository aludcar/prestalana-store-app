import { InputFieldProps } from "../types/input";
import { FaRegEyeSlash } from "react-icons/fa6";

const InputField: React.FC<InputFieldProps> = (
    {
        labelText,
        inputName,
        inputType,
        isRequired = false,
        handlerOnChange }) => {

    return (<>
        <label htmlFor={inputName}>{labelText}</label>
        <div style={{ position: 'relative', width: '100%' }}>
            <input name={inputName} type={inputType} required={isRequired} onChange={handlerOnChange} />
            {inputType === "password" &&
                <span
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                    }}
                >
                    <FaRegEyeSlash />
                </span>}

            {/* {inputType === "password" && <FaRegEyeSlash />} */}
        </div>

    </>)

}

export default InputField;