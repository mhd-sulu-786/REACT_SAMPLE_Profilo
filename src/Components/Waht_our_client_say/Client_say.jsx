import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import client_1 from '../assist/imgs/01 (1).jpg';
import client_2 from '../assist/imgs/02 (1).jpg';
import client_3 from '../assist/imgs/03 (1).jpg';
import client_4 from '../assist/imgs/04 (1).jpg';
import client_5 from '../assist/imgs/05.jpg';
import client_6 from '../assist/imgs/06.jpg';

const Client_say = () => {
    let color = "rgb(18, 143, 202)";
    let clients = [
        {
            id: '1',
            img: client_1,
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."
        },
        {
            id: '2',
            img: client_2,
            name: "villam mer",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."
        },
        {
            id: '3',
            img: client_3,
            name: "kuleths",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."
        }
    ];
    let clients_2 = [
        {
            id: '4',
            img: client_4,
            name: "Jonson ken",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."
        },
        {
            id: '5',
            img: client_5,
            name: "cristefer",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."
        },
        {
            id: '6',
            img: client_6,
            name: "Lucifer",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."
        }
    ];

    return (
        <div className="container-fluid client_say">
            <Container>
                <div style={{ textAlign: 'center' }}>
                    <h2 className='futur_head font-weight-bold'>WHAT OUR CLIENTS SAY</h2>
                    <div style={{ borderBottom: `4px solid ${color}`, width: '60px', margin: 'auto' }}></div>
                </div>
                <div className='mt-5'>
                    <Row>
                        {clients.map((item) => (
                            <Col key={item.id} md={4} className='d-flex p-3'>
                                <div className="img" style={{ borderRadius: '50%' }}>
                                    <img src={item.img} alt={item.name} style={{ borderRadius: '50%' }} />
                                </div>
                                <div className="text">
                                    <p className='text px-2' style={{ textAlign: 'left', fontStyle: 'italic' }}>"{item.text}"</p>
                                    <h6 className='pt-2' style={{ textAlign: 'left', fontWeight: 'bold', marginTop: '-10px' }}>{item.name}</h6>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        {clients_2.map((item) => (
                            <Col key={item.id} md={4} className='d-flex p-3'>
                                <div className="img" style={{ borderRadius: '50%' }}>
                                    <img src={item.img} alt={item.name} style={{ borderRadius: '50%' }} />
                                </div>
                                <div className="text">
                                    <p className='text px-2' style={{ textAlign: 'left', fontStyle: 'italic' }}>"{item.text}"</p>
                                    <h6 className='pt-2' style={{ textAlign: 'left', fontWeight: 'bold', marginTop: '-10px' }}>{item.name}</h6>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Client_say;
