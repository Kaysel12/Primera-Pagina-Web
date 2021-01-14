const contenedor = document.querySelector(`.contenedorImagenes`);
const elegirImagen = document.querySelectorAll(`.imagenesElegir`);
const imagenSelect = document.querySelector(`.imagenSelecta`);
const caja = document.querySelector(`.texto`)

elegirImagen.forEach(elegir => {
    elegir.addEventListener(`click`, ()=>{
        selecion(elegir.getAttribute(`src`));

        contenedor.classList.toggle(`spread`)
    });
});

const selecion = (elegir)=>{
    imagenSelect.src = elegir;
};

contenedor.addEventListener(`click`, (e)=>{
    if(contenedor.classList.contains(`spread`) && e.target != imagenSelect && e.target != elegirImagen && e.target != caja){
        contenedor.classList.toggle(`spread`);
    };
});

// Funcion para los botones
const boton = document.getElementById(`boton`).disabled = true;