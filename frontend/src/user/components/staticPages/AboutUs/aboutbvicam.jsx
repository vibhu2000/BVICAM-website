import React from 'react'
import Base from '../../base'
import Campus from '../../../../assets/images/campus.jpg'

const Aboutbvicam = () => {
  return (
    <Base title="About BVICAM">
          <div className="row main-container">
            <div className='col-12 col-md-5 px-sm-5 my-5'>
            <img src={Campus} width={"450px"} height={"260px"} style={{marginTop: "40px"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='mt-5 fs-6 lh-base'>
                    Bharati Vidyapeeth's Institute of Computers Applications and Management (BVICAM), New Delhi, is one of the 187 institutions under Bharati Vidyapeeth, Pune. With a clear vision and mission to serve the cause of higher education in India, the Institute started conducting Master of Computer Applications (MCA) programme with effect from the Academic year 2002-2003. The Institute is affiliated to Guru Gobind Singh Indraprastha University (GGSIPU), Sector 16C Dwarka, New Delhi-78. The Institute is also approved by the All India Council for Technical Education (AICTE), Ministry of HRD, Government. of India, New Delhi. BVICAM, New Delhi, is the first choice of students and parents for MCA admission, in Northern India and many of the Top Rankers from the CET of GGSIP University join BVICAM.
                </p>
            </div>
            <div className='col-12'>
                <p className='fs-6 lh-base' style={{marginTop: "-20px"}}>
                    BVICAM is centrally located at A-4, Paschim Vihar, adjacent to Paschim Vihar (East) DMRC Metro Station, National Highway No. 10, Rohtak Road, New Delhi, in its own state of the art sprawling campus. It is well poised with spacious parking areas with an excellent surrounding pollution free and healthy environment. The campus incorporates amenities like Conference Hall, Auditorium, Amphitheatre, modern Computer Resource Centre, well stocked Library, Student's Hostel, Guest House, In-house Banking facility, Indoor and Outdoor games facility, aesthetically designed Canteen in an open-air ambience, etc.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    With its excellent Infrastructural and Instructional facilities for the students, BVICAM provides personalized attention to each student through its unique Student Teacher Wardship programme, having a teacher mentor for every student to monitor and facilitate his/her all round personality development. The Institute possesses an ultra modern "Computer Resource Centre" with excellent interiors housing 175 computers systems equipped with the latest and relevant hardware and software, as required for the course curriculum from time to time. To help students make efficient use of above resources; the laboratories are kept open for minimum 10 hours daily. The library houses a vast collection of General Books, Text Books, Indian/Foreign Periodicals/Journals/Magazines along with leading e-journals. Book Bank facility is also made available to students. The library has more than 1000 titles and 8000 Volumes in all.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    The twin sharing Girls' hostel, within the campus, offers a secure home to its female students with an independent life style, while ensuring privacy with a congenial atmosphere. The hostel is augmented with proper food facilities, common T.V. room, other indoor games and adequate medical aid.
                </p>
            </div>
          </div>
        </Base>
  )
}

export default Aboutbvicam