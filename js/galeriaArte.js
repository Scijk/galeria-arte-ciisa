//Inserta barra de navegación en las páginas
var navbar = '<div class="navbar"><nav><a href="index.html">Inicio</a><a href="galeria.html">Galería</a><a href="contacto.html">Contacto</a><div id="navId"></div></nav></div>';
document.body.insertAdjacentHTML("afterbegin", navbar);

var footer ='<div class="footer"><ul><li><a href="https://vercel.com/chris-projects" target="_blank">Vercel</a></li><li><a href="mailto:christopher.gome.araya@ciisa.cl" target="_blank">Email</a></li><li><a href="https://github.com/Scijk" target="_blank">Github</a></li><li><p>👋</p></li></ul><ul><p>Creado por Christopher Gómez</p></ul></div>'
document.body.insertAdjacentHTML("beforeend", footer);

showSection();
// Función para mostrar la sección seleccionada y ocultar las demás
function showSection() {
    var sections = document.querySelectorAll('.section');
    var sectionId = sections[0].getAttribute("id");
    document.getElementById('navId').setAttribute('class','');
    switch(sectionId){
        case 'inicio':
            document.getElementById('navId').setAttribute('class','animation start-inicio')
            break;
        case 'galeria':
            document.getElementById('navId').setAttribute('class','animation start-galeria')
            break;
        default:
            document.getElementById('navId').setAttribute('class','animation start-contacto')
    }
}

// Función para avanzar y retroceder en la galería de la sección de galería
const carouselImages = document.querySelectorAll('.carousel img');
const carouselButtons = document.querySelectorAll('.carousel-btn');
const previewImages = document.querySelectorAll('.carousel-preview img');

let currentIndex = 0;

function updateCarousel() {
    carouselImages.forEach((img, index) => {
        if (index === currentIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
    previewImages.forEach((img, index) => {
    if (index === currentIndex) {
    img.classList.add('active');
} else {
    img.classList.remove('active');
}
});

}
    function prevSlide() {
    currentIndex = (currentIndex === 0) ? carouselImages.length - 1 : currentIndex - 1;
    updateCarousel();
}
    function nextSlide() {
    currentIndex = (currentIndex === carouselImages.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}
    function jumpToSlide(index) {
    currentIndex = index;
    updateCarousel();
}