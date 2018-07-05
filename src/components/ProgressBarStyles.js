import styled from 'styled-components'



export const PlayerProgressContainerStyled = styled.div`
    position: relative;

    width: 90%;
    height: 5px;
    margin: 0 auto;

    background-color: white;
    border-radius: 40px;
`;


export const PlayerProgressValueStyled = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    background-color: orange;
    border-radius: 40px;
    &:after{
    position: absolute;
    top: -3px;
    right: -6px;
    content: '';

    width: 15px;
    height: 10px;

    border-radius: 50%;
    background-color: white;
    box-shadow: rgba(255,255,255,.2) 0 0 5px 2px;
    }
 `;

