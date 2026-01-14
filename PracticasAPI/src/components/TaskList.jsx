import React, { useState, useEffect } from "react";

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => {
                const cantidad = data.slice(0, 10);
                setTasks(cantidad);
                setLoading(false);

            });
    }, []);

    if (loading) {
        return <p>Cargando...</p>
    }
    return (
        <div>
            <h1>Obtener Tarea</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <p>Titulo: {task.title}</p>
                        <p>Estado: {task.completed ? "True" : "False"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}