import React from 'react'
import InputField from '../components/InputField'
import FormLogin from '../components/FormLogin'
import Button from '../components/Button'


const Login: React.FC = () => {
    return (
        <FormLogin>
            <InputField labelText='User Name' inputName='username' inputType='text' isRequired={true} />
            <InputField labelText='Password' inputName='password' inputType='password' isRequired={true} />
            <Button type='submit' buttonText='Login' parentType="form" />
        </FormLogin>
    )
}

export default Login