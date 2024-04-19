import style from './BurgerButton.module.css'

const BurgerButton = (props) => {
    const { onClick } = props;
    return (
        <button onClick={onClick} className={style.BurgerWrapper}>
            <div className={style.BurgerItem}></div>
            <div className={style.BurgerItem}></div>
            <div className={style.BurgerItem}></div>
        </button>
    )
}

export default BurgerButton