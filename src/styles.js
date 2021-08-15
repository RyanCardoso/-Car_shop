import styled from 'styled-components';

export const Container = styled.div`
    width: 95%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between; 
`;

export const BoxShop = styled.div`
    position: relative;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

//Start Car
export const BoxTitleCar = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(245, 245, 245);
    border-bottom: 1px solid rgb(211, 211, 211);
    border-radius: 4px 4px 0px 0px;TitleCar
`;

export const TitleCar = styled.h3`
    font-weight: 600;
    font-size: ${props => props.size || '1rem'};
    padding-left: .4rem;
    color: ${props => props.color || 'black'};
`;

export const BoxCar = styled.div`
    width: 250px;
    margin-bottom: 1rem;
    border-radius: 4px;
    border: 1px solid rgb(211, 211, 211);
    transition: .4s;
    cursor: grab;
    user-select: none;
    pointer-events: ${props => props.check ? 'none' : 'auto'};

    &:hover {
        box-shadow: 0px 14px 15px rgba(0,0,0, .3);
        border-color: rgb(91, 192, 222);
    }

    &:hover ${BoxTitleCar} {
        background: rgb(91, 192, 222);
    }

    &:hover ${TitleCar} {
        background: rgb(91, 192, 222);
        color: white;
    }
`;

export const Add = styled.button`
    font: 300 1rem 'Roboto', Arial;
    color: white;
    width: 1.2rem;
    height: 1.2rem;
    font-size: .9rem;
    display: flex;
    align-items:center;
    justify-content: center;
    background: black;
    border-radius: 50%;
    margin-right: .4rem;
    border: none;
    cursor: pointer;
`;

export const BoxInfoCar = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const InfoCar = styled.p`
    font-size:  ${props => props.size || '1rem'};

    span{   
        font-weight: 600;   
    }
`;


/* -------------- Compras --------------- */

export const BoxSelect = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
`;

export const BoxItems = styled.div`
    width: 100%;
    height: 70vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
`;

export const BoxPlaceholder = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;

export const CarImg = styled.img`
    width: 50%;
`;
export const Placeholder = styled.p``;

export const ItemsAdd = styled.div`
    width: 90%;
    flex-direction: column;
    margin-top: 2rem;
    border: .4px solid rgb(91, 192, 222);
    border-radius: .3rem;
`;

export const HeaderTitle = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(91, 192, 222);
`;

export const Remove = styled.button`
    font: 300 1rem 'Roboto', Arial;
    color:  rgb(91, 192, 222);
    width: 1.2rem;
    height: 1.2rem;
    font-size: .9rem;
    display: flex;
    align-items:center;
    justify-content: center;
    border-radius: 50%;
    margin-right: .4rem;
    border: none;
    cursor: pointer;
`;


export const ItemInfo = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const BoxResult = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: .5rem;
`;