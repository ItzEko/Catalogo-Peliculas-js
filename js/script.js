

let arraySearch=[];

let movies =[
    {
        id:1,
        name:'Castillo en el cielo',
        src:'../assets/img/castillo en el cielo.jpg',
        descripcion: 'Castillo en el cielo'
    },
    {
        id:2,
        name:'La tumba de las luciérnagas',
        src:'../assets/img/La-tumba-de-las-luciernagas-HD-1080p.webp',
        descripcion: 'La tumba de las luciérnagas'
    },
    {
        id:3,
        name:'Mi vecino Totoro',
        src:'../assets/img/Mi vecino Totoro (1988).jpg',
        descripcion: 'Mi vecino Totoro'
    },
    {
        id:4,
        name:'Kiki, la aprendiz de bruja',
        src:'../assets/img/Kiki, la aprendiz de bruja (1989).jpg',
        descripcion: 'Nicky, la aprendiz de bruja'
    },
    {
        id:5,
        name:'Recuerdos del ayer',
        src:'../assets/img/Recuerdos del ayer (1991).jpg',
        descripcion: 'Recuerdos del ayer'
    },
    {
        id:6,
        name:'Porco Rosso',
        src:'../assets/img/Porco Rosso (1992).jpg',
        descripcion: 'Porco Rosso'
    },
    {
        id:7,
        name:'Puedo escuchar el mar',
        src:'../assets/img/Puedo escuchar el mar (1993).jpg',
        descripcion: 'Puedo escuchar el mar'
    },
    {
        id:8,
        name:'Pompoko',
        src:'../assets/img/Pompoko (1994).jpg',
        descripcion: 'Pompoko'
    },
    {
        id:9,
        name:'Susurros del corazón',
        src:'../assets/img/Susurros del corazón (1995).webp',
        descripcion: 'Susurros del corazón'
    },
    {
        id:10,
        name:'La princesa Mononoke',
        src:'../assets/img/La princesa Mononoke (1997).jpg',
        descripcion: 'Puedo escuchar el mar'
    },
    {
        id:11,
        name:'Mis vecinos los Yamada',
        src:'../assets/img/Mis vecinos los Yamada (1999).jpg',
        descripcion: 'Puedo escuchar el mar'
    },{
        id:12,
        name:'El viaje de Chihiro ',
        src:'../assets/img/El viaje de Chihiro (2001).webp',
        descripcion: 'El viaje de Chihiro '
    },
    {
        id:13,
        name:'Haru en el reino de los gatos',
        src:'../assets/img/Haru en el reino de los gatos (2002).jpg',
        descripcion: 'Haru en el reino de los gatos'
    },
    {
        id:14,
        name:'El increible castillo vagabundo',
        src:'../assets/img/El castillo ambulante (2004).jpg',
        descripcion: 'El castillo ambulante'
    },
    {
        id:15,
        name:'Cuentos de Terramar ',
        src:'../assets/img/Cuentos de Terramar (2006).jpg',
        descripcion: 'Haru en el reino de los gatos'
    },
    {
        id:16,
        name:'Ponyo en el acantilado',
        src:'../assets/img/Ponyo en el acantilado (2008).jpg',
        descripcion: 'Ponyo en el acantilado'
    },
    {
        id:17,
        name:'Arrietty y el mundo de los diminutos',
        src:'../assets/img/Arrietty y el mundo de los diminutos (2010).webp',
        descripcion: 'Arrietty y el mundo de los diminutos'
    },
    {
        id:18,
        name:'La colina de las amapolas',
        src:'../assets/img/La colina de las amapolas (2011).jpg',
        descripcion: 'La colina de las amapolas'
    },
    {
        id:19,
        name:'El viento se levanta',
        src:'../assets/img/El viento se levanta (2013).jpg',
        descripcion: 'El viento se levanta'
    },
    {
        id:20,
        name:'El cuento de la princesa Kaguya',
        src:'../assets/img/El cuento de la princesa Kaguya (2013).jpg',
        descripcion: 'Haru en el reino de los gatos'
    },
    {
        id:21,
        name:'El recuerdo de Marnie',
        src:'../assets/img/El recuerdo de Marnie (2014).webp',
        descripcion: 'El recuerdo de Marnie'
    },
]

//Funcion para mostrar la galeria de peliculas, ocupamos un for para recorrrer la informacion
function showGallery(infoMovies) {

    document.getElementById("card").innerText  ="";

    for(var i=0; i<infoMovies.length; i++) {
        document.getElementById('card').innerHTML +=`
        <div class="col-md-4 mt-3">
        <div class="card p-3 ps-5 pe-5">
        <h4 classs="text-capitalize text-center">${infoMovies[i].name}</h4>
        <img src="${infoMovies[i].src}" width="100%" height="320px"/>
        <p class="mt-2">${infoMovies[i].descripcion}</p>
        <button type="button" class="btn btn-info">Saber más</button>
        </div>
        </div>`
    }
    
}
//mandamos a traer la funcion con el objeto que hicimos de la pelicula 
showGallery(movies);

//vamos a hacer la funcion de buscar con el input con el evento "keyup" proporcionan un código que indica qué tecla se presiona
document.getElementById("nameMovie").addEventListener("keyup", function(){
    let nameMov=document.getElementById("nameMovie").value;
    arraySearch= movies.filter(function(peli){
        if (peli.name.includes(nameMov)) {
            return peli.name;
        }
    });
    if (this.value=="") {
        showGallery(movies);
        
    }else{
        if (arraySearch=="") {
            document.getElementById("para").style.display='block';
            document.getElementById("card").innerHTML = "";
        }else{
            showGallery(arraySearch);
            document.getElementById("para").style.display='none';
        }
    }
});