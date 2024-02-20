export function createInput(labelName, inputType, id, inputName){
    //crear la li, label, input
    const newLi = document.createElement("li");

    //array de elemento label e input
    const elementos = [
        document.createElement("label"),
        document.createElement("input")
    ]

    //acceder a los atributos de los elementos label
    elementos[0].innerText = labelName;
    elementos[0].htmlFor = id;
    elementos[0].ariaLabel = "required";

    //acceder a los atributos de los elementos input
    elementos[1].type = inputType;
    elementos[1].id = id;
    elementos[1].name = inputName;
    elementos[1].required = true;

    //anadir con un bucle cada elemento del array a li
    elementos.forEach(function(elemento){
        newLi.appendChild(elemento);
    })

    //retornar li
    return newLi;
    
}