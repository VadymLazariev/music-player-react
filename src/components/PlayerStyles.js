import styled from 'styled-components'

export const MainStyled = styled.main`
    display: grid;
    grid-template-columns: 400px 400px;
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
`;

export  const  PlayerContainerStyled = styled.div`
     width: 100%;
     height: 500px;
     -moz-box-shadow: 0 0 10px #000000;
     -webkit-box-shadow: 0 0 10px #000000;
     box-shadow: 0 0 10px #000000;
`;

export const PlayerHeaderStyled = styled.div`
    height: 40%;
    width: 100%;
    background: rgb(210, 216, 216)
`;
export const PlayerContentStyled = styled.div`
    height: 60%;
    width: 100%;
    background: rgb(26, 26, 26);
`;
export const PlayerAlbumImage = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    position: absolute;
    margin-top: 100px;;
`;

export const PlayerControls= styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    border: none;
`;

export const PlayerSubControls= styled.div`
    display: flex;
    align-items: center;;
    flex-direction: row;
    justify-content: center;
    border: none;
`;