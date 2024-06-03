import styles from './Card.module.css'

const CardContent = (props) => {
    const { children } = props;
    return (
        <div className={styles.Content}>{children}</div>
    )
}

export default CardContent