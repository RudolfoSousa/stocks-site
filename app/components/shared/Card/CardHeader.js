import styles from './Card.module.css'

const CardHeader = (props) => {
    const { children } = props;
    return (
        <div className={styles.Header}>{children}</div>
    )
}

export default CardHeader;