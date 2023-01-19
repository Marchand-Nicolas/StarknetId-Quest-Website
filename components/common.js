import styles from '../styles/components/Common.module.css'
import Header from './header'
import WrongNetworkMenu from './wrongNetworkMenu'

export default function Common(props) {

    return (
        <>
            <Header className={props.headerClassname} />
            <img src='/leaves/leaf_1.png' className={[styles.leaves, styles.v1].join(" ")}></img>
            <img src='/leaves/leaf_2.png' className={[styles.leaves, styles.v2].join(" ")}></img>
            <WrongNetworkMenu />
        </>
    )
}

