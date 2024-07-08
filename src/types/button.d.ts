import { ParentType } from "./products";

export type ButtonType = "submit" | "button";

export type ButtonProps = {
    type: ButtonType;
    buttonText: string;
    parentType:ParentType;
    handleButtonClick?: () => void
}