import React from 'react'
import Base from '../../base'
import HostelImg from '../../../../assets/images/hostel.gif'

const Hostel = () => {
  return (
    <Base title="Hostel">
          <div className="row main-container">
            <div className='col-12 col-md-5 px-sm-4 my-5'>
            <img src={HostelImg} width={"450px"} height={"380px"} style={{marginTop: "45px"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='mt-5 fs-6 lh-base'>
                    <p className='h3 fs-5 lh-base fst-italic text-center'>Home is where the heart is...</p>
                    The Institute provides excellent hostel facility within the campus for girl students who wish to avail the campus residential facility. The twin sharing fully air-conditioned Girls hostel within the campus offers a secure home to its female students with an independent life style, while ensuring privacy with a congenial atmosphere. The hostel is augmented with proper food facilities, common T.V. room, other indoor games and adequate medical aid. All rooms are double occupancy rooms, along with an attached bathroom. Each hosteller is provided with a separate almirah in her room. Recreational facilities such as common rooms with necessary facilities are also available. Round the clock electricity is ensured, along with proper facility of generator backup in case of power failures. The Hostel is well equipped with mess, canteen, indoor / outdoor recreational facilities. The hostel compound is equipped with two extremely beautiful and well-maintained lawns. Full security arrangements are also ensured with security guards on duty round the clock. For boys, PG facilities are available near the campus.
                </p>
            </div>
            <div className='col-12'>
                <h4  style={{marginTop: "-20px"}}>Safety and Security Aspects</h4>
                <p className='mt-1 fs-6 lh-base'>
                    Safety and security are prime areas of hostel activities.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    <b>Safety:</b> Handling and safety of the students in critical situation is necessary, like adequate provision of the firefighting equipment is made on each floor of the hostel complex.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    <b>Security:</b>
                    <ul>
                        <li className='fs-6 lh-base'>Provides adequate security arrangements with guards on duty.</li>
                        <li className='fs-6 lh-base'>Provides adequate locking arrangement for the room during day as well as in the night, ensuring safety of students.</li>
                        <li className='fs-6 lh-base'>Movements of students during night are observed to back up trust and faith entrusted.</li>
                    </ul>
                </p>
            </div>
          </div>
        </Base>
  )
}

export default Hostel