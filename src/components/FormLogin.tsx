import React, { useState } from 'react';
import { Form as FormType } from '../types/form';
import useAuthenticateUser from '../hooks/UseAuthenticateUser';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/styled-wrappers/LoginWrapper';

const FormLogin: React.FC<FormType> = ({ children }) => {
    const [hasError, setHasError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const navigate = useNavigate();
    const { authenticateUser } = useAuthenticateUser();

    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const result = await authenticateUser(
            formData.get('username') as string,
            formData.get('password') as string
        );
        if (result.status === "success") {
            setHasError(false);
            setErrorMsg("");
            navigate("/");
        } else {
            setHasError(true);
            setErrorMsg(result.error as string)
        }

    };

    return (
        <Wrapper>
            <form onSubmit={handlerSubmit}>
                {children}
                {
                    hasError && <span className='form-row-error'>{errorMsg}</span>
                }
            </form>
        </Wrapper>

    );
};

export default FormLogin;