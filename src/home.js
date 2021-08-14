import React, { Component } from 'react';
import * as S from './styles';

//Components
import CarImg from '../src/Assets/car.svg';

class Home extends Component {
    state = {
        carsAdd: [],
        cars: [
            {
                name: "Jetta",
                carMaker: "Volkswagen",
                price: 144000,
                type: "sedan",
            },
            {
                name: "Polo",
                carMaker: "Volkswagen",
                price: 70000,
                type: "Hatch",
            },
            {
                name: "T-Cross",
                carMaker: "Volkswagen",
                price: 123000,
                type: "SUV",
            },
            {
                name: "Tiguan R-line",
                carMaker: "Volkswagen",
                price: 146000,
                type: "SUV",
            },
            {
                name: "Civic",
                carMaker: "Honda",
                price: 115000,
                type: "Sedan",
            },
            {
                name: "Corolla",
                carMaker: "Toyota",
                price: 184000,
                type: "Sedan",
            },
            {
                name: "Corolla Cross",
                carMaker: "Toyota",
                price: 123000,
                type: "SUV",
            },
            {
                name: "Compass",
                carMaker: "Jeep",
                price: 132000,
                type: "SUV",
            },
            {
                name: "Golf G TI",
                carMaker: "Volkswagen",
                price: 138000,
                type: "Hatch",
            }
        ],
    }

    componentDidMount() {
        this.idAdd();
    }

    idAdd = () => {
        const testando = this.state.cars.map(item => {
            return {
                ...item,
                id: Math.floor(Math.random() * 1000)
            }
        })

        this.setState({ cars: testando })
    }

    addCar = (ev, id) => {
        ev.preventDefault();
        this.setState({
            carsAdd: this.state.carsAdd.concat(this.state.cars.filter(item => item.id == id))
        })
    }

    render() {
        return (
            <S.Container>
                <S.BoxShop>
                    {this.state.cars.map((item, index) => (
                        <S.BoxCar
                            key={index}
                            style={this.state.styled}
                        >
                            <S.BoxTitleCar>
                                <S.TitleCar>{item.name}</S.TitleCar>
                                <S.Add
                                    id={index}
                                    onClick={(ev) => { this.addCar(ev, item.id) }}
                                >
                                    +
                                </S.Add>
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
                    <S.BoxItems>
                        {this.state.carsAdd.length ? null : <S.BoxPlaceholder>
                            <S.CarImg src={CarImg} alt="Carro" />
                            <S.Placeholder>Arraste seus carros preferidos aqui :)</S.Placeholder>
                        </S.BoxPlaceholder>}
                        {this.state.carsAdd.map((item, index) => {
                            return (
                                <S.ItemsAdd key={index}>
                                    <S.HeaderTitle>
                                        <S.TitleCar>{item.name}</S.TitleCar>
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
                        })}
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