let arraySearch = [];

let movies = [
  {
    id: 1,
    name: "Castillo en el cielo",
    src: "../assets/img/castillo en el cielo.jpg",
    descripcion: "Castillo en el cielo",
    categoria: "Fantasia/Aventura",
  },
  {
    id: 2,
    name: "La tumba de las luciérnagas",
    src: "../assets/img/La-tumba-de-las-luciernagas-HD-1080p.webp",
    descripcion: "La tumba de las luciérnagas",
    categoria: "Guerra/Drama",
  },
  {
    id: 3,
    name: "Mi vecino Totoro",
    src: "../assets/img/Mi vecino Totoro (1988).jpg",
    descripcion: "Mi vecino Totoro",
    categoria: "Fantasia/Familia",
  },
  {
    id: 4,
    name: "Kiki, la aprendiz de bruja",
    src: "../assets/img/Kiki, la aprendiz de bruja (1989).jpg",
    descripcion: "Nicky, la aprendiz de bruja",
    categoria: "Aventura/Familia",
  },
  {
    id: 5,
    name: "Recuerdos del ayer",
    src: "../assets/img/Recuerdos del ayer (1991).jpg",
    descripcion: "Recuerdos del ayer",
    categoria: "Romance/Drama",
  },
  {
    id: 6,
    name: "Porco Rosso",
    src: "../assets/img/Porco Rosso (1992).jpg",
    descripcion: "Porco Rosso",
    categoria: "Fantasia/Aventura",
  },
  {
    id: 7,
    name: "Puedo escuchar el mar",
    src: "../assets/img/Puedo escuchar el mar (1993).jpg",
    descripcion: "Puedo escuchar el mar",
    categoria: "Drama/Romance",
  },
  {
    id: 8,
    name: "Pompoko",
    src: "../assets/img/Pompoko (1994).jpg",
    descripcion: "Pompoko",
    categoria: "Fantasia/Familia",
  },
  {
    id: 9,
    name: "Susurros del corazón",
    src: "../assets/img/Susurros del corazón (1995).webp",
    descripcion: "Susurros del corazón",
    categoria: "Romance/Familia",
  },
  {
    id: 10,
    name: "La princesa Mononoke",
    src: "../assets/img/La princesa Mononoke (1997).jpg",
    descripcion: "La princesa Mononoke",
    categoria: "Fantasia/Aventura",
  },
  {
    id: 11,
    name: "Mis vecinos los Yamada",
    src: "../assets/img/Mis vecinos los Yamada (1999).jpg",
    descripcion: "Mis vecinos los Yamada",
    categoria: "Familia/Comedia",
  },
  {
    id: 12,
    name: "El viaje de Chihiro ",
    src: "../assets/img/El viaje de Chihiro (2001).webp",
    descripcion: "El viaje de Chihiro ",
    categoria: "Fantasia/Aventura",
  },
  {
    id: 13,
    name: "Haru en el reino de los gatos",
    src: "../assets/img/Haru en el reino de los gatos (2002).jpg",
    descripcion: "Haru en el reino de los gatos",
    categoria: "Fantasia/Familia",
  },
  {
    id: 14,
    name: "El increible castillo vagabundo",
    src: "../assets/img/El castillo ambulante (2004).jpg",
    descripcion: "El castillo ambulante",
    categoria: "Fantasia/Familia",
  },
  {
    id: 15,
    name: "Cuentos de Terramar ",
    src: "../assets/img/Cuentos de Terramar (2006).jpg",
    descripcion: "Cuentos de Terramar",
    categoria: "Fantasia/Aventura",
  },
  {
    id: 16,
    name: "Ponyo en el acantilado",
    src: "../assets/img/Ponyo en el acantilado (2008).jpg",
    descripcion: "Ponyo en el acantilado",
    categoria: "Fantasia/Aventura",
  },
  {
    id: 17,
    name: "Arrietty y el mundo de los diminutos",
    src: "../assets/img/Arrietty y el mundo de los diminutos (2010).webp",
    descripcion: "Arrietty y el mundo de los diminutos",
    categoria: "Fantasia/Aventura",
  },
  {
    id: 18,
    name: "La colina de las amapolas",
    src: "../assets/img/La colina de las amapolas (2011).jpg",
    descripcion: "La colina de las amapolas",
    categoria: "Fantasia/Familia",
  },
  {
    id: 19,
    name: "El viento se levanta",
    src: "../assets/img/El viento se levanta (2013).jpg",
    descripcion: "El viento se levanta",
    categoria: "Guerra/Romance",
  },
  {
    id: 20,
    name: "El cuento de la princesa Kaguya",
    src: "../assets/img/El cuento de la princesa Kaguya (2013).jpg",
    descripcion: "El cuento de la princesa Kaguya ",
    categoria: "Fantasia/Drama",
  },
  {
    id: 21,
    name: "El recuerdo de Marnie",
    src: "../assets/img/El recuerdo de Marnie (2014).webp",
    descripcion: "El recuerdo de Marnie",
    categoria: "Fantasia/Familia",
  },
];

