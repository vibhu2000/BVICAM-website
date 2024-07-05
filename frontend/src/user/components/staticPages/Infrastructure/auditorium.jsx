import React from 'react'
import Base from '../../base'
import Audi from '../../../../assets/images/audi.jpg'

const Auditorium = () => {
  return (
    <Base title="The Auditorium">
          <div className="row main-container">
            <div className='col-12 col-md-5 px-sm-4 my-5'>
            <img src={Audi} width={"480px"} height={"280px"} style={{marginTop: "30px"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='mt-5 fs-6 lh-base'>
                    The college provides state-of-the art conference facilities to host activities like Conferences, Seminars, Guest Lectures, etc. The fully air-conditioned auditorium is equipped with latest acoustics and a warm ambience. It is a perfect venue for different events of the college. From teleconferencing, data projection and electronic whiteboards, the auditorium has all required facilities for conducting and managing events.
                    <br/><br/>
                    With a capacity of over 400 students at a time, the auditorium is the centre of all major inter and intra-college events@BVICAM. It acts as host to informational & technical seminars, cultural events, quiz shows, and guest lectures.
                </p>
            </div>
          </div>
        </Base>
  )
}

export default Auditorium