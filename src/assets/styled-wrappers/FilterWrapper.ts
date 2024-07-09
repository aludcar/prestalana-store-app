import styled from "styled-components";

const Wrapper = styled.div`

    width: 487px;
    height: 62px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin:4px 0px;
    input{
        width:100%;
        height:36px;
        border-radius:17px;
        border:none;
        color:var(--text-color);
    }
    label{
        color:var(--text-color);
        font-size:var(--font-size-small);
        font-weight:600;
    }
`;

export default Wrapper;