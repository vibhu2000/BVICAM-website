import React from 'react'
import Base from '../../base'

const AlumniCouncil = () => {
  return (
    <Base title="Alumni Council">
        <div className='row main-container'>
            <div className='my-5'>
                <p className='mb-4 fs-6 lh-base'>
                    Executive Members of Alumni Council, BVICAM, New Delhi
                </p>
                <table className='table table-bordered'>
                    <thead>
                        <tr style={{backgroundColor: "#A1CEFF",textAlign: "center",fontSize:"1rem"}}>
                            <th scope='col'>S.No.</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Batch</th>
                            <th scope='col'>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1. </td>
                            <td>Mr. Aakash Sharma</td>
                            <td>2002-05</td>
                            <td>heyitsaakash@gmail.com</td>
                        </tr>

                        <tr>
                            <td>2. </td>
                            <td>Mr. Amit Sharma</td>
                            <td>2002-05</td>
                            <td>asharma@xebia.com</td>
                        </tr>

                        <tr>
                            <td>3. </td>
                            <td>Mr. Sachin Punyani</td>
                            <td>2002-05</td>
                            <td>sachin.punyani@gmail.com</td>
                        </tr>

                        <tr>
                            <td>4. </td>
                            <td>Mr. Ankur Govil</td>
                            <td>2004-07</td>
                            <td>ankur.govils@gmail.com</td>
                        </tr>

                        <tr>
                            <td>5. </td>
                            <td>Mr. Rishi Gupta</td>
                            <td>2005-08</td>
                            <td>rishi.gupta@thorogood.com</td>
                        </tr>

                        <tr>
                            <td>6. </td>
                            <td>Mr. Mudit Malhotra</td>
                            <td>2005-08</td>
                            <td>muditmalhotra@hotmail.com</td>
                        </tr>

                        <tr>
                            <td>7. </td>
                            <td>Ms. Shikha Dhawan</td>
                            <td>2006-09</td>
                            <td>shikhadhawan@ymail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Base>
  )
}

export default AlumniCouncil