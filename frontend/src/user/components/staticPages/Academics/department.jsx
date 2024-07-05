import React from 'react'
import Base from '../../base'

const Department = () => {
  return (
    <Base title="Department">
        <div className='row main-container'>
            <div className='mt-5 mb-2'>
                <h4 className='fw-semibold'>
                    Department of Computer Science and  Applications
                </h4>
                <p className='mt-3 fs-6 lh-base'>
                    Programme(s):
                </p>

                <table className='table table-bordered text-center'>
                    <thead style={{backgroundColor: "#A1CEFF",fontSize:"1rem"}}>
                        <tr>
                            <th rowSpan={2}>S.No.</th>
                            <th rowSpan={2}>Name of the Programme(s)</th>
                            <th rowSpan={2}>Level</th>
                            <th rowSpan={2}>Duration</th>
                            <th colSpan={2}>Annual Intake</th>
                            <th rowSpan={2}>Year of Starting</th>
                        </tr>
                        <tr>
                            <th>1st Shift</th>
                            <th>2nd Shift</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1. </td>
                            <td>Master of Computer Applications (MCA)</td>
                            <td>PG</td>
                            <td>02 Years</td>
                            <td>120</td>
                            <td>-</td>
                            <td>2002</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-5'>
                <h4 className='fw-semibold'>
                    Department of Journalism and Mass Communication
                </h4>
                <p className='mt-3 fs-6 lh-base'>
                    Programme(s):
                </p>

                <table className='table table-bordered text-center'>
                    <thead style={{backgroundColor: "#A1CEFF",fontSize:"1rem"}}>
                        <tr>
                            <th rowSpan={2}>S.No.</th>
                            <th rowSpan={2}>Name of the Programme(s)</th>
                            <th rowSpan={2}>Level</th>
                            <th rowSpan={2}>Duration</th>
                            <th colSpan={2}>Annual Intake</th>
                            <th rowSpan={2}>Year of Starting</th>
                        </tr>
                        <tr>
                            <th>1st Shift</th>
                            <th>2nd Shift</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1. </td>
                            <td>Bachelor of Arts (Journalism and Mass Communication) - BA(JMC)</td>
                            <td>UG</td>
                            <td>03 Years</td>
                            <td>120</td>
                            <td>120</td>
                            <td>2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Base>
  )
}

export default Department