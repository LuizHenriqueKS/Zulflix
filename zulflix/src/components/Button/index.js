import styled from "styled-components";

const Button = styled.a`

    border: 1px solid rgb(153, 153, 153);
    padding: 0.57em 1.35em;
    font-size: 95%;
    text-decoration: none;

&:hover{
    background-color: #ffffff17;
}

&:focus{
    box-shadow: 0px 0px 0 2px #ffffffEE;
}

&:active{
    background-color: #ffffff0F;
}
`;

export default Button;