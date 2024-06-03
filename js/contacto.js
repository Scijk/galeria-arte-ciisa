document.addEventListener('DOMContentLoaded', function() {
    const textoMensaje = document.getElementById('mensaje');
    const tipoSolicitud = document.getElementById('tipoSolicitud');
    const btnEnviar = document.getElementById('liveToastBtn');

    textoMensaje.addEventListener('change', function(event) {
        console.log('cambia texto en textArea '+event.target.value)
        if(event.target.value.includes('compra')){
            tipoSolicitud.value = 'compra';
        } else if(event.target.value.includes('venta')){
            tipoSolicitud.value = 'venta';
        } else {
            tipoSolicitud.value = 'consulta';
        }
    })

    function showToast(textoToast){
        const toast = document.getElementById('liveToast');
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);
        const toastText = document.getElementById('toast-text');
        toastText.innerText = textoToast;
        toastBootstrap.show();
    }

    btnEnviar.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Ingresa a btn enviar')
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const direccion = document.getElementById('direccion');
        const telefono = document.getElementById('telefono');
        let formularioValido = true;
        let textoToast = '';
        if(campoInvalido(nombre)) {
            console.log('Falta nombre')
            textoToast = 'Debe agregar nombre a la solicitud.';
            formularioValido = false;
        }
        if(campoInvalido(email)){
            console.log('Falta email')
            textoToast = textoToast + '\nDebe agregar email a la solicitud.';
            formularioValido = false;
        }
        if(campoInvalido(direccion)){
            console.log('Falta direccion')
            textoToast = textoToast + '\nDebe agregar dirección a la solicitud.';
            formularioValido = false;
        }
        if(campoInvalido(telefono)){
            console.log('Falta telefono')
            textoToast = textoToast + '\nDebe agregar teléfono a la solicitud.';
            formularioValido = false;
        }
        if(campoInvalido(tipoSolicitud)){
            console.log('Falta tipo solicitud')
            textoToast = textoToast + '\nDebe seleccionar tipo de solicitud.';
            formularioValido = false;
        }
        if(campoInvalido(textoMensaje)){
            console.log('Falta mensaje')
            textoToast = textoToast + '\nDebe agregar un mensaje a la solicitud.';
            formularioValido = false;
        }
        if(formularioValido){
            textoToast = 'Su solicitud de contacto ha sido enviada con éxito.';
        }
        showToast(textoToast);
    });

    function campoInvalido(campo) {
        if(campo.value == undefined || campo.value == null || campo.value == '')
            return true;
        return false;
    }
});