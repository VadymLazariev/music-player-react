import styled from 'styled-components'

export const PlayListContainer = styled.div`
  background: rgb(26, 26, 26);
  position: relative;`;

export const PlayList = styled.div`
  width: 100%;
  height: 500px;
  -moz-box-shadow:0 0 10px #000000;
  -webkit-box-shadow: 0 0 10px #000000;
  box-shadow: 0 0 10px #000000;
  overflow: auto;`;

export const UlStyled = styled.ul`
   list-style: none;
   padding: 0;
   list-style-type: none;
`;

export const  LiStyled = styled.li`
    padding: 10px;
    width: 100%;
    margin: 0%;
    color: white;
    transition: background-color 1s ease;
    &:hover {
    color: rgb(26, 26, 26);
    background-color: white;
    }
`;