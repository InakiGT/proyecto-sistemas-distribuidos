const insertarNav = document.getElementById('insertar-nav');
const buscarNav = document.getElementById('buscar-nav');
const verTodoNav = document.getElementById('ver-nav');
const eliminarNav = document.getElementById('eliminar-nav');
const actualizarNav = document.getElementById('actualizar-nav');

const insertarSec = document.getElementById('insertar');
const buscarSec = document.getElementById('buscar');
const verTodoSec = document.getElementById('todo');
const eliminarSec = document.getElementById('eliminar');
const actualizarSec = document.getElementById('actualizar');

insertarSec.style = 'display: block';

insertarNav.addEventListener('click', () => {
    insertarSec.style = 'display: block';
    buscarSec.style = 'display: none';
    verTodoSec.style = 'display: none';
    eliminarSec.style = 'display: none';
    actualizarSec.style = 'display: none';
});

buscarNav.addEventListener('click', () => {
    insertarSec.style = 'display: none';
    buscarSec.style = 'display: block';
    verTodoSec.style = 'display: none';
    eliminarSec.style = 'display: none';
    actualizarSec.style = 'display: none';
});

verTodoNav.addEventListener('click', () => {
    insertarSec.style = 'display: none';
    buscarSec.style = 'display: none';
    verTodoSec.style = 'display: block';
    eliminarSec.style = 'display: none';
    actualizarSec.style = 'display: none';
});

eliminarNav.addEventListener('click', () => {
    insertarSec.style = 'display: none';
    buscarSec.style = 'display: none';
    verTodoSec.style = 'display: none';
    eliminarSec.style = 'display: block';
    actualizarSec.style = 'display: none';
});

actualizarNav.addEventListener('click', () => {
    insertarSec.style = 'display: none';
    buscarSec.style = 'display: none';
    verTodoSec.style = 'display: none';
    eliminarSec.style = 'display: none';
    actualizarSec.style = 'display: block';
});