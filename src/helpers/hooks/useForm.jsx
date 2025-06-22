import { useState } from "react";

const useForm = (initialState) => {
    const [state, setState] = useState(initialState);

    const updateState = (event) => {
        setState((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
       }))
    }

    return {state, updateState}
}

export { useForm };