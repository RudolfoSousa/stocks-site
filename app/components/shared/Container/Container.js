import classnames from 'classnames';
import styles from './Container.module.css'

const Container = ({children, overflow}) => {
    const classNames = classnames(styles.Container, {
        [styles.Overflow]: overflow
    })
    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default Container;