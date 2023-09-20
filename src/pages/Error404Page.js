import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as PageNotFoundSvg } from "../img/pageNotFound.svg";
import { Link } from "react-router-dom";

const Error404Page = () => {
    return (
        <>
            <div className="notFoundPage">
                <PageNotFoundSvg />
                <span>It seems you're lost,</span>
                <span> find your way back ...</span>
                <div className="home">
                    <Link to={"/"}>
                        <button className="nav-btn" aria-label="home">
                            <FontAwesomeIcon icon={faHouse} size="2xl" />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Error404Page;
