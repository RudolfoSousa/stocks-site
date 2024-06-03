import styles from './CloseButton.module.css'

const CloseButton = (props) => {
    const {onClick} = props;
    return (
        <button onClick={onClick} className={styles.CloseWrapper}>
            <div className={styles.CloseItem}></div>
            <div className={styles.CloseItem}></div>
        </button>
    )
}

export default CloseButton;