import React from 'react';
import { Container } from 'react-bootstrap';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import 'react-bootstrap';

const Futur = () => {
    let color = "rgb(18, 143, 202)";
    return (
        <div className='container-fluid text-center text-dark p-5 '>
            <div style={{ textAlign: 'center' }}>
                <h2 className='futur_head font-weight-bold'>FEATURES</h2>
                <div style={{ borderBottom: `3px solid ${color}`, width: '60px', margin: 'auto' }}></div>
            </div>

            <Container className='d-flex flex-wrap justify-content-center mt-5'>
                <div className='col-md-3 mb-4'>
                    <div className='futur_img w-50 h-50 rounded-circle m-auto d-flex align-items-center justify-content-center'
                        style={{ background: `linear-gradient(to right,rgb(18, 143, 202) 0%, rgb(58, 101, 180)  51%,  rgb(39, 39, 155) 100%)` }}>
                        <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: '50px', color: 'white' }} />
                    </div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste molestias fugiat facilis quas reiciendis porro, delectus </p>
                </div>
                <div className='col-md-3 mb-4'>
                    <div className='futur_img w-50 h-50 rounded-circle m-auto d-flex align-items-center justify-content-center'
                        style={{ background: `linear-gradient(to right,rgb(18, 143, 202) 0%, rgb(58, 101, 180)  51%,  rgb(39, 39, 155) 100%)` }}>
                        <CircleNotificationsOutlinedIcon sx={{ fontSize: '50px', color: 'white' }} />
                    </div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste molestias fugiat facilis quas reiciendis porro, delectus</p>
                </div>
                <div className='col-md-3 mb-4'>
                    <div className='futur_img w-50 h-50 rounded-circle m-auto d-flex align-items-center justify-content-center'
                        style={{ background: `linear-gradient(to right,rgb(18, 143, 202) 0%, rgb(58, 101, 180)  51%,  rgb(39, 39, 155) 100%)` }}>
                        <PeopleOutlinedIcon sx={{ fontSize: '50px', color: 'white' }} />
                    </div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste molestias fugiat facilis quas reiciendis porro, delectus</p>
                </div>
                <div className='col-md-3 mb-4'>
                    <div className='futur_img w-50 h-50 rounded-circle m-auto d-flex align-items-center justify-content-center'
                        style={{ background: `linear-gradient(to right,rgb(18, 143, 202) 0%, rgb(58, 101, 180)  51%,  rgb(39, 39, 155) 100%)` }}>
                        <AutoFixHighOutlinedIcon sx={{ fontSize: '50px', color: 'white' }} />
                    </div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste molestias fugiat facilis quas reiciendis porro, delectus</p>
                </div>
            </Container>

        </div>
    );
};

export default Futur;
