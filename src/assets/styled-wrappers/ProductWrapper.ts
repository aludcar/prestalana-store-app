import styled from "styled-components";
import { ParentType } from "../../types/base";

type WrapperProps = {
    parentType: ParentType;
}

//don't pass props to the dom directly "parentType"
const Wrapper = styled.article.withConfig({
    shouldForwardProp: (prop => prop !== "parentType")
}) <WrapperProps>`
    display:flex;
    flex-direction: ${props => (props.parentType === "cart" ? "row" : "column")};
    justify-content:center;
    align-items: ${props => (props.parentType === "cart" ? "flex-start" : "center")};
    min-width:105px;
    height: ${props => (props.parentType === "cart" ? "105px" : "168px")};
    margin:8px 0px;
    gap: ${props => (props.parentType === "cart" ? "1px" : "8px")};
    .product-row-img{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        img{
            width:105px;
            height:105px;
            border-radius:20px;
        }
    }
    .product-row-text{
        display:flex;
        flex-direction:column;
        width:106px;
        height:15px;
        span{
            font-weight:700;
            line-height:14.08px;
            text-align:left;
        }
    }
    .product-row-button{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:105px;
        height:32px;
        button{
                width:${props => (props.parentType === "cart" ? "32px" : "100%")} ;
                height:${props => (props.parentType === "cart" ? "32px" : "auto")} ;
                padding:${props => (props.parentType === "cart" ? "8px" : "8px 16px")} ;
                color:var(--white-color);
                background-color: ${props => (props.parentType === "cart" ? "var(--tertiary-color)" : "var(--ocre-color)")};
                border-radius:${props => (props.parentType === "cart" ? "50px" : "32px")} ;
                border:none;
                cursor: pointer;
                span{
                    font-weight:700;
                    line-height:14.08px;
                }
            }
    }
`;

export default Wrapper;