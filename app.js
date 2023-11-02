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
    completar.addEventListener('click', tareaCompletada);

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi','bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    iconos.append(completar, eliminar);

    listaDeTareas.appendChild(nuevaTarea);
    input.value = '';
  } else {
    alert('Debes ingresar una tarea');
  }

}

let tareaCompletada = (e) => { // e es objeto de evento y hay que obtener el elemento que disparo el evento
  let tarea = e.target.parentNode.parentNode;
 tarea.classList.toggle('completada');
}

let eliminarTarea = (e) => {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

boton.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarTarea();
  }
});
