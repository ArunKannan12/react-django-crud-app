import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide01 from './slide01.jpg'
import slide02 from './slide02.jpg'
import slide03 from './slide03.jpg'
const Home = () => {
    
  return (

    <div className="row">

    
        <Carousel variant='dark'>
          <Carousel.Item>
            
            <img src={slide01} alt="" style={{height:'600px',marginTop:'10px'}} />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={slide02} alt="" style={{height:'600px',marginTop:'10px'}}/>
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={slide03} alt="" style={{height:'600px',marginTop:'10px'}}/>
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
  )
    }
    
    
  


export default Home