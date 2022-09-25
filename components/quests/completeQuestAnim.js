import styles from '../../styles/components/quests/completeQuestAnim.module.css';
import config from '../../utils/config'

export default function CompleteQuestAnim(props) {
    return (
        <>
            <div className={styles.goldAnimation} />
            <div className={[styles.goldAnimation, styles.v2].join(" ")} />
            <div className={[styles.goldAnimation, styles.v3].join(" ")} />
            <div className={styles.nftCard}>
                <img src={`${config.nftUri}${props.playerLevel ? props.playerLevel : 0}`} />
            </div>
        </>
    )
}