//ADDING THE INPUT USING A MINIMUM TIME 
const inputDataLocal = document.getElementById('data');
let min = inputDataLocal.min = new Date().toISOString().slice(0, 16); //Pegando a string da data, mas até os mínutos
// let min1 = inputDataLocal.min = new Date().toISOString().split(".")[0];
// let min2 = inputDataLocal.min = new Date().toISOString()

const inputData = () => {
    inputDataLocal.innerHTML = `
    <input class='card_ad__tempo' type='datetime-local' min=${min} name='' id='r-data-'>  
    `
}

inputData();
