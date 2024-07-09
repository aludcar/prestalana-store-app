import React from 'react';
import { Form as FormType } from '../types/form';
import useAuthenticateUser from '../hooks/UseAuthenticateUser';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/styled-wrappers/LoginWrapper';

const FormLogin: React.FC<FormType> = ({ children }) => {
    const navigate = useNavigate();
    const { authenticateUser } = useAuthenticateUser();

    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await authenticateUser(
            formData.get('username') as string,
            formData.get('password') as string
        );

        navigate("/");
    };

    return (
        <Wrapper>
            <form onSubmit={handlerSubmit}>
                {children}
            </form>
        </Wrapper>

    );
};

export default FormLogin;