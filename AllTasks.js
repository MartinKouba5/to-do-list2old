// AllTasks.js
import React, { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";

const AllTasks = () => {
    const [tasks, setTasks] = useContext(TaskContext);

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            {tasks.map((task) => (
                <div className="one-task" key={task.id}>
                    <div class="d-flex justify-content-center">
                    <h4>{task.name}</h4>
                    </div>

                    <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-danger" onClick={() => deleteTask(task.id)}>Smazat</button>

                    </div>

                </div>
            ))}
        </div>
    )
}

export default AllTasks



