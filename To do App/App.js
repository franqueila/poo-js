import { Tarea } from "./models/Tarea.js";
import { UI } from "./models/UI.js";

document.getElementById("taskForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const id = document.getElementById("taskId").value;
    const nombre = document.getElementById("taskName").value;
    const descripcion = document.getElementById("description").value;
    const prioridad = document.getElementById("priority").value;
    const fecha = document.getElementById("date").value;
    const hora = document.getElementById("time").value;
    const estado = document.getElementById("estado").value;

    const tarea = new Tarea(
        id,
        nombre,
        descripcion,
        prioridad,
        fecha,
        hora,
        estado
    );

    const ui = new UI();

    ui.addTask(tarea);
    ui.message("¡Tarea agregada con éxito!", "success", 3000);
});
