import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
import Navbar from "./Navbar";

const Home = ({ pageName }) => {
    return (
        <>
            <Navbar pageName={pageName} />
            <div className="content-page">
                <div>
                    <span>Challenges from : </span>
                    <ul>
                        <li>
                            <Link to="https://100dayscss.com/days/1/"> 100 Days CSS </Link>
                        </li>
                        <li>
                            <Link to="https://50projects50days.com/#projects">50 Projects - 50 Days</Link>
                        </li>
                        <li>
                            <Link to="https://dailyui.co"> DailyUI</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <span>Template : </span>
                    <Link to="https://codepen.io/pen?template=wMQKOq&editors=1100">CodeIO</Link>
                </div>
                <div>
                    <span>Generator : </span>
                    <ul>
                        <li>
                            <Link to="https://cssgenerator.org/">CSS</Link>
                        </li>
                        <li>
                            <Link to="https://webcode.tools/">Web code tools</Link>
                        </li>
                        <li>
                            <Link to="https://grid.layoutit.com/">CSS Grid</Link>
                        </li>
                        <li>
                            <Link to="https://www.cssportal.com/css-flexbox-generator/">CSS Flex</Link>
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
                    <span>Open-Source UI elements for any project : </span>
                    <Link to="https://uiverse.io/">UIverse</Link>
                </div>
            </div>
        </>
    );
};

export default Home;
