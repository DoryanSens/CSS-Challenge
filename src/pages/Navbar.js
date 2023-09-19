import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = ({ pageName, updateIdChallengeFct }) => {
    const params = useParams();
    const navigate = useNavigate();
    const idMaxChallenge = 5;
    const [challengeId, setChallengeId] = useState(params.Id !== null && params.Id !== undefined ? params.Id : "");
    const [okNavigate, setOkNavigate] = useState(false);

    useEffect(() => {
        if (okNavigate) {
            setOkNavigate(false);
            // if we are on the Challenge Page, use the parent function to re render the entire page
            if (updateIdChallengeFct !== undefined) {
                updateIdChallengeFct(challengeId);
            } else {
                navigate(`/Challenge/${challengeId}`);
            }
        }
    }, [setOkNavigate, challengeId, updateIdChallengeFct, okNavigate, navigate]);

    const checkAndUpdateIdChallenge = (newIdChallenge) => {
        if (!isNaN(newIdChallenge) && newIdChallenge !== "") {
            newIdChallenge = newIdChallenge > idMaxChallenge ? 1 : newIdChallenge;
            newIdChallenge = newIdChallenge <= 0 ? idMaxChallenge : newIdChallenge;
            setChallengeId(newIdChallenge);
        } else {
            // authorize empty input => Go Home page
            setChallengeId("");
        }
    };

    const goPrevious = () => {
        if (challengeId === "") {
            checkAndUpdateIdChallenge(idMaxChallenge);
        } else {
            checkAndUpdateIdChallenge(`${parseInt(challengeId) - 1}`);
        }
        setOkNavigate(true);
    };

    const goNext = () => {
        if (challengeId === "") {
            checkAndUpdateIdChallenge(1);
        } else {
            checkAndUpdateIdChallenge(`${parseInt(challengeId) + 1}`);
        }
        setOkNavigate(true);
    };

    // On change input => no re render
    const changeIdChallenge = (e) => {
        setOkNavigate(false);
        checkAndUpdateIdChallenge(e.target.value);
    };

    const goHomePage = () => {
        const path = `/`;
        navigate(path);
    };

    // on press "ENTER" in input :
    // if null => return to homePage
    // else => re render new challenge
    const handleOnKeyDownInputNumber = (e) => {
        if (e.key === "Enter") {
            if (challengeId === "") {
                goHomePage();
            } else {
                setOkNavigate(true);
            }
        }
    };

    return (
        <div className="navbar">
            <div className="pageName">
                <h1>{pageName}</h1>
            </div>
            <div className="number-control">
                <div className="number-less">
                    <button className="nav-btn" onClick={goPrevious} aria-label="less">
                        <FontAwesomeIcon icon={faCaretLeft} size="xl" />
                    </button>
                </div>
                <input
                    type="number"
                    name="number"
                    className="number-quantity"
                    min="0"
                    max="100"
                    aria-label="challengeId"
                    value={challengeId}
                    onChange={changeIdChallenge}
                    onKeyDown={handleOnKeyDownInputNumber}
                />
                <div className="number-more">
                    <button className="nav-btn" onClick={goNext} aria-label="more">
                        <FontAwesomeIcon icon={faCaretRight} size="xl" />
                    </button>
                </div>
            </div>
            <div className="home">
                <button className="nav-btn" onClick={goHomePage} aria-label="home">
                    <FontAwesomeIcon icon={faHouse} size="2xl" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
