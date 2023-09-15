import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import '../index.css'

const Home = () => {
    const [challengeNumber, setChallengeNumber] = useState(1);
    const navigate = useNavigate()
    const handleClick = () =>{
        let path = `/Challenge/${challengeNumber}`; 
        navigate(path);
    }
    const changeNumberChallenger = (e) =>{
        setChallengeNumber(e.target.value)
    }

    return <>
        <h1>Home</h1>
        <label>Challenges from : </label> <a  href="https://100dayscss.com/days/1/"> Here</a>
        <br/>
        <label>Template : </label> <a href="https://codepen.io/pen?template=wMQKOq&editors=1100">CodeIO</a>
        <br/>
        <label>CSS Generator : </label> <a href="https://cssgenerator.org/">Here</a>
        <br/>
        <label>:Challenge : </label>
        <input type="number" min="1" max="100" defaultValue={challengeNumber} onChange={changeNumberChallenger}/>
        <button onClick={handleClick}>Go</button>
    </>
}

export default Home