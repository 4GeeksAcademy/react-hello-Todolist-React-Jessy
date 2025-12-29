import { useState } from "react";
import "../components/ToDoList"

export const ToDoList = () => {
  const [listaDeTareas, setListaDeTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    setListaDeTareas(prev => [...prev, nuevaTarea]);
    setNuevaTarea("");
  };

  const eliminarTarea = (indiceclickado) => {
    console.log("indiceclickado es ", indiceclickado)
    setListaDeTareas(prev =>
      prev.filter((_, indice) => indice !== indiceclickado)
    );
  };

  const cantidadTareas = listaDeTareas.length;
  let mensaje = "";

  if (cantidadTareas === 0) {
    mensaje = "No tienes tareas pendientes 🎉";
  } else if (cantidadTareas >= 1 && cantidadTareas <= 4) {
    mensaje = `Tienes ${cantidadTareas} tareas pendientes 😅​`;
  } else if (cantidadTareas >= 5 && cantidadTareas <= 8) {
    mensaje = `¡Tienes ${cantidadTareas} tareas pendientes!  😲​​`;
  }
  else if (cantidadTareas >= 8) {
    mensaje = `¡Tienes ${cantidadTareas} tareas pendientes!  😭​​​`;
  }

  return (

    <div className="app-container d-flex flex-column align-items-center mt-5">
      <h3 className="mb-4">📝 To Do List</h3>

      <div className="d-flex mb-2">
        <input
          className="form-control form-control-sm me-2"
          style={{ width: "220px" }}

          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregarTarea()}

          placeholder="Escribe una tarea"
        />
        <button className="btn btn-info mt-2" onClick={agregarTarea}>
          Agregar tarea
        </button>
      </div>

      <ul className="list-group" style={{ width: "350px" }}>
        {listaDeTareas.map((tarea, indice) => (
          <li
            key={indice}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {tarea}

            <button data-bs-toggle="modal" data-bs-target={`#modal${indice}`}
              type="button"
            >
              ❌
            </button>

            <div className="modal fade" id={`modal${indice}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title center fs-5" id="exampleModalLabel">Estas a punto de eliminar la tarea</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Estas seguro que deseas continuar ?
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => eliminarTarea(indice)}>Aceptar</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancelar</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className={`mt-2 tareas-texto`}>
        {mensaje}
      </p>
    </div>
  );
};


