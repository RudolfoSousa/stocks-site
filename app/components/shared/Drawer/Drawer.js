import classnames from 'classnames';
import styles from './Drawer.module.css'
import Container from '../Container';
import CloseButton from './CloseButton/CloseButton';
import OutsideClickHandler from '../OutsideClickHandler';

const Drawer = (props) => {
    const { open, onclose, children, down } = props;
    const drawerClassNames = classnames(styles.Drawer, {
        [styles.Open]: open,
        [styles.Down]: down
    })
    const overlayClassNames = classnames(styles.Overlay, {
        [styles.OpenOverlay]: open
    })


    return (
        <>
            <div className={overlayClassNames}></div>
            <OutsideClickHandler onOutsideClick={() => onclose()}>
                <div className={drawerClassNames}>
                    <Container>
                        <div className={styles.HeaderContent}>
                            <CloseButton onClick={onclose} />
                        </div>
                        {children}
                    </Container>
                </div>
            </OutsideClickHandler>
        </>
    )

}

export default Drawer;