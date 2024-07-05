import React from 'react';
import Base from "../../base";

const VirtualTour = () => {
  return (
    <Base title="Virtual Campus Tour">
    <div className='row main-container'>
        <div className='my-5 text-center'>
        <iframe width="900" height="500" src="https://www.youtube.com/embed/Dk7Xx5f9IBg?si=cbgFWg3yTFUSYNUz" title="YouTube video player" allowfullscreen autoplay></iframe>    
        </div>
    </div>
</Base>
  )
}

export default VirtualTour