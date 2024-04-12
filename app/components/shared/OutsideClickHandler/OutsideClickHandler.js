import { createRef, useEffect } from "react";

const OutsideClickHandler = (props) => {
    const { children, onOutsideClick } = props;

    const outsideRef = createRef(null);

    const handleClickOutsite = (event) => {
        if (outsideRef.current && !outsideRef.current.contains(event.target)) {
            onOutsideClick && onOutsideClick();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutsite, true);
        return () => {
            document.removeEventListener('click', handleClickOutsite, true);
        };
    }, [handleClickOutsite])

    return (
        <div ref={outsideRef}>
            {children}
        </div>
    )
}

export default OutsideClickHandler;