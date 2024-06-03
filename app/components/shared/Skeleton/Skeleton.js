import styles from './Skeleton.module.css'

const Skeleton = (props) => {
    const { width = "100px", height = "15px" } = props;
    const stylesProps = {
        width,
        height
    }
    return (
        <div style={{ ...stylesProps }} className={styles.Skeleton} />
    )
}

export default Skeleton;