import React, {useState} from "react";

export default function TaskItem() {
    const [id, setId] = useState("");
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    const buscarTask = () => {
        if (!id) return;
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                setLoading(false);

            })
            .catch(() => {
                alert("Error al buscar")
                setLoading(false);
            });
    }

    return (
        <div>
            <h2>Buscar Task</h2>
            <input
                type="number"
                placeholder="Introduce un ID (ej:3)"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <button onClick={buscarTask}>Buscar</button>
            {tasks && !loading && (
                <div>
                    <p>ID: {tasks.id}</p>
                    <p>Titulo: {tasks.title}</p>
                    <p>Completed: {tasks.completed ? "True" : "False"}</p>
                </div>
            )}
        </div>
    )

}