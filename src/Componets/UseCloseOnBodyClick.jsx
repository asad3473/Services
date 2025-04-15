import { useEffect } from "react";

const UseCloseOnBodyClick = (refs, onClose) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedOutside = refs.every(
                (ref) => ref.current && !ref.current.contains(event.target)
            );

            if (clickedOutside) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refs, onClose]);
};

export default UseCloseOnBodyClick;
