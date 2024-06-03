import Skeleton from "../Skeleton";
import styles from './Suggestions.module.css'

const Loading = () => {
    return (
        <div className={styles.Suggestions}>
            <Skeleton width={"150px"} height={"20px"} />
            <ul>
                <li className={styles.List} >
                    <div>
                        <Skeleton width={"60px"} />
                        <Skeleton width={"80px"} height={"10px"} />
                    </div>
                    <Skeleton width={"50px"} height={"10px"} />
                </li>
                <li className={styles.List} >
                    <div>
                        <Skeleton width={"60px"} />
                        <Skeleton width={"80px"} height={"10px"} />
                    </div>
                    <Skeleton width={"50px"} height={"10px"} />
                </li>
            </ul>
        </div>
    );
}

export default Loading;