import React from 'react'
import CmgSoon from "../assets/images/coming_soon.svg"
import Base from '../user/components/base'

export default function ComingSoon() {
  return (
    <Base title='Coming Soon'>
        <div className="container-fluid border-top border-2 border-primary">
            <div className="row m-sm-5 p-0 m-0  d-flex flex-column align-items-center">
                <img src={CmgSoon} alt="" width="400" height="400"/>
            </div>
        </div>
   </Base>
  )
}