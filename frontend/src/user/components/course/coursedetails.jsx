import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getCourse } from "../../userApiCalls";
import PageNotFound from "../../../core/pageNotFound";
import { Loder, ErrorYellow, ComingSoon } from "../../../core/utils";
import Base from '../base';

export default function CourseDetails() {
    let { courseId } = useParams();
    const [course, setCourse] = useState();
    const [error, setError] = useState();
    const [loading, setLoding] = useState(true);

    const preload = () => {
      getCourse(courseId).then((data) => {
        setLoding(false);
        if (data.error) {
          setError("Something went wrong. Try Again");
        } else {
          setCourse(data);
        }
      });
    };

    useEffect(() => {
      preload();
    }, []);
  
    if (loading) {
      return (
        <Base title="Subject Details">
          <div className="col-12 my-5 py-5">
            <Loder></Loder>
          </div>
        </Base>
      );
    } else if (error) {
      return (
        <Base title="Subject Details">
          <div className="col-12 my-5 py-5">
            <ErrorYellow></ErrorYellow>
          </div>
        </Base>
      );
    } else if (course) {
      const sFile=course.syllabus.split(",");
      const sName=course.syllabusNames.split(",");

      const cFile=course.courseMaterial.split(",");
      const cName=course.courseMaterialNames.split(",");

      const intFile=course.intppr.split(",");
      const intName=course.intpprNames.split(",");

      const extFile=course.extppr.split(",");
      const extName=course.extpprNames.split(",");

      const lFile=course.labFile.split(",");
      const lName=course.labFileNames.split(",");

      const aFile=course.assignment.split(",");
      const aName=course.assignmentNames.split(",");
    
      return (
        <Base title={course.subName}>
            <div className="row main-container">
                <div className='mt-5 mb-3 mx-3'>
                    <table className='table table-bordered'>
                      <thead>
                        <tr style={{backgroundColor: "#A1CEFF",textAlign: "center",fontSize:"1rem"}}>
                            <th colSpan={"2"}>General Resources</th>
                        </tr>
                      </thead>
                      <tbody style={{fontSize:"15px"}}> 
                      {sFile.map((file,index)=>(
                        <tr>
                          <td style={{width: "20px",fontSize:"30px"}}><ul style={{listStyleType:"circle"}}><li></li></ul></td>
                          <td key={index}><a href={file} target="_blank" rel="noreferrer">{sName[index]}</a></td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                </div>

                <div className='my-3 mx-3'>
                    <table className='table table-bordered'>
                      <thead>
                        <tr style={{backgroundColor: "#A1CEFF",textAlign: "center",fontSize:"1rem"}}>
                            <th colSpan={"2"}>Course Material</th>
                        </tr>
                      </thead>
                      <tbody style={{fontSize:"15px"}}> 
                      {cFile.map((file,index)=>(
                        <tr>
                          <td style={{width: "20px",fontSize:"30px"}}><ul style={{listStyleType:"circle"}}><li></li></ul></td>
                          <td key={index}><a href={file} target="_blank" rel="noreferrer">{cName[index]}</a></td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                </div>

                <div className='my-3 mx-3'>
                    <table className='table table-bordered'>
                      <thead>
                        <tr style={{backgroundColor: "#A1CEFF",textAlign: "center",fontSize:"1rem"}}>
                            <th colSpan={"2"}>Internal Paper</th>
                        </tr>
                      </thead>
                      <tbody style={{fontSize:"15px"}}> 
                      {intFile.map((file,index)=>(
                        <tr>
                          <td style={{width: "20px",fontSize:"30px"}}><ul style={{listStyleType:"circle"}}><li></li></ul></td>
                          <td key={index}><a href={file} target="_blank" rel="noreferrer">{intName[[index]]}</a></td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                </div>

                <div className='my-3 mx-3'>
                    <table className='table table-bordered'>
                      <thead>
                        <tr style={{backgroundColor: "#A1CEFF",textAlign: "center",fontSize:"1rem"}}>
                            <th colSpan={"2"}>External Paper</th>
                        </tr>
                      </thead>
                      <tbody style={{fontSize:"15px"}}> 
                      {extFile.map((file,index)=>(
                        <tr>
                          <td style={{width: "20px",fontSize:"30px"}}><ul style={{listStyleType:"circle"}}><li></li></ul></td>
                          <td key={index}><a href={file} target="_blank" rel="noreferrer">{extName[index]}</a></td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                </div>

                <div className='my-3 mx-3'>
                    <table className='table table-bordered'>
                      <thead>
                        <tr style={{backgroundColor: "#A1CEFF",textAlign: "center",fontSize:"1rem"}}>
                            <th colSpan={"2"}>Lab Files</th>
                        </tr>
                      </thead>
                      <tbody style={{fontSize:"15px"}}> 
                      {lFile.map((file,index)=>(
                        <tr>
                          <td style={{width: "20px",fontSize:"30px"}}><ul style={{listStyleType:"circle"}}><li></li></ul></td>
                          <td key={index}><a href={file} target="_blank" rel="noreferrer">{lName[index]}</a></td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                </div>

                <div className='mt-3 mb-5 mx-3'>
                    <table className='table table-bordered mb-3'>
                      <thead>
                        <tr style={{backgroundColor: "#A1CEFF",textAlign: "center",fontSize:"1rem"}}>
                            <th colSpan={"2"}>Assignments</th>
                        </tr>
                      </thead>
                      <tbody style={{fontSize:"15px"}}> 
                      {aFile.map((file,index)=>(
                        <tr>
                          <td style={{width: "20px",fontSize:"30px"}}><ul style={{listStyleType:"circle"}}><li></li></ul></td>
                          <td key={index}><a href={file} target="_blank" rel="noreferrer">{aName[index]}</a></td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                </div>
            </div>
        </Base>
      );
    } else {
      return <PageNotFound></PageNotFound>;
    }
}