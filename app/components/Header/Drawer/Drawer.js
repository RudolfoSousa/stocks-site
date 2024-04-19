import classnames from 'classnames';
import style from './Drawer.module.css'
import Container from '../../shared/Container';
import CloseButton from './CloseButton/CloseButton';
import OutsideClickHandler from '../../shared/OutsideClickHandler';

const Drawer = (props) => {
    const { open, onclose, children } = props;
    const drawerClassNames = classnames(style.Drawer, {
        [style.Open]: open
    })
    const overlayClassNames = classnames(style.Overlay, {
        [style.OpenOverlay]: open
    })


    return (
        <>
            <div className={overlayClassNames}></div>
            <OutsideClickHandler onOutsideClick={() => onclose()}>
                <div className={drawerClassNames}>
                    <Container>
                        <div className={style.HeaderContent}>
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