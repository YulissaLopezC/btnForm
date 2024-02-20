export function createBtn(typeBtn, innerTextbtn){
    //crear elemento li, btn
    const newLi = document.createElement("li");
    const newBtn = document.createElement("button");

    //acceder a los atributos del btn
    newBtn.type = typeBtn;
    newBtn.innerHTML = innerTextbtn;

    //anadir el button al li
    newLi.appendChild(newBtn);

    return newLi;
}