import styled from "styled-components";

const Wrapper = styled.div`

    width: 487px;
    height: 62px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top:26px;
    gap:10px;
    input{
        width:100%;
        height:36px;
        border-radius:17px;
        border:none;
        color:var(--text-color);
        padding:0px 20px;
    }
    label{
        color:var(--text-color);
        font-size:var(--font-size-small);
        font-weight:600;
    }
`;

export default Wrapper;