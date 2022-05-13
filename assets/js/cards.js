//Gets
const adTrab = document.getElementById('maisTrabalho')
const linha = document.querySelector('.card_linhas')


//Chamadas

adTrab.addEventListener("click", function (e) {
    const cardNovo = document.createElement("div"); // Cria um novo elemento <div>
    cardNovo.className = "card_ad"; // Define o atributo de identificação HTML
    cardNovo.innerHTML = "<p>Teste</p>"
    linha.appendChild(cardNovo);
    

})

