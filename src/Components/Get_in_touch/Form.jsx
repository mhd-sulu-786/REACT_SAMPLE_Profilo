import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Room, Phone, Email } from '@mui/icons-material';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Form = () => {
    let color = 'rgb(38, 43, 202)';

    return (
        <div className="container-fluid Form" style={{ paddingTop: '100px', paddingBottom: '100px', background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)' }}>
            <Container>
                <div style={{ textAlign: 'left' }}>
                    <h2 className='futur_head font-weight-bold'>GET IN TOUCH</h2>
                    <div style={{ borderBottom: `3px solid ${color}`, width: '60px', margin: '1px' }}></div>
                    <span className='pt-4 mb-2'>Please fill out the form below to send us an email and we will get back to you as soon as possible.</span>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 px-3">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <Button variant="outlined"
                                type="submit"
                                sx={{
                                    borderColor: 'white',
                                    color: 'white',
                                    borderRadius: '10px',
                                    outlineWidth: '2px',
                                    '&:hover': {
                                        backgroundColor: 'rgb(18, 143, 202)',
                                        color: 'white',
                                    },
                                }}
                            > Send Message</Button>
                        </form>
                    </div>
                    <Col md={6} className='px-5 pt-5'>
                        <h4>Contact info</h4>
                        <h5>Address</h5>
                        <span><Room /> 4321 California St, San Francisco, CA 12345</span>
                        <h5>Phone</h5>
                        <span><Phone /> +1 123 456 1234</span>
                        <h5>Email</h5>
                        <span><Email /> info@company.com</span>
                    </Col>
                </div>
                <Row
                    style={{ paddingTop: "50px" }}>
                    <div className="d-flex justify-content-center  "
                        style={{
                            backgroundColor: "",
                            padding: "70px", paddingTop: "20px", paddingBottom: "0px",
                            borderTop: "1px solid #96a4a8"
                        }}
                        w={50}
                    >
                        <div className="p-3 mx-3" style={{
                            backgroundColor: "",
                            border: "1px solid white", textAlign: "center",
                            borderRadius: '50%'
                        }}
                        ><FacebookOutlinedIcon /></div>
                        <div className="p-3 mx-3" style={{
                            backgroundColor: "",
                            border: "1px solid white", textAlign: "center",
                            borderRadius: '50%'
                        }}
                        ><GitHubIcon /></div>
                        <div
                            className="p-3" style={{
                                backgroundColor: "",
                                border: "1px solid white mx-3", textAlign: "center",
                                borderRadius: '50%'
                            }}
                        ><YouTubeIcon /></div>
                    </div>
                </Row>
            
            </Container>
        </div>
    )
}

export default Form;
