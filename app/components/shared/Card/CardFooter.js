import styles from './Card.module.css'

const CardFooter = (props) => {
    const { children } = props;
    return (
        <div className={styles.Footer}>{children}</div>
    )
}

export default CardFooter