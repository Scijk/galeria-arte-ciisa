
document.addEventListener('DOMContentLoaded', function() {
    console.log('carga dom')
    var imageModal = document.getElementById('imageModal');
    const botonesEliminar = document.querySelectorAll('.btn-Eliminar');
    const imagenes = document.querySelectorAll('.imagenGaleria');


    function levantaModal(event) {
        console.log('funcion levanta modal')
        imageModal.src = event.target.src;
        $('#imgModal').modal('show');
    }

    function eliminarImagen(event) {
        console.log('funcion eliminar modal')
        const divImagen = event.target.closest('.col-12');
        divImagen.remove();
    }

    imagenes.forEach(function(imagenes) {
        console.log('event levanta modal')
        imagenes.addEventListener('click', levantaModal);
    });

    botonesEliminar.forEach(function(btn) {
        console.log('funcion btn eliminar')
        btn.addEventListener('click', eliminarImagen);
    });

});
