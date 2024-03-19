import React from 'react'
import { Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Row 
    d-flex justify-content-center  text-center
    p-5
    style={{backgroundColor: "white", color: "black",
width: "100%",
height: "auto",
  bottom: "0"}} 
    >
        <p className='text-center p-5'>© 2024 mhd_sulu_786 React Land Page Template. Design by <a href="https://www.instagram.com/mhd_sulu_786/" rel="nofollow">mhdsulu786</a></p>

    </Row>
  )
}

export default Footer