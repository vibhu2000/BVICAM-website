import React from 'react'
import Base from '../../base'

const PlacementHistory = () => {
  return (
    <Base title="Placement History">
        <div className='row main-container'>
            <div className='my-5'>
                <p className='fs-6 lh-base'>
                    BVICAM has over the years built a strong and cordial rapport with several IT companies. We also have been getting overwhelming responses from these IT companies where our alumni had been placed. This acted has a catalyst in the growth of job placements on our institution. Our students have secured a continuing tenure-track job within 8 years. And consequently more and more IT companies have been visiting our institute for “On campus recruitment”. This has apparently earned us another feather in the cap. The list below highlights the placement record for the past ten years, by year of post graduation.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    Our top recruiting companies include IT majors like <b>TCS, Acicent, Nagarro, Indus Valley Parteners, Thorogood, ThoughtWorks, Intelligrape, Reval</b> and many more-
                </p>

                <p className='mt-4 fs-6 lh-base text-center'>
                    <b>Total no. of students placed by the Institution through its Placement Cell, since the last ten years</b>
                </p>

                <table className='table table-bordered text-center'>
                    <thead>
                        <tr style={{backgroundColor: "#A1CEFF",textAlign: "center",fontSize:"1rem"}}>
                            <th>Batch Passing out in the Year</th>
                            <th>Discipline</th>
                            <th>Total no. of Students Passed out</th>
                            <th>Total no. of Students Placed Through Placement Cell</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2019</td>
                            <td>MCA</td>
                            <td>123 (Batch passing out in Jun-2019)<br/>(Students registered for Placements: 110)</td>
                            <td>93</td>
                        </tr>

                        <tr>
                            <td>2018</td>
                            <td>MCA</td>
                            <td>110 (Batch passing out in Jun-2018)<br/>(Students registered for Placements: 107)</td>
                            <td>98</td>
                        </tr>

                        <tr>
                            <td>2017</td>
                            <td>MCA</td>
                            <td>118 (Batch passing out in Jun-2017)<br/>(Students registered for Placements: 103)</td>
                            <td>99</td>
                        </tr>

                        <tr>
                            <td>2016</td>
                            <td>MCA</td>
                            <td>112</td>
                            <td>110</td>
                        </tr>

                        <tr>
                            <td>2015</td>
                            <td>MCA</td>
                            <td>59</td>
                            <td>55</td>
                        </tr>

                        <tr>
                            <td>2014</td>
                            <td>MCA</td>
                            <td>60</td>
                            <td>55</td>
                        </tr>

                        <tr>
                            <td>2013</td>
                            <td>MCA</td>
                            <td>60</td>
                            <td>58</td>
                        </tr>

                        <tr>
                            <td>2012</td>
                            <td>MCA</td>
                            <td>60</td>
                            <td>55</td>
                        </tr>

                        <tr>
                            <td>2011</td>
                            <td>MCA</td>
                            <td>60</td>
                            <td>51</td>
                        </tr>

                        <tr>
                            <td>2010</td>
                            <td>MCA</td>
                            <td>60</td>
                            <td>54</td>
                        </tr>

                        <tr>
                            <td>2009</td>
                            <td>MCA</td>
                            <td>59</td>
                            <td>40</td>
                        </tr>

                        <tr>
                            <td>2008</td>
                            <td>MCA</td>
                            <td>60</td>
                            <td>55</td>
                        </tr>

                        <tr>
                            <td>2007</td>
                            <td>MCA</td>
                            <td>54</td>
                            <td>51</td>
                        </tr>

                        <tr>
                            <td>2006</td>
                            <td>MCA</td>
                            <td>59</td>
                            <td>54</td>
                        </tr>

                        <tr>
                            <td>2005</td>
                            <td>MCA</td>
                            <td>29</td>
                            <td>26</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    
    </Base>
  )
}

export default PlacementHistory