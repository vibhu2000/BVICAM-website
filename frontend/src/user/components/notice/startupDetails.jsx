import {useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom';
import { getStartup } from "../../userApiCalls";
import PageNotFound from "../../../core/pageNotFound";
import { Loder, ErrorYellow, ComingSoon } from "../../../core/utils";
import Base from '../base';

export default function StartUpDetails() {
    let { startupId } = useParams();
    const [startup, setStartup] = useState();
    const [error, setError] = useState();
    const [loading, setLoding] = useState(true);
    
    // console.log(startupId);
    // console.log(startup);
    const preload = () => {
      getStartup(startupId).then((data) => {
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
  
    if (loading) {
      return (
        <Base title="Notice Details">
          <div className="col-12 my-5 py-5">
            <Loder></Loder>
          </div>
        </Base>
      );
    } else if (error) {
      return (
        <Base title="Notice Details">
          <div className="col-12 my-5 py-5">
            <ErrorYellow></ErrorYellow>
          </div>
        </Base>
      );
    } else if (startup) {
      return (
        <Base title={startup.name}>
          {startup.photo==="" ? (
                  <div className="row main-container">
                    <div className='mt-5 mx-5'>
                      <p className='fw-semibold fs-6 lh-base' style={{whiteSpace: "pre-wrap"}}>{startup.description}</p>
                    </div>
                  </div>
                ):(
                <div className="row main-container">
                    <div className='col-12 col-md-4 px-sm-5 mt-5 mb-3'>
                      <img src={startup.photo} width={"300px"} height={"350px"} style={{marginTop: "30px"}}/>
                    </div>
                  <div className='col-12 col-md-7 mt-5' >
                    <p className='mt-5 fw-semibold fs-6 lh-base' style={{whiteSpace: "pre-wrap"}}>{startup.description}</p>
                  </div>
                </div>
              )
          }
          <div className="row main-container">
          {(startup.file && startup.file!=="")?(
            <div className='mt-3 mx-5'>
              <p className='fs-6 lh-base'>
                    <b>file:</b><br/>
                    <ul>
                        <li><a href={startup.file} target="_blank" rel="noreferrer">{startup.fileName}</a></li>
                    </ul>
                </p>
            </div>
          ):(<p></p>)
          }
          <div className='mt-3 mb-5 mx-5'>
              <p className='fs-6 lh-base'>
                <b>Notice Category:</b><br/>
                  <p className='fs-6 lh-base'>{startup.imageType}</p>
                </p>
          </div>
          </div>
        </Base>
      );
    } else {
      return <PageNotFound></PageNotFound>;
    }
}