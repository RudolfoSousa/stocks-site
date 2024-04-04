import { useRef } from "react";

const useDebounce = () => {
    const debounceSeed = useRef(null);

    const debounceFunction = useRef((func, timeout = 500) => {
        if (debounceSeed.current) {
            clearTimeout(debounceSeed.current);
            debounceSeed.current = null;
        }
        debounceSeed.current = setTimeout(() => {
            func();
        }, timeout);
    });
    return debounceFunction.current;
}

export default useDebounce;