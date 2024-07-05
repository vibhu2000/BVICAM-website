import React from 'react'
import Base from '../../base'
import Bvicam from '../../../../assets/images/bvicam.jpg'

const Campus = () => {
  return (
    <Base title="Campus">
          <div className="row main-container">
            <div className='col-12 col-md-6 px-sm-4 my-5'>
            <img src={Bvicam} width={"500px"} height={"350px"} style={{marginTop: "40px"}}/>
            </div>
            <div className='col-12 col-md-6 my-5'>
                <p className='fs-6 lh-base' style={{marginTop: "80px"}}>
                    BVICAM is <b>centrally located</b> at National Highway No. 10, Rohtak Road, A-4, Paschim Vihar (just adjacent to Paschim Vihar (East) Metro Station), New Delhi, in its own state of the art sprawling campus. It is well poised with spacious parking areas with an excellent surrounding striving for a <b>pollution free</b> and <b>healthy environment</b>.
                    <br/><br/><br/>
                    The campus incorporates amenities like Conference Hall, Auditorium, Amphitheatre, ultra modern Computer Centre, well stocked Library, Students' Hostel, In-house Banking facility, Indoor and Outdoor games facility, aesthetically designed Canteen in an open-air ambience, etc.
                </p>
            </div>
          </div>
        </Base>
  )
}

export default Campus