import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 291px;
    height: 100%;
    background-color: var(--secondary-color);
    gap: 5px;
    overflow-y: auto;

    .cart-row-text{
        display:flex;
        width:243px;
        height:auto;
        flex:0.5;
        margin-top: 10px;
        padding: 0px;
        h2{
            font-size:var(--font-size-medium);
            font-weight:700;
            line-height: 29.33px;
            text-align:left;
            margin:0px;
        }

    }

    .cart-row-products{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        flex:5;
        gap:20px;

        .cart-row-product{
            display:flex;
            justify-content:center;
            align-items:center;
            width:226px;
            height:105px;
        }
    }

    .cart-row-button{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:256px;
        height:40px;
        flex:0.5;
        button{
                width:100% ;
                padding: 8px 16px ;
                color:var(--white-color);
                background-color: var(--ocre-color);
                border-radius:32px;
                border:none;
                cursor: pointer;
                span{
                    font-size:var(--font-size-small);
                    font-weight:500;
                    line-height:14.08px;
                }
            }
    }
`;

export default Wrapper;