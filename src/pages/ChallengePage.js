import { useParams, useNavigate } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import DynamicImport from "../DynamicImport";
import { useEffect, useState} from "react";

const ChallengePage = () =>{
    const navigate = useNavigate()
    const params = useParams();
    const [id, setId] = useState(params.Id)
    const [okNavigate, setOkNavigate] = useState(false);
    const filePath = `./challenges/${id}/Challenge`;

    const goHomePage = () =>{
        const path = `/`; 
        navigate(path);
    }
    const goPrevious = () =>{
        id <= 1 ? setId(10) : setId(`${parseInt(id) -1}`)
        setOkNavigate(true)
    }
  
    const goNext = () =>{
        id >= 10 ? setId(1) : setId(`${parseInt(id) +1}`)
        setOkNavigate(true)
    }

    useEffect(() =>{
        if (okNavigate) {
            navigate(`/Challenge/${parseInt(id)}`)
        }
    }, [navigate, id, okNavigate])
    
    return <>
        <div className="challenge-flex-container">
            <button  className="challenge-flex-items" onClick={goHomePage}><FontAwesomeIcon icon={faHouse } size="2xl"/></button>
        </div>
        <div className="challenge-absolute-data" >
            <h1>Challenge </h1>
            <label>Challenge Id : {params.Id}</label>
            <div>
                <button onClick={goPrevious}><FontAwesomeIcon icon={faCaretLeft } size="xs"/></button>
                <button onClick={goNext}><FontAwesomeIcon icon={faCaretRight } size="xs"/></button>
            </div>
        </div>
        <DynamicImport filePath={filePath} id={id} />        
    </>
}

export default ChallengePage