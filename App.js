// App.js
import React, { useState, useEffect } from "react";
import AllTasks from "./AllTasks";
import { TaskContext } from "./TaskContext";


const App = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        setTasks([...tasks, { name, category, id: tasks.length + 1 }]);
        setName("");
        setCategory("");
    };

    const filteredTasks = filter ? tasks.filter(task => task.category === filter) : tasks;

    return (
        <TaskContext.Provider value={[filteredTasks, setTasks]}>
            <center>
                <h1>To Do List</h1>
                <select class="custom-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="">--Filtrovat podle kategorie--</option>
                    <option value="Práce">Práce</option>
                    <option value="Domov">Domov</option>
                    <option value="Hobby">Hobby</option>
                </select>
                <AllTasks />
                <input
    class="form-control"
    type="text"
    placeholder="Zadejte název úkolu"
    value={name}
    onChange={(e) => setName(e.target.value)}
/>




                
                <select class="custom-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">--Vyberte kategorii--</option>
                    <option value="Práce">Práce</option>
                    <option value="Domov">Domov</option>
                    <option value="Hobby">Hobby</option>
                </select>
                <button onClick={addTask} class="btn btn-success">Přidat úkol</button>
               
            </center>
        </TaskContext.Provider>
    );
};

export default App;
