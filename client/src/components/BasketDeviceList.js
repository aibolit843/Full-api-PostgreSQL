import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import  BasketItem from "./BasketItem";

const BasketDeviceList = observer(() => {

    const {device} = useContext(Context);
    
    return (
        <Row className="d-flex">
            {device.devicesInBasket.map(device => 
                <BasketItem key={device.id} dev={device}/>  
            )}
        </Row>
    );
    
})

export default BasketDeviceList;