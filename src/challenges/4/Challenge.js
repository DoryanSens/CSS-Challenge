import datas from "./data";
import styles from "./Challenge.module.css";
import { useState } from "react";
import { useEffect } from "react";

const sleep = async (milliseconds) => {
    await new Promise((resolve) => {
        return setTimeout(resolve, milliseconds);
    });
};

const Challenge = () => {
    const [data, setData] = useState(null);
    const testSleep = async () => {
        await sleep(5000);
        setData(datas);
    };

    useEffect(() => {
        data ?? testSleep()
    }, [data]);

    return data != null ? (
        <div className={styles.card}>
            <div
                className={styles.backgroundPicture}
                style={{ backgroundImage: `url(${data.backgroundPicture})` }}
            ></div>
            <div className={styles.parentPictureProfil}>
                <div className={styles.pictureProfil} style={{ backgroundImage: `url(${data.picture})` }}></div>
            </div>
            <div className={styles.others}>
                <div className={styles.name}>
                    {data.firstname} {data.lastname}
                </div>
                <div className={styles.job}>{data.job}</div>
                <p className={styles.description}>{data.description}</p>
                <div className={styles.interest}>
                    {data.interests.map((interest, key) => (
                        <div className={styles.interestCell} key={key}>
                            {interest}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <div className={styles.card}>
            <div className={`${styles.backgroundPicture} ${styles.animated}`}></div>
            <div className={styles.parentPictureProfil}>
                <div className={`${styles.pictureProfil} ${styles.animated}`}></div>
            </div>
            <div className={styles.others}>
                <div className={`${styles.name} ${styles.animated}`}></div>
                <div className={`${styles.job} ${styles.animated}`}></div>
                <p className={`${styles.description} ${styles.animated}`}></p>
                <div className={`${styles.interest} ${styles.animated}`}></div>
            </div>
        </div>
    );
};

export default Challenge;
