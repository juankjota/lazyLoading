
const isIntersecting = (entry)=>{
    return entry.isIntersecting // true dentro de la pantalla

}

const loadImage = (entry)=>{
    const container = entry.target;// container(el node es el div)
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargue la imagen
    imagen.src = url;

    

    //des-registra la imagen (unlisten)
    observer.unobserve(container)
}


const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting)
    .forEach(loadImage)
})

//

export const registerImage = (imagen) =>{
    //IntersectationObserver --> observer(imagen)
    observer.observe(imagen);
}

