import React from 'react';
import { Container } from 'react-bootstrap';
import about from '../assist/imgs/about.jpg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DoneIcon from '@mui/icons-material/Done';

const About = () => {
    let color = "rgb(18, 143, 202)";
    let arr = [
        'Lorem ipsum dolor',
        'Tempor incididunt',
        'Lorem ipsum dolor',
        'Incididunt ut labore'
    ];
    let arr2 = [
        'Aliquip ex ea commodo',
        'Lorem ipsum dolor',
        'Exercitation ullamco',
        'Lorem ipsum dol'
    ];

    return (
        <div className="container-fluid mb-5 About"
        id='ABOUT'>
            <Container className='m-5 d-flex flex-wrap align-items-center'>
                <div className='col-md-6 mb-4'>
                    <img style={{ maxHeight: '100%', width: '100%', objectFit: 'cover' }} src={about} alt="" />
                </div>
                <div className='col-md-6 mb-4'>
                    <div className='px-3'>
                        <h2 className='futur_head font-weight-bold'>ABOUT US</h2>
                        <div style={{ borderBottom: `3px solid ${color}`, width: '60px', margin: '1px' }}></div>
                        <div className='mt-4'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis<br />
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-weight-bold' style={{ fontFamily: 'serif' }}>Why Choose Us?</h3>
                        <div className='d-flex flex-wrap'>
                            <div className='w-100 mb-3'>
                                <List sx={{ width: '100%', bgcolor: 'background.paper' }} aria-label="contacts">
                                    {arr.map((item, index) => (
                                        <ListItem key={index} disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <DoneIcon style={{ color: 'green' }} />
                                                </ListItemIcon>
                                                <ListItemText primary={item} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                            <div className='w-100 mb-3'>
                                <List sx={{ width: '100%', bgcolor: 'background.paper' }} aria-label="contacts">
                                    {arr2.map((item, index) => (
                                        <ListItem key={index} disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <DoneIcon style={{ color: 'green' }} />
                                                </ListItemIcon>
                                                <ListItemText primary={item} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;
