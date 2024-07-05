import React from 'react'
import Base from '../../base'
import Campus from '../../../../assets/images/bvicam.jpg'

const Aboutus = () => {
  return (
    <Base title="About Bharati Vidyapeeth, Pune">
          <div className="row main-container">
            <div className='col-12 col-md-5 px-sm-4 my-5'>
            <img src={Campus} width={"500px"} height={"380px"} style={{marginTop: "40px"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='mt-5 fs-6 lh-base'>
                    Bharati Vidyapeeth, the parent body of Bharati Vidyapeeth's Institute of Computer Applications and Management (BVICAM), New Delhi, is one of the largest networks of educational institutions in the country. It was established by Dr. Patangrao Kadam on 10th May, 1964, when he was only 19 years old, with a small coaching Institute to train weaker students from remote villages in Maharashtra, in the subjects like Mathematics and English. Dr. Patangrao Kadam came from a farmer's family in remote village; Sangli, with no educational background. He was the first matriculate from his village. Under his visionary and dynamic leadership, Bharati Vidyapeeth expanded so rapidly that it now has more than 150 educational institutions of various kinds. Its major Campuses are located in New Delhi, Navi Mumbai, Pune, Kolhapur, Sangli, Solapur, Jawhar and few other places. Our beautiful campuses in New Delhi, Navi Mumbai and Pune are jewels in the crown of Bharati Vidyapeeth, hence need a special mention. It is gratifying to note that more than half a million students are enrolled in our Institutions. The number of teachers and professionals working in our Institution exceeds twenty thousands.
                </p>
            </div>
            <div className='col-12'>
                <p className='fs-6 lh-base' style={{marginTop: "-15px"}}>
                    Bharati Vidyapeeth runs primary and secondary schools. It conducts colleges and institutions of liberal and professional education. Among them are Arts, Science and Commerce colleges, as well as colleges of Medicine, Dentistry, Ayurved, Homoeopathy, Nursing, Engineering, Architecture, Pharmacy, Management Education, Computer Science and IT, Hotel Management and Catering Technology, Law, Social Work, etc. In brief, Bharati Vidyapeeth has institutions in almost all the fields of knowledge.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    Bharati Vidyapeeth has six research institutes in which research work is being carried out in such diversified areas as Stem Cell, Animal and Plant Tissue Culture, Applied Chemistry, Pharmaceutical Sciences, Environment related issues, social sciences and humanities etc. All these colleges are well reputed for the infrastructural facilities and academic excellence they have achieved. Bharati Vidyapeeth is an educational institution with a difference. Social consciousness and social commitment of Dr. Kadam are reflected in the institutions which he has started and also in their activities. Among the other institutions of Bharati Vidyapeeth, which need a special mention, are a public school situated in the picturesque natural environment of Panchgani, the queen of hill stations in Maharashtra and two renowned English medium schools in Pune and Navi Mumbai.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    The success story of Bharati Vidyapeeth is unique, having very few parallels. Its moment of glory came when the Government of India, in appreciation of the academic excellence of these institutions, bestowed the status of “Deemed to be University” initially on a cluster of 12 institutions of Bharati Vidyapeeth on 26th April, 1996 vide their notification No. F.9-15/95-U.3. In the last seventeen years, Bharati Vidyapeeth Deemed University (BVDU), Pune, has emerged as a global university with a wide offering of programs and courses spanning varied educational faculties. BVDU today boasts of a state-of-the-art infrastructure, sprawling campuses, extensive teaching and learning facilities, library and research facilities. Today, Bharati Vidyapeeth Deemed University, Pune, has 32 constituent units and is one of India's largest multi-disciplinary multi-campus universities. Over the years BVDU has contributed thousands of well trained graduates, post graduates and research doctorates to the pool of professionals in India and abroad. In line with its Motto of “Social transformation through dynamic education” BVDU nurtures a holistic education approach that not only academically enriches the students, but also contributes to the students’ personality by nurturing innovation, creativity and practical work experience.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    The University is also a member of Association of Indian Universities (AIU), New Delhi and the Association of Commonwealth Universities. It is really credible for this nascent University to have received ‘A’ Grade from the National Assessment and Accreditation Council (NAAC). Some of the constituent units of the University have also been accredited with ‘A’ Grade by the National Board of Accreditation. All the technical/professional colleges have been recognized by the concerned apex bodies in India, like Medical Council of India, Dental Council of India, Central Council of Indian Medicine, All India Council for Technical Education (AICTE), Pharmacy Council of India, and Bar Council of India, etc. Hence the degrees given in these colleges of Bharati Vidyapeeth Deemed University, Pune, are fully recognized in India and abroad. The degrees, diplomas and certificates awarded have the same legal status as that of any other statutory Universities in India.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    For more information, please visit www.bharatividyapeeth.edu.
                </p>
            </div>
          </div>
        </Base>
  )
}

export default Aboutus