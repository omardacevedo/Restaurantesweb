/*
const nombreInput = document.getElementById('nombre');
const descripcionInput = document.getElementById('descripcion');
const direccionInput = document.getElementById('direccion');
const urlInput = document.getElementById('url');

const lista = document.getElementById('lista-datos');
const btnAgregar = document.getElementById('agregar');
const btnEliminar = document.getElementById('eliminar');
const btnLimpiar = document.getElementById('limpiar');

// Cargar datos desde localStorage al iniciar
window.addEventListener('DOMContentLoaded', () => {
    const datosGuardados = JSON.parse(localStorage.getItem('datos')) || [];
    datosGuardados.forEach(dato => agregarElemento(dato));
});

// Función para agregar visualmente un dato
function agregarElemento({ nombre, descripcion, direccion, url }) {
    const li = document.createElement('li');
    li.innerHTML = `
    <strong>${nombre}</strong>
    <p>Descripción: ${descripcion}</p>
    <p>Dirección: ${direccion}</p>
    <p>URL: <a href="${url}" target="_blank">${url}</a></p>`;
    lista.appendChild(li);
}

// Guardar todos los datos en localStorage
function guardarEnLocalStorage() {
    const datos = [];
    lista.querySelectorAll('li').forEach(li => {
        const nombre = li.querySelector('strong')?.textContent || '';
        const descripcion = li.querySelectorAll('p')[0]?.textContent.replace('Descripción: ', '') || '';
        const direccion = li.querySelectorAll('p')[1]?.textContent.replace('Dirección: ', '') || '';
        const url = li.querySelectorAll('a')[0]?.href || '';
        datos.push({ nombre, descripcion, direccion, url });
    });
    localStorage.setItem('datos', JSON.stringify(datos));
}

// Agregar nuevo elemento
btnAgregar.addEventListener('click', () => {
    const nombre = nombreInput.value.trim();
    const descripcion = descripcionInput.value.trim();
    const direccion = direccionInput.value.trim();
    const url = urlInput.value.trim();

    if (nombre && descripcion && direccion && url) {
        const nuevoDato = { nombre, descripcion, direccion, url };
        agregarElemento(nuevoDato);
        guardarEnLocalStorage();

        nombreInput.value = '';
        descripcionInput.value = '';
        direccionInput.value = '';
        urlInput.value = '';
        nombreInput.focus();
    }
});

// Eliminar el último elemento
btnEliminar.addEventListener('click', () => {
    const ultimo = lista.lastElementChild;
    if (ultimo) {
        lista.removeChild(ultimo);
        guardarEnLocalStorage();
    }
});

// Limpiar toda la lista
btnLimpiar.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que quieres borrar toda la lista?')) {
        lista.innerHTML = '';
        localStorage.removeItem('datos');
    }
});


btnEliminar.addEventListener('click', () => {
    const ultElemento = lista.lastElementChild;
    if (ultElemento) {
        lista.removeChild(ultElemento);
        guardarEnLocalStorage();
    }
});


btnLimpiar.addEventListener('click', () => {
    lista.innerHTML = '';
    localStorage.removeItem('nombres');
});

*/


document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
  
    if (formulario) {
        formulario.addEventListener('submit', e => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const descripcion = document.getElementById('descripcion').value; // Agregado
            const imagenInput = document.getElementById('imagen');
            const archivo = imagenInput.files[0];

            const reader = new FileReader();
            reader.readAsDataURL(archivo);

            reader.onload = () => {
                const imagenBase64 = reader.result;

                let restaurantes = JSON.parse(localStorage.getItem('restaurantes')) || [];
                restaurantes.push({ nombre,descripcion, imagen: imagenBase64 });

                localStorage.setItem('restaurantes', JSON.stringify(restaurantes));
                formulario.reset();
                alert('Restaurante guardado');
            };
        });
    } else {
        console.error("El formulario no se ha encontrado");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Obtener la lista de restaurantes desde localStorage
    const restaurantes = JSON.parse(localStorage.getItem('restaurantes')) || [];

    // Obtener el contenedor donde se van a agregar las tarjetas
    const listaRestaurantes = document.getElementById('restaurantes-lista');


    // Verificar si hay restaurantes guardados
    if (restaurantes.length > 0) {
        restaurantes.forEach(restaurante => {
            // Crear una tarjeta para cada restaurante
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta');
            tarjeta.innerHTML = `
                <img src="${restaurante.imagen}" alt="Imagen de ${restaurante.nombre}">
                <h2>${restaurante.nombre}</h2>
                <p>${restaurante.descripcion}</p>
            `;
            // Agregar la tarjeta al contenedor
            listaRestaurantes.appendChild(tarjeta);
        });
    } else {
        // Si no hay restaurantes guardados, mostrar un mensaje
        listaRestaurantes.innerHTML = '<p>No hay restaurantes guardados.</p>';
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const tarjetas = document.querySelectorAll('.tarjeta');
  
    tarjetas.forEach(tarjeta => {
      tarjeta.addEventListener('click', function () {
        const nombre = this.getAttribute('data-nombre');
        const descripcion = this.getAttribute('data-descripcion');
        const imagen = this.getAttribute('data-imagen');
  
        document.getElementById('modalLabel').textContent = nombre;
        document.getElementById('modalDescripcion').textContent = descripcion;
        document.getElementById('modalImagen').src = imagen;
      });
    });
  });

