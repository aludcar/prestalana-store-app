import React from 'react'
import InputField from '../components/InputField'
import FormLogin from '../components/FormLogin'
import Button from '../components/Button'
import { FaAppStore } from "react-icons/fa";



const Login: React.FC = () => {
    return (
        <FormLogin>
            <div className='form-row'>
                <FaAppStore size={120} />
                <p>Inicia sesión</p>
            </div>
            <div className='form-row-field-text'>
                <InputField labelText='User Name' inputName='username' inputType='text' isRequired={true} />
            </div>
            <div className='form-row-field-text'>
                <InputField labelText='Password' inputName='password' inputType='password' isRequired={true} />
            </div>
            <div className='form-row-button'>
                <Button type='submit' buttonText='Login' parentType="form" />
            </div>
            <div className='form-row-text'>
                <span><a href="#">Términos y condiciones de uso</a>  y el</span>
                <span><a href="#">Aviso de privacidad</a> de Multiapoyo.</span>
            </div>
        </FormLogin>
    )
}

export default Login