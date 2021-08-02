import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png';

const BasketItem = ({dev}) => {

    return (
            <Col md={5} className={"mt-3"}>
                <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                    <Image width={150} height={150} src={process.env.REACT_APP_API_URL + dev.img}/>
                    <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                        <div>Samsung...</div>
                        <div className="d-flex align-items-center">
                            <div>{dev.rating}</div>
                            <Image width={18} height={18} src={star}/>
                        </div>
                    </div>
                    <div>{dev.deviceId}</div>
                </Card>
            </Col>
    );
    
}

export default BasketItem;