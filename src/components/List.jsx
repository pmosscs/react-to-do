import React from "react";
import Tasks from "./Tasks.jsx"

function List({tasks}) {
    const displayTasks = tasks.map((listItem) => {
        return <Tasks task={listItem} />
    })
    return (
        <ul>
            <h2>My List</h2>
            {displayTasks}
        </ul>
    )
}

export default List;