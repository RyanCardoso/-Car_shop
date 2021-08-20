import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    
`;

export const BoxTitleStore = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items:center;
    justify-content: center;
`;

export const TitleStore = styled.h1``;

export const ContainerStore = styled.div`
    width: 100%;
    min-height: calc(100vh - 92px);
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between; 
    margin-top: 2rem;
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
    pointer-events: ${props => props.check ? 'auto' : 'none'};
    opacity: ${props => props.check ? '1' : '0.3'};

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


export const Popups = styled.div`
    display: none;
    width: 160px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -80px;

    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }

`;

export const QuantityItems = styled.div`
    position:absolute;
    top: 50%;
    left: 65%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(0, -50%);
    border-radius: 50%;
    color: white;
    background: #555;
    overflow: hidden;

    &::after{
        content: '';
        position: absolute;
        top: 100%;
        border-radius: 50% 50% 0 0;
        width: 150%;
        height: 120%;
        background: rgb(203, 77, 77);;
        z-index: -1;
        transition: .5s;
    }
`;

export const BoxClear = styled.div`
    position: relative;
    margin-right: 3rem;
    cursor: pointer;

    &:hover ${Popups} {
        display: block;
    }

    &:hover ${QuantityItems} ::after{
        top: 0;
    }
`;

export const ClearItems = styled.img`
    width: 28px;
`;