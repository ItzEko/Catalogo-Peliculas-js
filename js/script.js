let arraySearch = [];

let movies = [
  {
    id: 0,
    name: "Nausicaä del Valle del Viento ",
    src: "../assets/img/nausica viaje en el tiwmpo 1984.jpg",
    descripcion: "Nausicaä del Valle del Viento es una película de animación japonesa dirigida por Hayao Miyazaki. La historia se desarrolla en un mundo post-apocalíptico donde la Tierra está cubierta por un bosque tóxico lleno de insectos gigantes. La protagonista, Nausicaä, es la princesa de un pequeño reino que intenta encontrar una manera de salvar a su pueblo y al mundo en general. ",
    categoria: "Guerra/Drama",
    date:1984
  },
  {
    id: 1,
    name: "Castillo en el cielo",
    src: "../assets/img/castillo en el cielo.jpg",
    descripcion: "El castillo en el cielo es la primera película oficial producida por Studio Ghibli y lanzada en 1986. Ene ste caso, la historia se centra en Pazu, un joven aprendiz de mecánico que vive en una ciudad minera que un día conoce a Sheeta, una misteriosa chica que posee un cristal que la conecta con el castillo en el cielo. Pazu y Sheeta emprenden un viaje para encontrar el castillo y descubrir sus secretos.",
    categoria: "Fantasia/Aventura",
    date:1986
  },
  {
    id: 2,
    name: "La tumba de las luciérnagas",
    src: "../assets/img/La-tumba-de-las-luciernagas-HD-1080p.webp",
    descripcion: "La trama de La Tumba de las Luciérnagas se desenvuelve en Japón de 1945, durante los últimos meses de la Segunda Guerra Mundial. La historia sigue a dos hermanos, Seita y Setsuko, que luchan por sobrevivir en un Japón devastado por la guerra.",
    categoria: "Guerra/Drama",
    date:1988
  },
  {
    id: 3,
    name: "Mi vecino Totoro",
    src: "../assets/img/Mi vecino Totoro (1988).jpg",
    descripcion: "Se trata de una película que se ha convertido en un clásico de la animación japonesa y, de hecho, debido a la repercusión que tuvo, Totoro se convirtió en la mascota oficial de Studio Ghibli. Aquí seguimos la historia de dos hermanas, Satsuki y Mei, las cuales se mudan con su padre a una casa en el campo mientras su madre se recupera en el hospital. Allí, descubren la existencia de criaturas mágicas llamadas Totoros que viven en los bosques cercanos y se hacen amigas de ellos.",
    categoria: "Fantasia/Familia",
    date:1988
  },
  {
    id: 4,
    name: "Kiki, la aprendiz de bruja",
    src: "../assets/img/Kiki, la aprendiz de bruja (1989).jpg",
    descripcion: "En esta entrega la historia sigue a Kiki, una joven bruja que debe abandonar su hogar y su familia para completar su entrenamiento como bruja. Kiki se establece en una ciudad costera y comienza a ofrecer servicios de entrega en su escoba voladora. La película es una muestra virtudes como el crecimiento y madurez, al mismo tiempo ha sido elogiada por su mensaje positivo y su enfoque en el empoderamiento femenino.",
    categoria: "Aventura/Familia",
    date:1989
  },
  {
    id: 5,
    name: "Recuerdos del ayer",
    src: "../assets/img/Recuerdos del ayer (1991).jpg",
    descripcion: "En Recuerdos del Ayer, podemos ver la aventura de Taeko Okajima, una mujer de 27 años que vive en Tokio y trabaja en una oficina. Durante un viaje en tren a la ciudad rural de Yamagata, Taeko comienza a recordar su infancia y los momentos que la marcaron. La animación de Recuerdos del Ayer es fascinante, con detalles cuidadosamente elaborados y una paleta de colores suave y cálida que contrasta con la vida agitada de la ciudad.    ",
    categoria: "Romance/Drama",
    date:1991
  },
  {
    id: 6,
    name: "Porco Rosso",
    src: "../assets/img/Porco Rosso (1992).jpg",
    descripcion: "Porco Rosso fue lanzada en 1992 trayendo un argumento interesante que relata la historia de un piloto llamado Marco Pagot. Este chico extrañamente se ha transformado en un cerdo antropomórfico debido a una maldición. Una de las cosas que más llama la atención del título es su banda sonora compuesta por Joe Hisaishi, la cual refleja perfectamente la atmósfera de la película.",
    categoria: "Fantasia/Aventura",
    date:1992
  },
  {
    id: 7,
    name: "Puedo escuchar el mar",
    src: "../assets/img/Puedo escuchar el mar (1993).jpg",
    descripcion: "Puedo escuchar el mar es una película de animación japonesa que ha cautivado a personas de todas las edades desde su lanzamiento en 1993. Cuenta la historia de dos estudiantes de secundaria que se conocen en una pequeña ciudad costera y comienzan a desarrollar una amistad que los llevará a enfrentar sus problemas y emociones más profundas.",
    categoria: "Drama/Romance",
    date:1993
  },
  {
    id: 8,
    name: "Pompoko",
    src: "../assets/img/Pompoko (1994).jpg",
    descripcion: "Pompoko es una película que ha logrado transmitir un mensaje poderoso y necesario en la actualidad, en la que la protección del medio ambiente es un tema de gran importancia. La película nos muestra lo esencial de encontrar un equilibrio entre el desarrollo humano y la conservación de la naturaleza, ya que los actos pueden tener consecuencias graves para todas las especies que habitan en planeta.",
    categoria: "Fantasia/Familia",
    date:1994
  },
  {
    id: 9,
    name: "Susurros del corazón",
    src: "../assets/img/Susurros del corazón (1995).webp",
    descripcion: "Susurros del Corazón es emotiva y llena de enseñanzas que nos invita a perseguir nuestros sueños y a valorar las pequeñas cosas de la vida. La historia de Shizuku y Seiji nos muestra que el apoyo de las personas que nos rodean es fundamental para alcanzar nuestras metas. Además, la película está llena de detalles, como la canción Country Roads y cuenta con una impresionante animación característica de Studio Ghibli.",
    categoria: "Romance/Familia",
    date:1995
  },
  {
    id: 10,
    name: "La princesa Mononoke",
    src: "../assets/img/La princesa Mononoke (1997).jpg",
    descripcion: "La princesa Mononoke es una película estrenada en 1997 que se convirtió en un gran éxito en Japón y en el extranjero. Está ambientada en el Japón feudal y cuenta la historia de Ashitaka, un joven príncipe que se ve envuelto en una lucha entre los humanos y los dioses del bosque.    ",
    categoria: "Fantasia/Aventura",
    date:1997
  },
  {
    id: 11,
    name: "Mis vecinos los Yamada",
    src: "../assets/img/Mis vecinos los Yamada (1999).jpg",
    descripcion: "Mis vecinos los Yamada es una película que combina humor, ternura y reflexión de una forma única y original. Una obra que muestra la belleza de lo cotidiano y la importancia de la familia y las relaciones interpersonales en nuestras vidas",
    categoria: "Familia/Comedia",
    date:1999
  },
  {
    id: 12,
    name: "El viaje de Chihiro ",
    src: "../assets/img/El viaje de Chihiro (2001).webp",
    descripcion: "El viaje de Chihiro es una película de animación japonesa dirigida por Hayao Miyazaki y producida por Studio Ghibli en el año 2001. La película cuenta la historia de Chihiro, una niña de diez años que se ve atrapada en un mundo mágico y extraño después de que sus padres se transforman en cerdos. Chihiro debe encontrar una manera de liberar a sus padres y regresar al mundo humano antes de que sea demasiado tarde. ",
    categoria: "Fantasia/Aventura",
    date:2001
  },
  {
    id: 13,
    name: "Haru en el reino de los gatos",
    src: "../assets/img/Haru en el reino de los gatos (2002).jpg",
    descripcion: "Su argumento sigue a una joven que se adentra en un mundo mágico lleno de gatos antropomórficos. La trama de la película es una mezcla de fantasía y comedia, con personajes entrañables y una animación muy llamativa.",
    categoria: "Fantasia/Familia",
    date:2002
  },
  {
    id: 14,
    name: "El increible castillo vagabundo",
    src: "../assets/img/El castillo ambulante (2004).jpg",
    descripcion: "El castillo ambulante  está basada en una novela homónima de la autora británica Diana Wynne Jones. La trama se centra en Sophie, una joven sombrerera transformada en anciana por una bruja celosa, quien conoce al misterioso mago Howl y juntos se embarcan en una aventura para detener la guerra que está devastando el reino.",
    categoria: "Fantasia/Familia",
    date:2004
  },
  {
    id: 15,
    name: "Cuentos de Terramar ",
    src: "../assets/img/Cuentos de Terramar (2006).jpg",
    descripcion: "Es una película inspirada en la serie de novelas Terramar de Ursula K. Le Guin. Arren es el protagonista, un príncipe que huye de su reino tras cometer un acto terrible, y a Ged, un archimago que lo acompaña en su viaje para descubrir la verdad detrás de la desaparición de la magia en el mundo de Terramar.",
    categoria: "Fantasia/Aventura",
    date:2006
  },
  {
    id: 16,
    name: "Ponyo en el acantilado",
    src: "../assets/img/Ponyo en el acantilado (2008).jpg",
    descripcion: "Sigue las aventuras de Ponyo, un pez dorado que desea convertirse en un ser humano y se enamora de Sosuke, un niño que vive en un acantilado junto al mar. Sin embargo, su deseo de convertirse en humana tiene consecuencias peligrosas para el equilibrio del mundo natural.",
    categoria: "Fantasia/Aventura",
    date:2008
  },
  {
    id: 17,
    name: "Arrietty y el mundo de los diminutos",
    src: "../assets/img/Arrietty y el mundo de los diminutos (2010).webp",
    descripcion: "Arrietty y el Mundo de los Diminutos trata sobre Arrietty, una joven de una raza diminuta que vive en la casa de unos humanos donde toma prestadas pequeñas cosas para sobrevivir. Cuando conoce a Sho, un niño humano, su vida cambia para siempre. La película es elogiada por su animación detallada, personajes profundos y emotiva banda sonora de Cécile Corbel.",
    categoria: "Fantasia/Aventura",
    date:2010
  },
  {
    id: 18,
    name: "La colina de las amapolas",
    src: "../assets/img/La colina de las amapolas (2011).jpg",
    descripcion: " Umi Matsuzaki es una estudiante de secundaria que vive en Yokohama en 1963, quien se hace amiga de un chico que trabaja en el periódico escolar, Shun Kazama. Ambos descubren un secreto que los une y luchan por protegerlo mientras enfrentan los cambios sociales y políticos de la época.",
    categoria: "Fantasia/Familia",
    date:2011
  },
  {
    id: 19,
    name: "El viento se levanta",
    src: "../assets/img/El viento se levanta (2013).jpg",
    descripcion: "Es una película basada en la vida del ingeniero aeronáutico Jiro Horikoshi, quien diseñó los aviones de combate japoneses durante la Segunda Guerra Mundial. La historia sigue a Jiro desde su infancia hasta su vida adulta, mientras persigue su sueño de diseñar aviones y enfrenta los desafíos personales y los conflictos actuales. Es una historia conmovedora y única que encanta tanto a niños como adultos.",
    categoria: "Guerra/Romance",
    date:2013
  },
  {
    id: 20,
    name: "El cuento de la princesa Kaguya",
    src: "../assets/img/El cuento de la princesa Kaguya (2013).jpg",
    descripcion: "El cuento de la princesa Kaguya es una historia clásica de la cultura japonesa que ha sido transmitida de generación en generación. En esta película se cuenta la vida de una princesa que nace en un bambú y es adoptada por un campesino y su esposa. A medida que la princesa crece, se convierte en una mujer hermosa y talentosa, lo que atrae la atención de muchos pretendientes y la hace sentir cada vez más alejada de su verdadera identidad. ",
    categoria: "Fantasia/Drama",
    date:2013
  },
  {
    id: 21,
    name: "El recuerdo de Marnie",
    src: "../assets/img/El recuerdo de Marnie (2014).webp",
    descripcion: "En esta entrega Anna es la protagonista, quien es enviada a vivir con sus tíos en una pequeña ciudad costera debido a su asma. Allí, Anna conoce a una misteriosa chica llamada Marnie, con quien establece una amistad profunda y significativa. A medida que Anna y Marnie se acercan, descubren que sus vidas están más entrelazadas de lo que pensaban.",
    categoria: "Fantasia/Familia",
    date:2014
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
        <p class="mt-2">Año de Emisión: ${infoMovies[i].date}</p>
        <p class="mt-2">Categoria: ${infoMovies[i].categoria}</p>
        <button type="button" id="${infoMovies[i].id}" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal${infoMovies[i].id}">Saber más</button>
        </div>
        </div>
       `;
    document.getElementById("card").innerHTML += ` 
      <div class="modal fade" id="exampleModal${infoMovies[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${infoMovies[i].name}</h5>
          </div>
          <div class="modal-body">
          ${infoMovies[i].descripcion}
          <img src="${infoMovies[i].src}" width="100%" height="600x"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            
          </div>
        </div>
      </div>
    </div>`;
    // let idbutton = document.getElementById(`${infoMovies[i].id}`);
    // // console.log(idbutton);
    // obtenerModal(idbutton,movies);
  }
}
// function obtenerModal(idbutton,infoMovies) {
//   for (var i = 0; i < infoMovies.length; i++) {
//     if (infoMovies[i].id === idbutton) {

//     }
//   }
// }
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
                <p class="mt-2">Año de Emisión: ${infoMovies[i].date}</p>
                <p class="mt-2">${infoMovies[i].categoria}</p>
                <button type="button" class="btn btn-info">Saber más</button>
                </div>
                </div>`;
    } else if (categoria === "Categorias") {
      showGallery(movies);
    }
  }
}
