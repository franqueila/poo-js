export class UI {
    addTask(tarea) {
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td class="d-none">${tarea.id}</td>
            <td>${tarea.nombre}</td>
            <td>${tarea.descripcion}</td>
            <td><span class="${tarea.prioridad}">${tarea.prioridad}</span></td>
            <td>${tarea.fecha}</td>
            <td>${tarea.hora}</td>
            <td>
                <button class="btn btn-danger" name="delete">Eliminar</button>
            </td>
        `;
        document.getElementById("taskList").appendChild(trElement);
    }
    deleteTask(tarea) {
        tarea.remove();
        this.message("Tarea eliminada con éxito", "info", 3000);
    }
    message(message, className, time) {
        const divElement = document.createElement("div");
        divElement.className = `alert alert-${className} mt-2 alertMessages container`;
        divElement.appendChild(document.createTextNode(message));
        const app = document.getElementById("app");
        const main = document.getElementById("main");
        app.insertBefore(divElement, main);
        setTimeout(() => {
            document.querySelector(".alertMessages").remove();
        }, time);
    }
    resetForm() {
        document.getElementById("taskForm").reset();
    }
    validateForm(tarea) {
        if (
            tarea.nombre === "" ||
            tarea.descripcion === "" ||
            tarea.prioridad === "" ||
            tarea.fecha === "" ||
            tarea.hora === ""
        ) {
            return false;
        }
        return true;
    }
}
