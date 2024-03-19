import React from 'react';
import { Container} from 'react-bootstrap';
import Photo_1 from '../assist/imgs/01.jpg';
import Photo_2 from '../assist/imgs/02.jpg';
import Photo_3 from '../assist/imgs/03.jpg';
import Photo_4 from '../assist/imgs/04.jpg';

const Team = () => {
    return (
        <div className="container-fluid Team " style={{ padding: '100px 0' }}>
            <Container style={{ marginTop: '70px' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 className='futur_head font-weight-bold'>MEET THE TEAM</h2>
                    <div style={{ borderBottom: '4px solid rgb(18, 143, 202)', width: '50px', margin: 'auto' }}></div>
                    <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                </div>
                <div className="d-flex flex-wrap justify-content-center mt-5">
                    <div className="col-md-3 mb-4">
                        <img src={Photo_1} alt="Jone ku" />
                        <h5 style={{ fontWeight: 'bold' }}>Jone ku</h5>
                        <span>Director</span>
                    </div>
                    <div className="col-md-3 mb-4">
                        <img src={Photo_2} alt="Mike Doe" />
                        <h5 style={{ fontWeight: 'bold' }}>Mike Doe</h5>
                        <span>Sinore Desingner</span>
                    </div>
                    <div className="col-md-3 mb-4">
                        <img src={Photo_3} alt="Shajkhana" />
                        <h5 style={{ fontWeight: 'bold' }}>Shajkhana</h5>
                        <span>Sinore Desingner</span>
                    </div>
                    <div className="col-md-3 mb-4">
                        <img src={Photo_4} alt="kareena jas" />
                        <h5 style={{ fontWeight: 'bold' }}>kareena jas</h5>
                        <span>Project Manger</span>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Team;
