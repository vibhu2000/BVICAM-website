import React from 'react'
import Base from '../../base'
import Lib from '../../../../assets/images/library.jpg'

const Library = () => {
  return (
    <Base title="Learning Resource Center">
          <div className="row main-container">
            <div className='col-12 col-md-5 px-sm-4 my-3'>
            <img src={Lib} width={"450px"} height={"320px"} style={{marginTop: "40px"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='h3 mt-5 fs-5 lh-base text-center'>
                    <br/><br/><br/>
                    <b>“I have always imagined that Paradise will be a kind of library”</b><br/>
                </p>
                <p className='h3 fs-5 lh-base text-end'>
                - Jorge Luis Borges
                </p>
            </div>
            
            <div className='col-12'>
                <p className='mt-4 fs-6 lh-base'>
                    BVICAM campus houses a separate, centrally air-conditioned, fully computerized Library block. The Library is a knowledge repository that maintains a wide variety of resource materials including:
                </p>
                <ol>
                    <li className='mt-1 fs-6 lh-base'>General books</li>
                    <li className='mt-1 fs-6 lh-base'>Text books</li>
                    <li className='mt-1 fs-6 lh-base'>Reference books</li>
                    <li className='mt-1 fs-6 lh-base'>Book Bank facility</li>
                    <li className='mt-1 fs-6 lh-base'>Indian / Foreign Periodicals / Journals / Magazines</li>
                    <li className='mt-1 fs-6 lh-base'>Audio-Visual Facilities</li>
                    <li className='mt-1 fs-6 lh-base'>Collection of good Project Reports and Surveys</li>
                    <li className='mt-1 fs-6 lh-base'>E-Journals</li>
                    <li className='mt-1 fs-6 lh-base'>Video CDs</li>
                    <li className='mt-1 fs-6 lh-base'>Membership of other Libraries</li>
                    <li className='mt-1 fs-6 lh-base'>Newspapers</li>
                    <li className='mt-1 fs-6 lh-base'>Archives</li>
                </ol>
                <p className='mt-4 fs-6 lh-base'>
                    The library has a seating capacity of 150 readers and is the central hub for all academic and research activities of the Institute. The Library is also subscribed to international online databases like IEEE, SpringerLink and DELNET. There are over 1000 titles (reference + text books) and over 8,000 books in all. Five Books are issued to the students for a period of 15 days. Books like Encyclopaedias, Manuals, Handbooks, etc. have also been maintained separately for reference purposes. Every semester, all students are issued one set of textbooks each as part of the Book Bank Facility. The library also subscribes to 70 national & international journals/periodicals related to Computers, Information Technology, Business Studies and General Information. 
                </p>
            </div>
          </div>
        </Base>
  )
}

export default Library