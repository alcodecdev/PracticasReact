import React, {useState} from "react";

export default function TaskItem() {
    const [id, setId] = useState("");
    const [tasks, setTasks] = useState(null);
    const [loading, setLoading] = useState(false);

    const buscarTask = () => {
        if (!id) return;
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => res.json())
            .then(data => {
                // Si el objeto viene vacío ponemos null
                setTasks(data.id ? data : null);
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
                onChange={e => {setId(e.target.value)
                    if(e.target.value === "") setTasks(null)}}
            />
            <button onClick={buscarTask} disabled={loading}>
                {loading ? 'Buscando...' : 'Buscar'}
            </button>
            {id && tasks && !loading && (
                <div>
                    <p>ID: {tasks.id}</p>
                    <p>Titulo: {tasks.title}</p>
                    <p>Completed: {tasks.completed ? "True" : "False"}</p>
                </div>
            )}
        </div>
    )

}