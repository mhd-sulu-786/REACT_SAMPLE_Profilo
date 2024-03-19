import React from 'react';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import FlightIcon from '@mui/icons-material/Flight';
import PieChartIcon from '@mui/icons-material/PieChart';
import { Container, Row, Col } from 'react-bootstrap';

const Service = () => {
    let color = '#5ca9fb';
    return (
        <div className='service container-fluid text-white'>
            <Container>
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <h2 className='futur_head font-weight-bold'>OUR SERVICES</h2>
                        <div style={{ borderBottom: `4px solid ${color}`, width: '80px', margin: 'auto' }}></div>
                        <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis soluta consequuntur velit.</p>
                    </div>
                </div>
                <Row className='justify-content-center'>
                    <Col md={4} className='text-center p-5'>
                        <div className='futur_img p-5 m-auto d-flex align-items-center justify-content-center' style={{ background: `linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)`, borderRadius: '50%', width: '100px', height: '100px' }}>
                            <VpnLockIcon sx={{ fontSize: '60px', color: 'white' }} />
                        </div>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste molestias fugiat facilis quas reiciendis porro, delectus</p>
                    </Col>
                    <Col md={4} className='text-center p-5'>
                        <div className='futur_img p-5 m-auto d-flex align-items-center justify-content-center' style={{ background: `linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)`, borderRadius: '50%', width: '100px', height: '100px' }}>
                            <AddShoppingCartIcon sx={{ fontSize: '60px', color: 'white' }} />
                        </div>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste molestias fugiat facilis quas reiciendis porro, delectus</p>
                    </Col>
                    <Col md={4} className='text-center p-5'>
                        <div className='futur_img p-5 m-auto d-flex align-items-center justify-content-center' style={{ background: `linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)`, borderRadius: '50%', width: '100px', height: '100px' }}>
                            <CloudDownloadIcon sx={{ fontSize: '60px', color: 'white' }} />
                        </div>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste molestias fugiat facilis quas reiciendis porro, delectus</p>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col md={4} className='text-center p-5'>
                        <div className='futur_img p-5 m-auto d-flex align-items-center justify-content-center' style={{ background: `linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)`, borderRadius: '50%', width: '100px', height: '100px' }}>
                            <GTranslateIcon sx={{ fontSize: '60px', color: 'white' }} />
                        </div>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste molestias fugiat facilis quas reiciendis porro, delectus</p>
                    </Col>
                    <Col md={4} className='text-center p-5'>
                        <div className='futur_img p-5 m-auto d-flex align-items-center justify-content-center' style={{ background: `linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)`, borderRadius: '50%', width: '100px', height: '100px' }}>
                            <FlightIcon sx={{ fontSize: '60px', color: 'white' }} />
                        </div>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste molestias fugiat facilis quas reiciendis porro, delectus</p>
                    </Col>
                    <Col md={4} className='text-center p-5'>
                        <div className='futur_img p-5 m-auto d-flex align-items-center justify-content-center' style={{ background: `linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)`, borderRadius: '50%', width: '100px', height: '100px' }}>
                            <PieChartIcon sx={{ fontSize: '60px', color: 'white' }} />
                        </div>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste molestias fugiat facilis quas reiciendis porro, delectus</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Service;
