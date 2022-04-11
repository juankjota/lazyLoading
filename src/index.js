/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { registerImage } from "./lazy";

const maximun = 122;
const minimun = 1;

const random = () => Math.floor(Math.random() * (maximun - minimun)) + minimun;

const createImageNode = () =>{

    const container = document.createElement('div');
    container.className = 'p-4';
    container.className = 'bg';

    const imagen = document.createElement('img');
    imagen.className = "mx-auto";
    imagen.width = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);
    
    return container;
}

const nuevaImagen = createImageNode();

const mountNode = document.getElementById('images');

const addButton = document.querySelector('button');

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
}

addButton.addEventListener('click',addImage);

const deleteButton = document.querySelector('.miClase');
const deleteImage = ()=>{
    if(mountNode.hasChildNodes()){
        while(mountNode.firstChild){
            mountNode.removeChild(mountNode.firstChild);
        }
    }
}
deleteButton.addEventListener('click',deleteImage)




