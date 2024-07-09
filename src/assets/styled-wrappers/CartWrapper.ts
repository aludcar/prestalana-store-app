import styled from "styled-components";

const Wrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:center;
    width:291px;
    height:100%;
    background-color:var(--secondary-color);
    gap:25px;
    overflow-y: auto;

    .cart-row-text{
        display:flex;
        padding-top:10px;
        width:243px;
        height:auto;
        h2{
            font-size:var(--font-size-medium);
            font-weight:700;
            line-height: 29.33px;
            text-align:left;
        }

    }
    .cart-row-product{
        display:flex;
        justify-content:center;
        align-items:center;
        width:226px;
        height:105px;
    }
`;

export default Wrapper;