document.addEventListener("DOMContentLoaded", function(){

    //variables
    const btnForm = document.getElementById("btnForm");

    btnForm.addEventListener("click", ()=>{
         const newForm = document.createElement("form");
         const newInput = document.createElement("input");
         newInput.type = "text";
         console.log(newInput.type)

         newForm.appendChild(newInput);
         document.body.appendChild(newForm);
         
    })
    
})
