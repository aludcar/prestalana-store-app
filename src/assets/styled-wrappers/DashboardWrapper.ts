import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;

.dashboard-row-products-favorites{
    display: flex;
    flex-direction: row;
    flex: 5;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    
    .dashboard-row-products{
        display:flex;
        flex-direction: column;
        h1{
            font-size:var(--font-size-large);
            margin: 30px 0px;
            line-height:16px;
        }
    }
    .dashboard-row-favorites{
        display:flex;
    }
}
.dashboard-row-cart-list{
    display: flex;
    flex: 1;
    width: 100%;
}

`

export default Wrapper;