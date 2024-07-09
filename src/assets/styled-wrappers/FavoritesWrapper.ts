import styled from "styled-components";

const Wrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:center;
    width:154px;
    height:556px;
    background-color:var(--tertiary-color);
    border-radius:24px;
    gap:40px;
    overflow-y: auto;

    .favorite-row-text{
        display:flex;
        padding-top:10px;
        width:106px;
        height:64px;
        h2{
            font-size:var(--font-size-small);
            font-weight:700;
            line-height: var(--font-size-small);
            text-align:center;
        }

    }
    .favorite-row-product{
        display:flex;
        justify-content:center;
        align-items:center;
        width:106px;
        height:105px;
        border-radius:20px;
    }
`;

export default Wrapper;