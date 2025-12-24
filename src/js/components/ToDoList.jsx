import { useState } from "react"

export const ToDoList = () => {
    //const listaDeTareas=["arreglar", "cocinar", "descansar"]
    const [listaDeTareas, setListaDeTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState([""]);

    const agregarTarea = () => {
        if (nuevaTarea.trim() === "") { return }
        setListaDeTareas((hola) => {
            console.log(hola);
            return [...hola, nuevaTarea]
        })
        setNuevaTarea("");
    };

    const eliminarTarea = () => {
        setListaDeTareas(listaDeTareas.filter((index) => index)
    }

    return (
        <div className="text-center d-flex flex-column justify-content-center align-items-center m-1">
            hola soy todolist
            <input className="btn btn-outline-secondary"
                type="text"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placeholder="Escribe una tarea"
            />
            <button className="btn btn-info" onClick={agregarTarea} >
                agregar tarea
            </button>
            <ul>

                {
                    listaDeTareas.map((tarea, indice) => {
                        return <li key={indice}>{tarea}
                            <button type="button" className="btn-close" onClick={eliminarTarea} disabled aria-label="Close"></button> </li>
                    })
                }
            </ul>


        </div>

    )
}
