import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { addClass, removeClass } from "../helpers/format/classNameModifier";

const Carousel = ({ children, refContainer }) => {
    const refDragHandler = useRef(null);
    const containerClientRect = refContainer.current.getBoundingClientRect();
	const [index, setIndex] = useState(0);

	const threshold = 100;
	const itemToShow = window.innerWidth < 767 ? 1 : 4;
	const DIRECTION_LEFT = "DIRECTION_LEFT";
	const DIRECTION_RIGHT = "DIRECTION_RIGHT";

	const posInitial = useRef();
	const posX1 = useRef();
	const posX2 = useRef();
	const posFinal = useRef();
	const allowShift = useRef(true);
    const cards = useRef();
    const cardCount = cards.current?.length || 0;
    const cardSize = cards.current?.[0].offsetWidth || 0;

    const checkIndex = useCallback((event) => {
        if (event.propertyName === 'left') {
            setTimeout(() => {
                removeClass(refDragHandler.current, 'transition-all duration-200')
            }, 200)

            const isMobile = window.innerWidth < 767 ? 0 : -1;
            if (index <= 0) {
                refDragHandler.current.style.left = 0;
                setIndex(0);
            } else if (index >= cardCount - itemToShow) {
                refDragHandler.current.style.left = `${-((cardCount - itemToShow + isMobile) * cardSize)}px`;
                setIndex(cardCount - itemToShow);
            } else if (index === cardCount || index === cardCount - 1) {
                refDragHandler.current.style.left = (cardCount - 1) * cardSize;
                setIndex(cardCount - 1);
            }

            allowShift.current = true;
        }
    }, [cardCount, cardSize, index, itemToShow])
    
    const shiftItem = useCallback((direction) => {
        addClass(refDragHandler.current, 'transition-all duration-200')

        if (allowShift.current) {
            if (direction === 'DIRECTION_LEFT') {
                setIndex((prev) => prev + 1);
                refDragHandler.current.style.left = `${posInitial.current - cardSize}px`;
            } else if (direction === 'DIRECTION_RIGHT') {
                setIndex((prev) => prev - 1);
                refDragHandler.current.style.left = `${posInitial.current + cardSize}px`;

            }
        }

        allowShift.current = false;
    }, [cardSize])

	const onDragMove = useCallback((event) => {
		event = event || window.event;
        event.preventDefault();
        
        if (event.type === 'touchmove') {
            posX2.current = posX1.current - event.touches[0].clientX;
            posX1.current = event.touches[0].clientX;
        } else {
            posX2.current = posX1.current - event.clientX;
            posX1.current = event.clientX;
        }

        refDragHandler.current.style.left = `${refDragHandler.current.offsetLeft -  posX2.current}px`;
    }, [posX1, posX2])
    
    const onDragEnd = useCallback((event) => {
		event = event || window.event;
        event.preventDefault();

        posFinal.current = refDragHandler.current.offsetLeft;

        if (posFinal.current - posInitial.current < -threshold) {
            shiftItem(DIRECTION_LEFT);
        } else if (posFinal.current - posInitial.current > threshold) {
            shiftItem(DIRECTION_RIGHT);
        } else {
            refDragHandler.current.style.left = `${posInitial.current}px`;
        }

        document.onmouseup = null;
        document.onmousemove = null;
	}, [shiftItem]);

	const onDragStart = useCallback((event) => {
        event = event || window.event;
        event.preventDefault();

		posInitial.current = refDragHandler.current.offsetLeft;

		if (event.type === "touchstart") {
			posX1.current = event.touches[0].clientX;
        } else {
            posX1.current = event.clientX;
            document.onmouseup = onDragEnd;
            document.onmousemove = onDragMove;
        }
    }, [onDragEnd, onDragMove])
    
    const onClick = (event) => {
        event = event || window.event;
        !allowShift.current && event.preventDefault();
    }

	useLayoutEffect(() => {
		const refForward = refDragHandler.current;
		refForward.onmousedown = onDragStart;
		refForward.addEventListener("touchstart", onDragStart);
		refForward.addEventListener("touchend", onDragEnd);
		refForward.addEventListener("touchmove", onDragMove);
		refForward.addEventListener("click", onClick);
		refForward.addEventListener("transitionend", checkIndex);
        
		return () => {
			refForward.removeEventListener("touchstart", onDragStart);
			refForward.removeEventListener("touchend", onDragEnd);
            refForward.removeEventListener("touchmove", onDragMove);
		    refForward.removeEventListener("click", onClick);
		    refForward.removeEventListener("transitionend", checkIndex);
		}
    }, [onDragStart, onDragEnd, onDragMove, checkIndex])
    
    useLayoutEffect(() => {
        if (refDragHandler.current) {
            cards.current = refDragHandler.current.getElementsByClassName('card');
        }
    }, [])

	return (
		<div className="flex -mx-4 flex-row relative" ref={refDragHandler} style={{paddingLeft: containerClientRect.left - 16}}>
			{children}
		</div>
	)
}

export { Carousel };