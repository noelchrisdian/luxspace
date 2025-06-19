const addClass = (e, classes) => {
    e.classList?.add(...classes.split(" "));
}

const removeClass = (e, classes) => {
    e.classList?.remove(...classes.split(" "));
}

export {addClass, removeClass}