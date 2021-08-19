import React, { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const classesBtn = "btn btn-secondary btn-sm";

    const formCount = () => {
        return count === 0 ? "Ноль" : count;
    };

    const getBageClasses = () => {
        let classes = "badge m-2 bg-";
        classes += count === 0 ? "danger" : "primary";

        return classes;
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <React.Fragment>
            <span className={getBageClasses()}>{formCount()}</span>
            <button
                style={{ marginRight: "5px" }}
                onClick={handleIncrement}
                className={classesBtn}
            >
                Increment
            </button>
            <button
                onClick={handleDecrement}
                className={classesBtn}
                disabled={count === 0 ? true : false}
            >
                Decrement
            </button>
        </React.Fragment>
    );
};

export default Counter;
