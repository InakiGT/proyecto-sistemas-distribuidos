
class Api {
    baseUrl = '';
    url = '';

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    select(id, content) {
        this.url = id ? this.baseUrl + `?id=${id}` : this.baseUrl;
        fetch(this.url, {
            method: 'GET',
        }).then(( response ) => response.json())
        .then(( data ) => {
            const element = document.createElement('p');
            if (data.status === 'OK') {
                const p = document.createElement('p');
                const text = document.createTextNode('Consulta hecha correctamente');
                const info = document.createTextNode(data.data);

                element.classList = 'success';
                p.classList = 'info';
                
                p.appendChild(info);
                element.appendChild(text);
                content.appendChild(element);
            } else {
                const text = document.createTextNode('Error en el servidor');

                element.classList = 'error';
                
                element.appendChild(text);
                content.appendChild(element);
            }
        }).catch(() => {
            const element = document.createElement('p');
            const text = document.createTextNode('Error en la petición');

            element.classList = 'error';
            
            element.appendChild(text);
            content.appendChild(element);
        });
    }

    insert(id, name, diamond_type, location, content) {
        this.url = this.baseUrl;
        fetch(this.url, {
            method: 'POST',
            headers: { 'Conten-Type': 'application/json' },
            body: {
                id,
                name,
                diamond_type,
                location,
            },
        }).then(( response ) => response.json())
        .then(( data ) => {
            const element = document.createElement('p');
            if (data.status === 'OK') {
                const p = document.createElement('p');
                const text = document.createTextNode('Elemento insertado correctamente');
                const info = document.createTextNode(data.data);
                
                element.classList = 'success';
                p.classList = 'info';
                
                p.appendChild(info);
                element.appendChild(text);
                content.appendChild(element);
            } else {
                const text = document.createTextNode('Error en el servidor');

                element.classList = 'error';
                
                element.appendChild(text);
                content.appendChild(element);
            }
        }).catch(() => {
            const p = document.createElement('p');
            const element = document.createElement('p');
            const text = document.createTextNode('Error en la petición');

            element.classList = 'error';
            
            element.appendChild(text);
            content.appendChild(element);
        });
    }

    update(id, name, diamond_type, location, content) {
        this.url = this.baseUrl + `?id=${id}`;
        fetch(this.url, {
            method: 'PUT',
            headers: { 'Conten-Type': 'application/json' },
            body: {
                name,
                diamond_type,
                location,
            },
        }).then(( response ) => response.json())
        .then(( data ) => {
            const element = document.createElement('p');
            if (data.status === 'OK') {
                const p = document.createElement('p');
                const text = document.createTextNode('Elemento actualizado correctamente');
                
                element.classList = 'success';
                p.classList = 'info';
                
                p.appendChild(info);
                element.appendChild(text);
                content.appendChild(element);
            } else {
                const text = document.createTextNode('Error en el servidor');

                element.classList = 'error';
                
                element.appendChild(text);
                content.appendChild(element);
            }
        }).catch(() => {
            const element = document.createElement('p');
            const text = document.createTextNode('Error en la petición');

            element.classList = 'error';
            
            element.appendChild(text);
            content.appendChild(element);
        });
    }

    delete(id, content) {
        this.url = this.baseUrl + `?id=${id}`;
        fetch(this.url, {
            method: 'DELETE',
        }).then(( response ) => response.json())
        .then(( data ) => {
            const element = document.createElement('p');
            if (data.status === 'OK') {
                const text = document.createTextNode('Elemento eliminado correctamente');
                
                element.classList = 'success';
                
                element.appendChild(text);
                content.appendChild(element);
            } else {
                const text = document.createTextNode('Error en el servidor');

                element.classList = 'error';
                
                element.appendChild(text);
                content.appendChild(element);
            }
        }).catch(() => {
            const element = document.createElement('p');
            const text = document.createTextNode('Error en la petición');

            element.classList = 'error';
            
            element.appendChild(text);
            content.appendChild(element);
        });
    }
}