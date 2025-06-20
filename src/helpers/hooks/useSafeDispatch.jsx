import { useCallback, useLayoutEffect, useRef } from "react";

const useSafeDispatch = (dispatch) => {
    const mounted = useRef(false);

    useLayoutEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        }
    })

    return useCallback((...args) => mounted.current ? dispatch(...args) : undefined, [dispatch])
}

export { useSafeDispatch };