import style from './CloseButton.module.css'

const CloseButton = (props) => {
    const {onClick} = props;
    return (
        <button onClick={onClick} className={style.CloseWrapper}>
            <div className={style.CloseItem}></div>
            <div className={style.CloseItem}></div>
        </button>
    )
}

export default CloseButton;