const insertarForm = document.getElementById('insertar-form');
const buscarForm = document.getElementById('buscar-form');
const verTodoButton = document.getElementById('ver-todo-button');
const eliminarForm = document.getElementById('eliminar-form');
const actualizarForm = document.getElementById('actualizar-form');


const api = new Api('https://pokeapi.co/api/v2/ability/');

insertarForm.addEventListener('submit', () => {
    const id = document.getElementById('insertar-id').value;
    const name = document.getElementById('insertar-name').value;
    const diamond_type = document.getElementById('insertar-type').value;
    const location = document.getElementById('insertar-location').value;
    const content = document.getElementById('insertar-data');
    
    api.insert(id, name, diamond_type, location, content);
});

buscarForm.addEventListener('submit', () => {
    const id = document.getElementById('buscar-id').value;
    const content = document.getElementById('buscar-data');
    
    api.select(id, content);
});

verTodoButton.addEventListener('click', () => {
    const content = document.getElementById('todo-data');
    
    api.select(null, content, content);
});

eliminarForm.addEventListener('submit', (e) => {
    const id = document.getElementById('eliminar-id').value;
    const content = document.getElementById('eliminar-data');
    
    api.delete(id, content);
})

actualizarForm.addEventListener('submit', ( e ) => {
    const id = document.getElementById('actualizar-id').value;
    const name = document.getElementById('actualizar-name').value;
    const diamond_type = document.getElementById('actualizar-type').value;
    const location = document.getElementById('actualizar-location').value;
    const content = document.getElementById('actualizar-data');
    
    api.update(id, name, diamond_type, location, content);
});