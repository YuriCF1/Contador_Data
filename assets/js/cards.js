//Gets
const adTrab = document.getElementById('maisTrabalho')
const linha = document.querySelector('.card_linhas')
const inicio = document.getElementById('cards_centro');

let metas = 0;
//Chamadas

adTrab.addEventListener("click", function (e) {
    inicio.style.display = 'none';

    const cardNovo = document.createElement("form"); // Cria um novo elemento <>
    cardNovo.className = "card_ad"; // Define o atributo de identificação HTML

    if (metas < 5) {
        metas++
        cardNovo.innerHTML = "\
        <input id='card_ad__titulo' class='card_ad__titulo' type='text' placeholder='Meta "+metas+"'>\
                    <label for='meta'>O que você vai fazer?</label>\
                    <textarea class='card_ad__inputs' id='meta' type='text' rows='4' cols='10'\
                        placeholder='Irei...'></textarea>\
                    <label for='tempo'>Qual o prazo?</label>\
                        <input class='card_ad__tempo' type='datetime-local' name='' id='r-data'>\
                        <input class='botao' type='submit' value='Começar!' id='botao' name='botao'>\
                    <div><time id='f_dias'></time>\
                        <time id='f_horas'></time>\
                        <time id='f_minutos'></time>\
                        <time id='f_segundos'></time>\
                    </div>\
       "
    linha.appendChild(cardNovo);

    } else {
        alert('Foque nas 5')

    }

})



