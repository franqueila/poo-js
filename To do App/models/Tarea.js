export class Tarea {
    id = document.getElementById("taskId").value;
    nombre = document.getElementById("taskName").value;
    descripcion = document.getElementById("description").value;
    prioridad = document.getElementById("priority").value;
    fecha = document.getElementById("date").value;
    hora = document.getElementById("time").value;
    estado = document.getElementById("estado").value;

    constructor(id, nombre, descripcion, prioridad, fecha, hora, estado) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.fecha = fecha;
        this.hora = hora;
        this.estado = estado;
    }
}
