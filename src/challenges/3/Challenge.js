import { useState } from "react";
import styles from "./Challenge.module.css";
import images from "./images.js";

const Challenge = ({ id }) => {
    const [imgToShow, setImgToShow] = useState(images.length > 0 ? images[0].id : null);

    const handleSwitchImgToShow = (e, id) => {
        if (!e.target.className.includes("collapsed")) {
            setImgToShow(id);
        }
    };
    return (
        <div className={styles.frame}>
            {images.map((image, index) => {

                return (
                    <div
                        className={`${styles.img} ${image.id === imgToShow ? styles.collapsed : ""}`}
                        key={image.id}
                        onClick={(event) => handleSwitchImgToShow(event, image.id)}
                    >
                        <label>{image.description}</label>
                    </div>
                );
            })}
        </div>
    );
};

export default Challenge;
