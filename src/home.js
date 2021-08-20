import React, { Component } from 'react';
import * as S from './styles';

//Components
import CarImg from './Assets/car.svg';
import Bin from './Assets/bin.png';

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
                isDisplay: true
            },
            {
                id: 1,
                name: "Polo",
                carMaker: "Volkswagen",
                price: 70000,
                type: "Hatch",
                isDisplay: true
            },
            {
                id: 2,
                name: "T-Cross",
                carMaker: "Volkswagen",
                price: 123000,
                type: "SUV",
                isDisplay: true
            },
            {
                id: 3,
                name: "Tiguan R-line",
                carMaker: "Volkswagen",
                price: 146000,
                type: "SUV",
                isDisplay: true
            },
            {
                id: 4,
                name: "Civic",
                carMaker: "Honda",
                price: 115000,
                type: "Sedan",
                isDisplay: true
            },
            {
                id: 5,
                name: "Corolla",
                carMaker: "Toyota",
                price: 184000,
                type: "Sedan",
                isDisplay: true
            },
            {
                id: 6,
                name: "Corolla Cross",
                carMaker: "Toyota",
                price: 123000,
                type: "SUV",
                isDisplay: true
            },
            {
                id: 7,
                name: "Compass",
                carMaker: "Jeep",
                price: 132000,
                type: "SUV",
                isDisplay: true
            },
            {
                id: 8,
                name: "Golf G TI",
                carMaker: "Volkswagen",
                price: 138000,
                type: "Hatch",
                isDisplay: true
            }
        ],
    }

    addCar = (id) => {
        const { cars } = this.state;
        const filter = cars.find(item => item.id === id)

        filter.isDisplay = false;
        this.setState({ carsAdd: this.state.carsAdd.concat(filter) })

    }

    removeCar = (id) => {
        const { cars } = this.state;
        const filter = cars.find(item => item.id === id)

        filter.isDisplay = true;
        this.setState({
            carsAdd: this.state.carsAdd.filter(item => item.id !== id)
        })
    }


    clearAll = () => {
        this.state.cars.map(item => item.isDisplay = true)

        this.setState({
            carsAdd: []
        })
    }

    drop = (e) => {
        e.preventDefault();
        const target = e.target;
        const card_id = e.dataTransfer.getData('card_id');

        /* const filter = this.state.cars.find(item => {
            return item.id === Number(card_id)
        }) */

        if (target.id === 'boxSelect')
            this.addCar(Number(card_id));
        else if (target.id === 'boxItems')
            this.removeCar(Number(card_id))
    }

    dragOver = (e) => {
        e.preventDefault();
    }

    dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
    }


    renderCar = () =>
        this.state.cars.map((item, index) => (
            <S.BoxCar
                key={index}
                id={item.id}
                draggable={true}
                onDragStart={this.dragStart}
                check={item.isDisplay}
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
        ))


    renderCarAdd = () => {
        return this.state.carsAdd.map((item, index) =>
            <S.ItemsAdd
                key={index}
                id={item.id}
                draggable={true}
                onDragStart={this.dragStart}
            >
                <S.HeaderTitle>
                    <S.TitleCar color='white'>{item.name}</S.TitleCar>
                    <S.Remove onClick={() => this.removeCar(item.id)}>-</S.Remove>
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
                <S.BoxTitleStore>
                    <S.TitleStore>Loja de Carros!</S.TitleStore>
                </S.BoxTitleStore>
                <S.ContainerStore>
                    <S.BoxShop
                        id='boxItems'
                        onDrop={(e) => { this.drop(e) }}
                        onDragOver={this.dragOver}
                    >
                        {this.renderCar()}
                    </S.BoxShop>

                    <S.BoxSelect>
                        <S.BoxItems
                            id='boxSelect'
                            onDrop={(e) => { this.drop(e) }}
                            onDragOver={this.dragOver}
                        >
                            {this.state.carsAdd.length ? this.renderCarAdd() : <S.BoxPlaceholder id='boxSelect'>
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
                            <S.BoxClear onClick={this.clearAll}>
                                <S.QuantityItems>{this.state.carsAdd.length}</S.QuantityItems>
                                <S.ClearItems src={Bin} alt='Icon Lixeira' />
                                <S.Popups class="popuptext" id="myPopup">Remover tudo</S.Popups>
                            </S.BoxClear>
                        </S.BoxResult>
                    </S.BoxSelect>
                </S.ContainerStore>
            </S.Container>
        )
    }
}

export default Home;