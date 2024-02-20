import { createInput } from "./inputComponent.js";
import { createBtn } from "./inputBtn.js";
document.addEventListener("DOMContentLoaded", function(){

    //variables
    const btnForm = document.getElementById("btnForm");
    const btnDel = createBtn("button", "Eliminar");

    //acceder a la clase del buton del form
    btnForm.classList.add("btnFormClass");

    btnForm.addEventListener("click", ()=>{
        //Crear un nuevo elemento form, ul
        const newForm = document.createElement("form");
        const newUl = document.createElement("ul");
        //Anade una clase de estilo al elemento form
        newForm.classList.add("contenedor");

        //Anade el ul al form
        newForm.appendChild(newUl);

        //crear cada uno de los li con input y label 
        newUl.appendChild(createInput("Nombre", "text", "nombre", "usu_name"));
        newUl.appendChild(createInput("Apellido", "text", "apellido","usu_apellido"));
        newUl.appendChild(createInput("Correo", "email", "mail","usu_email"));

        //crear button de enviar
        newUl.appendChild(createBtn("submit", "Enviar"));
        newUl.appendChild(btnDel);

        document.body.appendChild(newForm);

        //desabilita el boton despues de crear el form 1 vez
        btnForm.disabled = true;

        //elimina el formulario y abilita el boton de crear
        btnDel.addEventListener("click", ()=>{
            document.body.removeChild(newForm);
            btnForm.disabled = false;
        })
    })



    
    
})
