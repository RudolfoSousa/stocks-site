import { useRef } from "react";

const useThrottle = () => {
    const throttleSeed = useRef(null);

    const throttleFunction = useRef((func, timeout = 200) => {
        if (throttleSeed.current) {
            clearTimeout(throttleSeed.current);
            throttleSeed.current = null;
        }
        throttleSeed.current = setTimeout(() => {
            func();
        }, timeout);
    });
    return throttleFunction.current;
}

export default useThrottle;