// VALIDACION

function validarNota(materia) {
    let nota = prompt(`Ingrese la nota de ${materia} (0 a 10):`);
    while (isNaN(nota) || nota < 0 || nota > 10) {
        nota = prompt(`Nota inválida. Ingrese la nota de ${materia} (0 a 10):`);
    }
    return parseFloat(nota);
}

// OBJETO ALUMNO

function crearAlumno(nombre) {
    return {
        nombre: nombre,
        notas: {
            matematica: 0,
            economia: 0,
            gramatica: 0,
            ingles: 0
        },
        calcularPromedio: function () {
            let promedio = 0;
            for (let materia in this.notas) {
                promedio += this.notas[materia];
            }
            return promedio / 4;
        }
    }
}

let alumnos = [];

// MAIN

while (true) {
    let nombre = prompt("Ingrese el nombre del alumno:");
    if (nombre === null) {
        if (confirm("¿Desea salir del programa?")) {
            break;
        } else {
            continue;
        }
    }
    let alumno = crearAlumno(nombre);
    for (let materia in alumno.notas) {
        alumno.notas[materia] = validarNota(materia);
    }
    alumnos.push(alumno);
    let seguir = confirm("¿Desea agregar un nuevo alumno?");
    if (!seguir) {
        // CALCULO Y ALERT
        for (let alumno of alumnos) {
            let promedio = alumno.calcularPromedio();
            alert(`El promedio de ${alumno.nombre} es ${promedio.toFixed(2)}.`);
        }
        // Reiniciar el arreglo de alumnos y continuar el loop principal
        alumnos = [];
    }
}
