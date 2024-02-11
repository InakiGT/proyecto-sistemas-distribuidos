
class Api {
    baseUrl = '';
    url = '';

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    select(id, content) {
        this.url = id ? this.baseUrl + `/${id}` : this.baseUrl;
        fetch(this.url, {
            method: 'GET',
        }).then(( response ) => response.json())
        .then(( data ) => {
            console.log(data);
            const element = document.createElement('p');
            if (data.statusMsg === 'OK') {
                data.data.forEach(d => {     
                    const p1 = document.createElement('p');
                    const p2 = document.createElement('p');
                    const p3 = document.createElement('p');
                    const p4 = document.createElement('p');
                    const text = document.createTextNode('Consulta hecha correctamente');
                    
                    p1.textContent = d[0];
                    p2.textContent = d[1];
                    p3.textContent = d[2];
                    p4.textContent = d[3];
                    element.classList = 'success';
                    p1.classList = 'info';
                    p2.classList = 'info';
                    p3.classList = 'info';
                    p4.classList = 'info';
    
                    element.appendChild(text);
                    content.appendChild(element);
                    content.appendChild(p1);
                    content.appendChild(p2);
                    content.appendChild(p3);
                    content.appendChild(p4);
                });
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id,
                name,
                diamond_type,
                location,
            }),
        }).then(( response ) => response.json())
        .then(( data ) => {
            console.log(data);
            const element = document.createElement('p');
            if (data.statusMsg === 'Created') {
                const p = document.createElement('p');
                const text = document.createTextNode('Elemento insertado correctamente');
                
                p.textContent = data.data;
                element.classList = 'success';
                p.classList = 'info';
                
                element.appendChild(text);
                content.appendChild(element);
                content.appendChild(p);
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

    update(id, name, diamond_type, location, content) {
        this.url = this.baseUrl + `/${id}`;
        fetch(this.url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                diamond_type,
                location,
            }),
        }).then(( response ) => response.json())
        .then(( data ) => {
            console.log(data);
            const element = document.createElement('p');
            if (data.statusMsg === 'OK') {
                const p = document.createElement('p');
                const text = document.createTextNode('Elemento actualizado correctamente');
                
                p.textContent = data.data;
                element.classList = 'success';
                p.classList = 'info';
                
                element.appendChild(text);
                content.appendChild(element);
                content.appendChild(p);
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
        this.url = this.baseUrl + `/${id}`;
        fetch(this.url, {
            method: 'DELETE',
        }).then(( response ) => response.json())
        .then(( data ) => {
            console.log(data);
            const element = document.createElement('p');
            if (data.statusMsg === 'OK') {
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