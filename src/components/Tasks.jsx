import React, { useState } from "react";

function Tasks({task}) {
    const [complete, setComplete] = useState(false)
    const handleClick = () => {
        setComplete(!complete)
    }
    return (
        <li className={complete ? "complete" : null} onClick={handleClick}>{task}</li>
    )
}

export default Tasks;