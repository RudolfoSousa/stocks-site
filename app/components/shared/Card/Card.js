import styles from './Card.module.css'

const Card = (props) => {
    const { children } = props
    return (
        <div className={styles.Card}>
            {children}
        </div>
    )
}

export default Card;