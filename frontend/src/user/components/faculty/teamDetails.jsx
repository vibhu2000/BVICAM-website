import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getTeamMember } from "../../userApiCalls";
import PageNotFound from "../../../core/pageNotFound";
import { Loder, ErrorYellow, ComingSoon } from "../../../core/utils";
import Base from '../base';

export default function TeamDetails() {
    let { startupId } = useParams();
    const [startup, setStartup] = useState();
    const [error, setError] = useState();
    const [loading, setLoding] = useState(true);
    
    // console.log(startupId);
    // console.log(startup);
    const preload = () => {
        getTeamMember(startupId).then((data) => {
        setLoding(false);
        if (data.error) {
          setError("Something went wrong. Try Again");
        } else {
          setStartup(data);
        }
      });
    };
  
    useEffect(() => {
      preload();
    }, []);
    // console.log(startup)
  
    if (loading) {
      return (
        <Base title="Team Details">
          <div className="col-12 my-5 py-5">
            <Loder></Loder>
          </div>
        </Base>
      );
    } else if (error) {
      return (
        <Base title="Team Details">
          <div className="col-12 my-5 py-5">
            <ErrorYellow></ErrorYellow>
          </div>
        </Base>
      );
    } else if (startup) {
      return (
        <Base title={startup.name}>
          <div className="row main-container">
            <div className='col-12 col-md-4 px-sm-5 mt-5 mb-3'>
            <img src={startup.photo} width={"300px"} height={"350px"} style={{marginTop: "30px"}}/>
            </div>
            <div className='col-12 col-md-7 mt-5' >
              <p className='h3 mt-5 fs-5 lh-base'>
                <b>Designation:</b> <span style={{color: "#848991"}}>{startup.designation}</span>
              </p>
              <p className='h3 mt-5 fs-5 lh-base'>
                <b>Qualification:</b> <span style={{color: "#848991"}}>{startup.qualification}</span>
              </p>
              <p className='h3 mt-5 fs-5 lh-base'>
                <b>Area Of Expertise:</b> <span style={{color: "#848991"}}>{startup.areaofexpertise}</span>
              </p>
              <p className='h3 mt-5 fs-5 lh-base'>
                <b>E-Mail:</b> <span style={{color: "blue"}}>{startup.email}</span>
              </p>
            </div>
            <div className='col-12 mx-5 mb-5'>
              {startup.experience?(
                <p className='h3 mt-4 fs-5 lh-base'>
                  <b>Working Experience: </b><br/><span className="fs-6" style={{color: "#848991",whiteSpace: "pre-wrap",textWrap: "justify"}}>{startup.experience}</span>
                </p>):(<p></p>)}

              {startup.seminar?(
                <p className='h3 mt-4 fs-5 lh-base'>
                  <b>Conference/Seminars: </b><br/><span className="fs-6" style={{color: "#848991",whiteSpace: "pre-wrap",textWrap: "justify"}}>{startup.seminar}</span>
                </p>):(<p></p>)}

              {startup.achievements?(
                <p className='h3 mt-4 fs-5 lh-base'>
                  <b>Awards/Achievements: </b><br/><span className="fs-6" style={{color: "#848991",whiteSpace: "pre-wrap",textWrap: "justify"}}>{startup.achievements}</span>
                </p>):(<p></p>)}

            </div>
          </div>
        </Base>
      );
    } else {
      return <PageNotFound></PageNotFound>;
    }
}