//Funcion para mostrar la galeria de peliculas, ocupamos un for para recorrrer la informacion
function showGallery(infoMovies) {
  //mandamos a traer el div donde se mostraran las cards de las peliculas
  document.getElementById("card").innerText = "";

  for (var i = 0; i < infoMovies.length; i++) {
    document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3">
        <div class="card p-3 ps-5 pe-5">
        <h4 classs="text-capitalize text-center">${infoMovies[i].name}</h4>
        <img src="${infoMovies[i].src}" width="100%" height="320px"/>
        <p class="mt-2">${infoMovies[i].descripcion}</p>
        <p class="mt-2">${infoMovies[i].categoria}</p>
        <button type="button" id="${infoMovies[i].id}" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">Saber más</button>
        </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">${infoMovies[i].id}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            ${infoMovies[i].descripcion}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`;
  }
}
//mandamos a traer la funcion con el objeto que hicimos de las peliculas para mostrar las cards
showGallery(movies);

//vamos a hacer la funcion de buscar con el input con el evento "keyup" proporcionan un código que indica qué tecla se presiona
document.getElementById("nameMovie").addEventListener("keyup", () => {
  //declaramos una variable y mandamos a traer el input
  let nameMovie = document.getElementById("nameMovie").value;
  arraySearch = movies.filter(function (film) {
    //convertimos todo el name a minuscula con .toLowerCase()
    //includes() checa que si lo que esta en nameMovie coincide con lo escrito en el input por medio de un true o false
    if (film.name.toLowerCase().includes(nameMovie)) {
      return film.name;
    }
  });
  //aqui this se esta refiriendo al objeto, osea que this.value comprueba si el valor del campo es vacio o no
  if (this.value == "") {
    //muestra el objeto de peliculas
    showGallery(movies);
  } else {
    if (arraySearch == "") {
      document.getElementById("card").innerHTML = "";
    } else {
      showGallery(arraySearch);
    }
  }
});
//mandamos a traer el boton

//OBTENEMOS EL SELECT y MOSTRAMOS EL VALOR SELECCIONADO
const selectCategories = document.querySelector("#categories");
var categoria = "";
selectCategories.addEventListener("change", (event) => {
  //La propiedad event.target en JavaScript nos permite acceder al objeto que envió el evento.
  const categoriaSelect = event.target;
  //La propiedad options es un arreglo de las opciones, y selectedIndex el índice que está seleccionado.
  categoria = categoriaSelect.options[categoriaSelect.selectedIndex].text;
  //MOSTRAMOS VALOR SELECCIONADO
  // console.log(categoria);
  busquedaCategorias(categoria, movies);
});

function busquedaCategorias(categoria, infoMovies) {
  document.getElementById("card").innerText = "";

  for (var i = 0; i < infoMovies.length; i++) {
    if (infoMovies[i].categoria === categoria) {
      document.getElementById("card").innerHTML += `
                <div class="col-md-4 mt-3">
                <div class="card p-3 ps-5 pe-5">
                <h4 classs="text-capitalize text-center">${infoMovies[i].name}</h4>
                <img src="${infoMovies[i].src}" width="100%" height="320px"/>
                <p class="mt-2">${infoMovies[i].descripcion}</p>
                <p class="mt-2">${infoMovies[i].categoria}</p>
                <button type="button" class="btn btn-info">Saber más</button>
                </div>
                </div>`;
    } else if (categoria === "Categorias") {
      showGallery(movies);
    }
  }
}
