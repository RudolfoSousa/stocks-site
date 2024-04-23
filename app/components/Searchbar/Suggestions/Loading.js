import Skeleton from "../../shared/Skeleton";
import style from './Suggestions.module.css'

const Loading = () => {
    return (
        <div className={style.Suggestions}>
            <Skeleton width={"150px"} height={"20px"} />
            <ul>
                <li className={style.List} >
                    <div>
                        <Skeleton width={"60px"} />
                        <Skeleton width={"80px"} height={"10px"} />
                    </div>
                    <Skeleton width={"50px"} height={"10px"} />
                </li>
                <li className={style.List} >
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