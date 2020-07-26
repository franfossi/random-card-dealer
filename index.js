
window.onload = () => {

    // contenedor
    let container = document.createElement("div");
    container.classList.add("container", "pt-4", "d-flex", "justify-content-center");

    // carta
    let card = document.createElement("div");
    card.classList.add("d-flex", "flex-nowrap");
    card.style.background = "white"
    card.style.width = "15rem";
    card.style.height = "20rem";
    card.style.position = "relative";
    card.style.border = "1px solid black";
    card.style.borderRadius = "10px";
    card.style.fontSize = "70px";
    card.innerHTML = `<div class="w-100 h-100 justify-content-center d-flex align-items-center"></div>`;
    
    // pinta de arriba
    let top = document.createElement("div");
    top.style.position = "absolute";
    top.style.height = "1rem";
    top.style.width = "1rem";
    top.style.left = "50%";
    top.style.top = "50%";
    top.style.transform = "translate(-550%, -800%)"; 
    top.innerHTML = `<div class="w-50 h-100 justify-content-center d-flex align-items-center"></div>`;

    // pinta de abajo
    let bottom = document.createElement("div");
    bottom.style.position = "absolute";
    bottom.style.height = "1rem";
    bottom.style.width = "1rem";
    bottom.style.left = "50%";
    bottom.style.top = "50%";
    bottom.style.transform = "translate(470%, 650%)";
    bottom.innerHTML = `<div class="w-50 h-100 justify-content-center d-flex align-items-center"></div>`;

    // arreglos y generaración de números y pintas aleatorios 
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let randomNumber = Math.floor(Math.random() * numbers.length);
    let suits = ["♠", "♣", "♥", "♦"];
    let randomSuit = Math.floor(Math.random() * suits.length);

    // ciclo para generar los números de la carta
    for (child of card.children) {
        // condición para parear colores de pintas con números
        if (suits[randomSuit] == "♥" || suits[randomSuit] == "♦") {
            child.style.color = "red";
        }  
        child.style.fontFamily = "arial";
        child.classList.add(`${numbers[randomNumber]}`);
        child.innerHTML = `<p class="text-center">${numbers[randomNumber]}</p>`;
    }

    // ciclo para generar las pintas de arriba
    for (child of top.children) {
        child.classList.add(`${suits[randomSuit]}`);
        child.innerHTML = `${suits[randomSuit]}`;
    }

    // ciclo para generar las pintas de abajo
    for (child of bottom.children) {
        child.classList.add(`${suits[randomSuit]}`);
        child.innerHTML = `${suits[randomSuit]}`;
    }

    // enviar al HTML
    document.body.appendChild(container);
    container.appendChild(card);
    card.appendChild(bottom);
    card.appendChild(top);
}
