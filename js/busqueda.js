
  //Buscar restaurantes
  document.addEventListener("DOMContentLoaded", function () {
    const buscador = document.getElementById("buscador");
    const resultados = document.getElementById("resultados");
  
    // Lista fija de restaurantes
    const restaurantesBase = [
      {
        nombre: "La Azotea",
        descripcion: "Deléitate con una fusión perfecta entre tradición y creatividad.",
        imagen: "https://mbmarcobeteta.com/wp-content/uploads/2024/05/310733529_1194450411421515_768841319641346365_n.webp"
      },
      {
        nombre: "La Patatería",
        descripcion: "Ambiente cálido y platos a base de papas.",
        imagen: "https://www.sillasmesas.es/blog/wp-content/uploads/2018/08/mobiliario-estilo-rustico-colores-1024x768.jpg"
      },
      {
        nombre: "La Roquesa",
        descripcion: "Diseño vanguardista con terraza y barra.",
        imagen: "https://www.abasturhub.com/img/blog/interiorismo-restaurantero---interiorismo-restaurantero.jpg"
      },
      {
        nombre: "Ednia Alta Gastronomia",
        descripcion: "Un encuentro único que une historia cultural en cada plato.",
        imagen: "https://lh3.googleusercontent.com/p/AF1QipO1PZ1RsfTxp5u0V2c7nwlxfMi9TD4IH0Za2arP=s1360-w1360-h1020-rw"
      },
      {
        nombre: "Cortesana",
        descripcion: "American Lounge con buena cocina y tragos.",
        imagen: "https://lh3.googleusercontent.com/p/AF1QipPn3rGgH2d4iyCZN96uUXh-XkZRm7-MhIqQU-5k=s1360-w1360-h1020-rw"
      }
    ];
  
    // Recuperar restaurantes del localStorage
    const restaurantesLocalStorage = JSON.parse(localStorage.getItem("restaurantes")) || [];
  
    // Unir ambas listas
    const todosLosRestaurantes = [...restaurantesBase, ...restaurantesLocalStorage];
  
    function renderizarResultados(lista) {
        resultados.innerHTML = "";
  
      if (lista.length === 0) {
        resultados.innerHTML = `<p class="text-center text-muted">No se encontraron restaurantes.</p>`;
        return;
      }
  
      lista.forEach(rest => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-md-4", "mb-4");
        tarjeta.innerHTML = `
          <div class="card h-100">
            <img src="${rest.imagen}" class="card-img-top" alt="${rest.nombre}">
            <div class="card-body">
              <h5 class="card-title">${rest.nombre}</h5>
              <p class="card-text">${rest.descripcion}</p>
            </div>
          </div>
        `;
        resultados.appendChild(tarjeta);
      });
    }
  
    buscador.addEventListener("input", function () {
      const texto = this.value.toLowerCase();
      const filtrados = todosLosRestaurantes.filter(rest =>
        rest.nombre.toLowerCase().includes(texto) || rest.descripcion.toLowerCase().includes(texto)
      );
      renderizarResultados(filtrados);
    });
  
    // Mostrar todos al cargar
    renderizarResultados(todosLosRestaurantes);
  });
  

