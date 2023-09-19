import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../index.css";

const Home = () => {
    const [challengeNumber, setChallengeNumber] = useState(1);
    const navigate = useNavigate();
    const handleClick = () => {
        let path = `/Challenge/${challengeNumber}`;
        navigate(path);
    };
    const changeNumberChallenger = (e) => {
        setChallengeNumber(e.target.value);
    };

    return (
        <>
            <h1>Home</h1>
            <div>
                <label>Challenges from : </label>
                <ul>
                    <li>
                        <Link to="https://100dayscss.com/days/1/"> 100 Days CSS </Link>
                    </li>
                    <li>
                        <Link to="https://50projects50days.com/#projects">50 Projects - 50 Days</Link>
                    </li>
                    <li>
                        <Link to="www.dailyui.co"> DailyUI</Link>
                    </li>
                </ul>
            </div>
            <div>
                <label>Template : </label>
                <Link to="https://codepen.io/pen?template=wMQKOq&editors=1100">CodeIO</Link>
            </div>
            <div>
                <label>Generator : </label>
                <ul>
                    <li>
                        <Link to="https://cssgenerator.org/">CSS</Link>
                    </li>
                    <li>
                        <Link to="https://loremipsum.io/generator/">Lorem Ipsum</Link>
                    </li>
                    <li>
                        <Link to="https://picsum.photos/">Lorem Picsum</Link>
                    </li>
                </ul>
            </div>
            <div>
                <label>Open-Source UI elements for any project : </label>
                <Link to="https://uiverse.io/">UIverse</Link>
            </div>
            <div>
                <label>Challenge : </label>
                <input
                    type="number"
                    min="1"
                    max="100"
                    defaultValue={challengeNumber}
                    onChange={changeNumberChallenger}
                />
                <button onClick={handleClick}>Go</button>
            </div>
        </>
    );
};

export default Home;
