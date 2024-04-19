import style from './Card.module.css'

const CardContent = (props) => {
    const { children } = props;
    return (
        <div className={style.Content}>{children}</div>
    )
}

export default CardContent