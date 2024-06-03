import styles from './BurgerButton.module.css'

const BurgerButton = (props) => {
    const { onClick } = props;
    return (
        <button onClick={onClick} className={styles.BurgerWrapper}>
            <div className={styles.BurgerItem}></div>
            <div className={styles.BurgerItem}></div>
            <div className={styles.BurgerItem}></div>
        </button>
    )
}

export default BurgerButton