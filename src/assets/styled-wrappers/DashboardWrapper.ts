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
    justify-content: space-between;
    align-items: stretch;
    
    .dashboard-row-products{
        display:flex;
        flex-direction: column;
        margin-left: 94px;
            .dashboard-row-title{
                display: flex;
                margin-top: 90px;
                width: 289px;
                height: 66px;
                    h1{
                        font-size:var(--font-size-large);
                        margin: 0px;
                        /* line-height:16px; */
                    }
        }
    }
    .dashboard-row-favorites{
        display:flex;
        margin-right: 56px;
        margin-top:132px;
    }
}
.dashboard-row-cart-list{
    display: flex;
    flex: 1;
    width: 100%;
}

`

export default Wrapper;