import styles from '../styles/components/Common.module.css'
import Header from './header'

export default function Common(props) {
    return (
        <>
            {props.account && <Header/>}
            <img src='/leaves/leaf_1.png' className={[styles.leaves, styles.v1].join(" ")}></img>
            <img src='/leaves/leaf_2.png' className={[styles.leaves, styles.v2].join(" ")}></img>
            <img src='/leaves/leaf_3.png' className={[styles.leaves, styles.v3].join(" ")}></img>
        </>
    )
}