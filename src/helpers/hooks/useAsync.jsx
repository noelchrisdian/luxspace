import { useCallback, useReducer, useRef } from "react";
import { useSafeDispatch } from "./useSafeDispatch";

const defaultState = {
	data: null,
	status: "idle",
	error: null
}

const useAsync = (initial) => {
    const initialStateRef = useRef({
        ...defaultState, ...initial
    });

    const [state, setState] = useReducer((state, action) => {
        return { ...state, ...action }
    }, initialStateRef.current);

    const safeSetState = useSafeDispatch(setState);

    const run = useCallback((promise) => {
        if (!promise || !promise.then) {
            throw new Error(
                `The argument passed to useAsync().run must be a promise`
            );
        }

        safeSetState({ data: null, status: "pending", error: null });

        return promise.then((data) => {
            safeSetState({ data, status: 'resolved', error: null });
            return data;
        }, (error) => {
            safeSetState({ data: null, status: 'rejected', error: JSON.parse(error.message) });
        })
    }, [safeSetState]);


    const setData = useCallback((data) => {
        safeSetState({ data });
    }, [safeSetState]);

    const setError = useCallback((error) => {
        safeSetState({ error });
    }, [safeSetState]);

    const reset = useCallback(() => {
        safeSetState(initialStateRef.current);
    }, [safeSetState]);
    
    return {
        ...state,
        setData,
        setError,
        reset,
        run,
        isIdle: state.status === 'idle',
        isLoading: state.status === 'idle' || state.status === 'pending',
        isError: state.status === 'rejected',
        isSuccess: state.status === 'resolved'
    }
}

export { useAsync };