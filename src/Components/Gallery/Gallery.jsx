import React from 'react';
import { Container } from 'react-bootstrap';
import IMG_1 from '../assist/imgs/01-small.jpg';
import IMG_2 from '../assist/imgs/02-small.jpg';
import IMG_3 from '../assist/imgs/03-small.jpg';
import IMG_4 from '../assist/imgs/04-small.jpg';
import IMG_5 from '../assist/imgs/05-small.jpg';
import IMG_7 from '../assist/imgs/07-small.jpg';
import IMG_8 from '../assist/imgs/08-small.jpg';
import IMG_9 from '../assist/imgs/09-small.jpg';
import IMG_6 from '../assist/imgs/06-small.jpg';

const Gallery = () => {
    let color = 'rgb(18, 143, 202)';
    return (
        <div className='container-fluid text-center mt-4 Gallery'>
            <Container style={{ padding: '100px 0' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 className='futur_head font-weight-bold'>GALLERY</h2>
                    <div style={{ borderBottom: `3px solid ${color}`, width: '60px', margin: 'auto' }}></div>
                    <span className='pt-4 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse officiis maxime commodi quaerat adipisci hic atque!</span>
                </div>
                <Container className='gallery p-5 mt-4'>
                    <div className='row'>
                        <div className='col-md-4 mb-4'>
                            <img src={IMG_1} alt='' className='img-fluid' />
                            <p className='text-white hover-text'>Project Title</p>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <img src={IMG_2} alt='' className='img-fluid' />
                            <p className='text-white hover-text'>Project Title</p>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <img src={IMG_3} alt='' className='img-fluid' />
                            <p className='text-white hover-text'>Project Title</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 mb-4'>
                            <img src={IMG_4} alt='' className='img-fluid' />
                            <p className='text-white hover-text'>Project Title</p>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <img src={IMG_5} alt='' className='img-fluid' />
                            <p className='text-white hover-text'>Project Title</p>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <img src={IMG_6} alt='' className='img-fluid' />
                            <p className='text-white hover-text'>Project Title</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 mb-4'>
                            <img src={IMG_7} alt='' className='img-fluid' />
                            <p className='text-white hover-text'>Project Title</p>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <img src={IMG_8} alt='' className='img-fluid' />
                            <p className='text-white hover-text'>Project Title</p>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <img src={IMG_9} alt='' className='img-fluid' />
                            <p className='text-white hover-text'>Project Title</p>
                        </div>
                    </div>
                </Container>
            </Container>
        </div>
    );
};

export default Gallery;
