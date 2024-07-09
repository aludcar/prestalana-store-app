import React from 'react'
import { ButtonProps } from '../types/button'
import { FaRegTrashAlt } from "react-icons/fa";



const Button: React.FC<ButtonProps> = ({ type, buttonText, parentType, handleButtonClick }) => {
    const handleClick = () => {
        if (handleButtonClick) {
            handleButtonClick();
        }
    }
    return (
        <button
            /* className={aqui pregunta si isCartParent cambia su forma y aplica un icon} */
            type={type}
            onClick={handleClick} >
            <span>
                {parentType === "cart" ? <FaRegTrashAlt /> : buttonText}
            </span>
        </button>
    )
}

export default Button
