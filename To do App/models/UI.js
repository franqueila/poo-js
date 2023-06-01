export class UI {
    addTask(tarea) {
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${tarea.nombre}</td>
            <td>${tarea.descripcion}</td>
            <td>${tarea.prioridad}</td>
            <td>${tarea.fecha}</td>
            <td>${tarea.hora}</td>
            <td>
                <button class="btn btn-danger" name="delete">Eliminar</button>
            </td>
        `;
        document.getElementById("taskList").appendChild(trElement);
    }
    deleteTask(tarea) {}
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
}
