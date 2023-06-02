import { Tarea } from "./models/Tarea.js";
import { UI } from "./models/UI.js";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(supabaseUrl, supabaseKey);

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

    const validatedForm = ui.validateForm(tarea);
    if (!validatedForm) {
        return ui.message(
            "Por favor, rellene todos los campos",
            "danger",
            3000
        );
    }

    ui.addTask(tarea);
    ui.message("¡Tarea agregada con éxito!", "success", 3000);
    ui.resetForm();
});

document.getElementById("taskList").addEventListener("click", (e) => {
    const tarea = e.target.parentElement.parentElement;
    const ui = new UI();
    if (e.target.name === "delete") {
        ui.deleteTask(tarea);
    }
});

document.getElementById("signOut").addEventListener("click", (e) => {
    e.preventDefault();
    supabase.auth.signOut();
    window.location.href = "auth/auth.html";
});
