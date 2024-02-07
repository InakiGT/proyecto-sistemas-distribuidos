const insertarForm = document.getElementById('insertar-form');
const buscarForm = document.getElementById('buscar-form');
const verTodoButton = document.getElementById('ver-todo-button');
const eliminarForm = document.getElementById('eliminar-form');
const actualizarForm = document.getElementById('actualizar-form');


const api = new Api('http://2806-107e-0012-39c5-b225-aaff-fe22-f90b:3000/api/v1/mines/');

insertarForm.addEventListener('submit', ( e ) => {
    e.preventDefault();

    const id = document.getElementById('insertar-id').value;
    const name = document.getElementById('insertar-name').value;
    const diamond_type = document.getElementById('insertar-type').value;
    const location = document.getElementById('insertar-location').value;
    const content = document.getElementById('insertar-data');
    
    api.insert(id, name, diamond_type, location, content);
});

buscarForm.addEventListener('submit', ( e ) => {
    e.preventDefault();

    const id = document.getElementById('buscar-id').value;
    const content = document.getElementById('buscar-data');
    
    api.select(id, content);
});

verTodoButton.addEventListener('click', ( e ) => {
    e.preventDefault();

    const content = document.getElementById('todo-data');
    
    api.select(null, content, content);
});

eliminarForm.addEventListener('submit', ( e ) => {
    e.preventDefault();

    const id = document.getElementById('eliminar-id').value;
    const content = document.getElementById('eliminar-data');
    
    api.delete(id, content);
})

actualizarForm.addEventListener('submit', ( e ) => {
    e.preventDefault();

    const id = document.getElementById('actualizar-id').value;
    const name = document.getElementById('actualizar-name').value;
    const diamond_type = document.getElementById('actualizar-type').value;
    const location = document.getElementById('actualizar-location').value;
    const content = document.getElementById('actualizar-data');
    
    api.update(id, name, diamond_type, location, content);
});