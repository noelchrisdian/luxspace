import { useLayoutEffect } from "react";
import { addClass } from "../format/classNameModifier";

const useModal = () => {
    useLayoutEffect(() => {
        const openModal = (element) => {
            const wrapper = document.createElement('div');
            const overlay = document.createElement('div');
            overlay.addEventListener('click', () => {
                wrapper.remove();
            })

            addClass(wrapper, 'fixed inset-0 z-40 flex items-center justify-center w-full min-h-screen');
            addClass(overlay, 'fixed inset-0 bg-black opacity-35');

            const content = document.createElement('div');
            content.innerHTML = element.target.attributes?.['data-content'].value;
            addClass(content, 'bg-white p-0 md:p-6 z-10');
            wrapper.append(overlay);
            wrapper.append(content);
            document.body.append(wrapper);
        }

        const triggers = document.getElementsByClassName('modal-trigger');
        Array.from(triggers).forEach((element) => {
            element.addEventListener('click', openModal);
        })

        return () => {
            Array.from(triggers).forEach((element) => {
                element.removeEventListener("click", openModal);
            })
        }
    })
}

export { useModal };