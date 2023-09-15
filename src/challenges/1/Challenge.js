import styles from './Challenge.module.css'

const Challenge = ({id}) => {
    return (
        <>
            <div className={styles.frame}>
                <div className={styles.center}>
                <div className={styles.number}>
                    <div className={styles.oneOne}></div>
                    <div className={styles.oneTwo}></div>
                    <div className={styles.zeroOne}></div>
                    <div className={styles.zeroTwo}></div>
                </div>
                <div className={styles.days}>Days</div>
                <div className={styles.others}>CSS CHALLENGES</div>
                </div>
            </div>
        </>
    )
}

export default Challenge