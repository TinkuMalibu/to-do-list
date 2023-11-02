// Seleccionar los elementos HMTL.
const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

let agregarTarea = () => {
  if (input.value) {
    let nuevaTarea= document.createElement('div');
    nuevaTarea.classList.add('tarea');


    let textoTarea = document.createElement('p');
    textoTarea.innerText = input.value;
    nuevaTarea.appendChild(textoTarea);

    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    nuevaTarea.appendChild(iconos);

    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-square-fill', 'icono-completar');

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi','bi-trash3-fill', 'icono-eliminar');

    iconos.append(completar, eliminar);

    listaDeTareas.appendChild(nuevaTarea);
  } else {
    alert('Debes ingresar una tarea');
  }

}

let tareaCompletada = (tarea) => {
 tarea.classList.toggle('completada');
}


boton.addEventListener('click', agregarTarea);
