import styled from "styled-components";

const Wrapper = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background-color:var(--white-color);
        width:465px;
        height:443px;
        padding:24px;
        border-radius:24px;
        .form-row{
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            width:100%;
        }
        .form-row-field-text{
            width: 350px;
            height: 56px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin:4px 0px;
            input{
                width:100%;
                height:40px;
                border-radius:32px;
                border:solid 1px var(--gray-color);
                color:var(--text-color);
                padding:0px 20px;
            }
            label{
                color:var(--text-color);
                font-size:var(--font-size-mini);
            }

        }
        .form-row-button{
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            width:305px;
            height:40px;
            margin:8px 0px;
            button{
                width:100%;
                padding:8px 16px;
                color:var(--white-color);
                background-color: var(--ocre-color);
                border-radius:32px;
                cursor: pointer;
                span{
                    font-size:16px;
                }
            }

        }
        .form-row-text{
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            width:210px;
            height:28px;
            margin:8px 0px;
            a{
                color:var(--text-color);
            }
        }
        .form-row-error{
            color:var(--error-color-text)
        }
    }
`

export default Wrapper;