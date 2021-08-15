import React, { Component } from 'react';
import * as S from './styles';

//Components
import CarImg from '../src/Assets/car.svg';

class Home extends Component {
    state = {
        carsAdd: [],
        cars: [
            {
                id: 0,
                name: "Jetta",
                carMaker: "Volkswagen",
                price: 144000,
                type: "sedan",
            },
            {
                id: 1,
                name: "Polo",
                carMaker: "Volkswagen",
                price: 70000,
                type: "Hatch",
            },
            {
                id: 2,
                name: "T-Cross",
                carMaker: "Volkswagen",
                price: 123000,
                type: "SUV",
            },
            {
                id: 3,
                name: "Tiguan R-line",
                carMaker: "Volkswagen",
                price: 146000,
                type: "SUV",
            },
            {
                id: 4,
                name: "Civic",
                carMaker: "Honda",
                price: 115000,
                type: "Sedan",
            },
            {
                id: 5,
                name: "Corolla",
                carMaker: "Toyota",
                price: 184000,
                type: "Sedan",
            },
            {
                id: 6,
                name: "Corolla Cross",
                carMaker: "Toyota",
                price: 123000,
                type: "SUV",
            },
            {
                id: 7,
                name: "Compass",
                carMaker: "Jeep",
                price: 132000,
                type: "SUV",
            },
            {
                id: 8,
                name: "Golf G TI",
                carMaker: "Volkswagen",
                price: 138000,
                type: "Hatch",
            }
        ],
    }

    addCar = (id) => {
        const { cars } = this.state;
        const filter = cars.filter(item => item.id === id)

        this.setState({ carsAdd: this.state.carsAdd.concat(filter) })
    }

    removeCar(ev, id) {
        ev.preventDefault();
        this.setState({
            carsAdd: this.state.carsAdd.filter(item => item.id !== id)
        })
    }


    drop = (e) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const filter = this.state.cars.find(item => {
            return item.id === Number(card_id)
        })

        this.addCar(filter.id);
    }

    dragOver = (e) => {
        e.preventDefault();
    }

    dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
    }


    renderCart = () => {
        return this.state.carsAdd.map((item, index) =>
            <S.ItemsAdd key={index}>
                <S.HeaderTitle>
                    <S.TitleCar color='white'>{item.name}</S.TitleCar>
                    <S.Remove onClick={(ev) => { this.removeCar(ev, item.id) }}>-</S.Remove>
                </S.HeaderTitle>
                <S.ItemInfo>
                    <S.InfoCar>
                        <span>Tipo: </span>
                        {item.type}
                    </S.InfoCar>

                    <S.InfoCar>
                        <span>Preço: </span>
                        {item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </S.InfoCar>
                </S.ItemInfo>
            </S.ItemsAdd>
        )
    }

    render() {
        return (
            <S.Container>
                <S.BoxShop>
                    {this.state.cars.map((item, index) => (
                        <S.BoxCar
                            key={index}
                            id={item.id}
                            draggable={true}
                            onDragStart={this.dragStart}
                            onDragOver={this.dragOver}
                        >
                            <S.BoxTitleCar>
                                <S.TitleCar>{item.name}</S.TitleCar>
                                <S.Add onClick={() => { this.addCar(item.id) }}>+</S.Add>
                            </S.BoxTitleCar>

                            <S.BoxInfoCar>
                                <S.InfoCar>
                                    <span>Montadora: </span>
                                    {item.carMaker}
                                </S.InfoCar>

                                <S.InfoCar>
                                    <span>Preço: </span>
                                    {item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                </S.InfoCar>

                                <S.InfoCar>
                                    <span>Tipo: </span>
                                    {item.type}
                                </S.InfoCar>
                            </S.BoxInfoCar>
                        </S.BoxCar>
                    ))}
                </S.BoxShop>

                <S.BoxSelect>
                    <S.BoxItems
                        id='board-2'
                        onDrop={(e) => { this.drop(e) }}
                        onDragOver={this.dragOver}
                    >
                        {this.state.carsAdd.length ? this.renderCart() : <S.BoxPlaceholder>
                            <S.CarImg src={CarImg} alt="Carro" />
                            <S.Placeholder>Arraste seus carros preferidos aqui :)</S.Placeholder>
                        </S.BoxPlaceholder>}

                    </S.BoxItems>

                    <S.BoxResult>
                        <S.TitleCar size='1.5rem'>Total</S.TitleCar>
                        <S.InfoCar size='1.5rem'>
                            {this.state.carsAdd.reduce((a, b) => a + b.price, 0)
                                .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                        </S.InfoCar>
                    </S.BoxResult>
                </S.BoxSelect>
            </S.Container>
        )
    }
}

export default Home;