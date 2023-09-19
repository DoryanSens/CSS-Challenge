import { useParams, useNavigate } from "react-router";
import DynamicImport from "../DynamicImport";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const ChallengePage = ({ pageName }) => {
    const params = useParams();
    const navigate = useNavigate();

    const [id, setId] = useState(params.Id);
    const filePath = `./challenges/${id}/Challenge`;

    useEffect(() => {
        navigate(`/Challenge/${id}`);
    }, [navigate, id]);

    const updateIdChallengeFct = (newId) => {
        setId(newId);
    };

    return (
        <>
            <Navbar pageName={pageName} updateIdChallengeFct={updateIdChallengeFct} />
            <div className="challenge-zone">
                <DynamicImport filePath={filePath} id={id} />
            </div>
        </>
    );
};

export default ChallengePage;
