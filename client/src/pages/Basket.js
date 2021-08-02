import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasketDeviceList from "../components/BasketDeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchDeviceFromBasket, fetchDevices} from "../http/deviceAPI";
import {useParams} from 'react-router-dom'


const Basket = observer(() => {
     
    const {device} = useContext(Context);
    const {id} = useParams()

    useEffect(() => {
        fetchDeviceFromBasket(id).then(data => device.setDevicesInBassket(data))
    },[])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                
                </Col>
                <Col md={9}>
                    <BasketDeviceList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Basket;
