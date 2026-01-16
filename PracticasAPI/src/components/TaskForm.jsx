import React, {useState} from "react";

export default function TaskForm() {
    const [title, setTitle] = useState("")
    const [isCompleted, setIsCompleted] = useState(false);
    /*Un interruptor cuando es true el boton se bloquea para evitar que el usuario haga click 20 veces mientras la API responde*/
    const [loading, setLoading] = useState(false);
    //Un objeto que guarda la respuesta del servidor una vez terminada la operacion
    const [result, setResults] = useState(null);

    //funcion que utilizo en el form cuando pulso el boton
    const handleSubmit = (e) => {
        e.preventDefault();

        //Bloqueo el boton para dar feedback visual
        setLoading(false);

        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                completed: isCompleted, // Por defecto una tarea nueva no está hecha
                userId: 1
            }),
            //Etiqueta del pauqete avisa al servidor que lo qu elleva dentro es un formato JSON
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then(res => res.json())
            .then(data => {
                setResults(data);
                setTitle("");
                setIsCompleted(false);
            })
            //Se ejecuta en cualquier caso para volver a habilitar el boton
            .finally(() => setLoading(false));
    };

    return (
        <div>
            <h2>Añadir Tarea</h2>
            <form onSubmit={handleSubmit}>
                <label>Titulo:</label>
                <input type="text" value={title} placeholder="Introduce el titulo" onChange={(e) => setTitle(e.target.value)} />
                <label>
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={(e) => setIsCompleted(e.target.checked)}
                    />
                    ¿Esta completada(Marcar el checkox es SI)?
                </label>
                <button type="submit" disabled={loading}>
                    {loading ? "Guardando..." : "Añadir tarea"}
                </button>
            </form>

            {result &&(
                <div style={{ color: 'blue' }}>
                    <h4>Respuesta de la API:</h4>
                    <p>ID generado: {result.id}</p>
                    <p>Tarea: {result.title}</p>
                    <p>Estado: {result.completed ? "Completada" : "Pendiente"}</p>
                </div>
                )}

        </div>


    )

}