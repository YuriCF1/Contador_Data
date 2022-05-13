//Gets
const adTrab = document.getElementById('maisTrabalho')
const linha = document.querySelector('.card_linhas')
const inicio = document.getElementById('cards_centro');

let metas = 1;
//Chamadas

adTrab.addEventListener("click", function (e) {
    inicio.style.display = 'none';


    const cardNovo = document.createElement("div"); // Cria um novo elemento <>
    cardNovo.className = "card_ad"; // Define o atributo de identificação HTML

if (metas < 6) {

    if (metas == 1) {
        
        cardNovo.innerHTML = "\
        <input id='card_ad__titulo' class='card_ad__titulo' type='text' placeholder='Meta 1'>\
        <label for='meta'>O que você vai fazer?</label>\
        <textarea class='card_ad__inputs' id='meta' type='text' rows='4' cols='10' placeholder='Irei...'></textarea>\
        <label for='tempo'>Qual o prazo?</label>\
        <input class='card_ad__tempo' type='date' name='' id=''>\
        "
        linha.appendChild(cardNovo);
    }
    if (metas == 2) {
        
        cardNovo.innerHTML = "\
        <input id='card_ad__titulo' class='card_ad__titulo' type='text' placeholder='Meta 2'>\
        <label for='meta'>O que você vai fazer?</label>\
        <textarea class='card_ad__inputs' id='meta' type='text' rows='4' cols='10' placeholder='Irei...'></textarea>\
        <label for='tempo'>Qual o prazo?</label>\
        <input class='card_ad__tempo' type='date' name='' id=''>\
        "
        linha.appendChild(cardNovo);
    }
    if (metas == 3) {
        
        cardNovo.innerHTML = "\
        <input id='card_ad__titulo' class='card_ad__titulo' type='text' placeholder='Meta 3'>\
        <label for='meta'>O que você vai fazer?</label>\
        <textarea class='card_ad__inputs' id='meta' type='text' rows='4' cols='10' placeholder='Irei...'></textarea>\
        <label for='tempo'>Qual o prazo?</label>\
        <input class='card_ad__tempo' type='date' name='' id=''>\
        "
        linha.appendChild(cardNovo);
    }

    if (metas == 4) {
        
        cardNovo.innerHTML = "\
        <input id='card_ad__titulo' class='card_ad__titulo' type='text' placeholder='Meta 4'>\
        <label for='meta'>O que você vai fazer?</label>\
        <textarea class='card_ad__inputs' id='meta' type='text' rows='4' cols='10' placeholder='Irei...'></textarea>\
        <label for='tempo'>Qual o prazo?</label>\
        <input class='card_ad__tempo' type='date' name='' id=''>\
        "

        linha.appendChild(cardNovo);
    }    

    if (metas == 5) {

        cardNovo.innerHTML = "\
        <input id='card_ad__titulo' class='card_ad__titulo' type='text' placeholder='Meta 5 '>\
        <label for='meta'>O que você vai fazer?</label>\
        <textarea class='card_ad__inputs' id='meta' type='text' rows='4' cols='10' placeholder='Irei...'></textarea>\
        <label for='tempo'>Qual o prazo?</label>\
        <input class='card_ad__tempo' type='date' name='' id=''>\
        "

        linha.appendChild(cardNovo);
    }    
    
}
    
metas++

})

