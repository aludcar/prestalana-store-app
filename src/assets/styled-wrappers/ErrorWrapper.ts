import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    

    .error-row-message{
        display:flex;
        flex-direction:column;
        background-color: var(--gray-color);
        justify-content:center;
        align-items:center;
        border-radius:24px;
        width:350px;
        height:200px;
        padding:30px 0px;
        h2{
            text-align:center;
        }

    }
    .error-row-404{
        display:flex;
        flex-direction:column;
        background-color: var(--gray-color);
        justify-content:center;
        align-items:center;
        border-radius:24px;
        width:350px;
        height:200px;
        padding:30px 0px;
        h2{
            text-align:center;
        }
    }

`;

export default Wrapper;