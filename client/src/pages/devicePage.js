import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import bigCrosshair from '../assets/bigCrosshair.png'
import Button from "react-bootstrap/cjs/Button";
import Card from 'react-bootstrap/Card';

const DevicePage = () => {
    const device = {id: 1, name: 'Alloy FPS Pro TKL', price: 10000, rating: 0, img: 'http://localhost:5000/7a425799-81bf-466d-96aa-d1cc31655e70.jpg'}
    const description = [
        {id:1, title: 'Тип клавиатуры', description: 'alsfa;sdf'},
        {id:2, title: 'alk', description: 'alsfa;sdf'},
        {id:3, title: 'alk', description: 'alsfa;sdf'},
        {id:4, title: 'alk', description: 'alsfa;sdf'},
        {id:5, title: 'alk', description: 'alsfa;sdf'},
        {id:6, title: 'alk', description: 'alsfa;sdf'},
        {id:7, title: 'alk', description: 'alsfa;sdf'},
        {id:8, title: 'alk', description: 'alsfa;sdf'},
        {id:9, title: 'alk', description: 'alsfa;sdf'}
    ]
    return (
        <Container className="mt-3">
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={device.img}/>
            </Col>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2>{device.name}</h2>
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{background: `url(${bigCrosshair}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize:64}}
                    >
                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}

                >
                    <h3>{device.price} руб.</h3>
                    <Button variant={"outline-dark"}>Добавить в корзину</Button>
                </Card>
            </Col>
                </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info , index)=>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}:{info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;