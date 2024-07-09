import styled from "styled-components";

const Wrapper = styled.section`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content:center;
    align-items:flex-start;
    width:484px;
    height:424px;
    overflow-y:auto;
    border-radius:24px;
    background-color:var(--secondary-color);
    margin-top: 10px;
`;

export default Wrapper;