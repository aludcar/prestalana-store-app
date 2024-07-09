import { ParentType } from "./base";

export type InputFieldProps = {
    labelText: string;
    inputName: string;
    inputType: string;
    isRequired: boolean;
    handlerOnChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
    parentType?:ParentType;
}