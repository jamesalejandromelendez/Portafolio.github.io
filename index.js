let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
} 

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


function initializeForm() {
    const $form = document.querySelector('#form');
    const $buttonMailto = document.querySelector('#trucazo');

    $form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();
        const form = new FormData($form);

        $buttonMailto.setAttribute('href', `mailto:jamesalejandromelendez@hotmail.com?subject=${form.get('tema')}&body=${form.get('mensaje')}%0A%0A${form.get('nombre')} ${form.get('telefono')}`);
        $buttonMailto.click();
    }
}

document.addEventListener('DOMContentLoaded', initializeForm);