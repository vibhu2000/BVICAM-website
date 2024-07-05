import React from 'react'
import Base from '../../base'
import Doc from '../../../../assets/documents/Approval of centre for research at BVICAM.pdf'

const Criis = () => {
  return (
    <Base title="CRIIS">
        <div className='row main-container'>
            <div className='my-5'>
                <p className='fs-5 lh-base text-center text-decoration-underline'>
                    <b>CRIIS: Centre for Research and Innovation in Interdisciplinary Studies</b>
               </p> 
                <p className='mt-4 fs-6 lh-base'>
                    The Institute of Computer Applications and Management (BVICAM) at Bharati Vidyapeeth in New Delhi is a storehouse of opportunities and abundant with challenges. Opportunities that distinguish you in a crowded world and challenges that bring out your greatest qualities. Examining the problems that researchers and people face led to the realisation that the quality of our work is negatively impacted by the fact that we are restricting our research to a single field with no room for afterthoughts. Can we imagine medical equipment without engineering? Medical equipment primarily depends on technological breakthroughs to give accurate diagnosis and enhance patient outcomes. Engineering, physics, computer science, and material science are a few of the fields that are involved in the application of sophisticated technology in medical equipment. Wearable health monitoring technology requires expertise in engineering, computer science, and medicine.  In the modern world, interdisciplinary collaboration is becoming more and more necessary since complicated problems frequently call for a variety of various viewpoints and specialties to be applied to them. Platforms and tools that facilitate this collaboration can speed up scientific progress and increase access to and diversity in research. BVICAM, New Delhi has established the Centre for Research and Innovation in Interdisciplinary Studies (CRIIS) in response to this. The centre was approved by Atal Incubation and Innovation Centre (AI2C), GGS Indraprastha University, New Delhi, dated 20th March, 2023. The approved proposal was also presented to Hon’ble. Lt. Governor of Government of NCT of Delhi, Shri Vinai Kumar Saxena in the presence of  Chief Secretary of NCT of Delhi, Shri Naresh Kumar and Principal Secretary (Home) of NCT of Delhi, Shri Ashwani Kumar, on 28th March, 2023. The establishment of a CRIIS might be a worthwhile effort to encourage cooperation and innovation among many academic disciplines. The goal of such a centre would be to establish a meeting place for scholars from many fields to work together on projects and generate fresh concepts. The establishment of a CRIIS would be a worthwhile effort to encourage cooperation and innovation among many academic disciplines. The goal of such a centre would be to establish a meeting place for scholars from many fields to work together on projects and generate fresh concepts. Under this Centre first start-up project entitled “Fake News Detecting using Soft Computing” was also approved by GGS Indraprastha University, New Delhi.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    <b>file:</b><br/>
                    <ul>
                        <li><a href={Doc} target="_blank" rel="noreferrer">Approval of centre for research at BVICAM.pdf</a></li>
                    </ul>
                </p>
            </div>
        </div>
    </Base>
  )
}

export default Criis