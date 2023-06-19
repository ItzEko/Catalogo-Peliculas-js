

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
]

//Funcion para mostrar la galeria de peliculas
function showGallery(infoMovies) {
    for(var i=0; i<infoMovies.length; i++) {
        document.getElementById('card').innerHTML +=`
        <div class="col-md-4 mt-3">
        <div class="card p-3 ps-5 pe-5"></div>
        </div>`
    }
    
}