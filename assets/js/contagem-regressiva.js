const botao = document.getElementById('botao');
const contagem = document.getElementById('contagem');

// //_______________________________________________________________
// const faltaDia = document.getElementById('faltaDia');
// const faltaHora = document.getElementById('faltaHora');



// botao.addEventListener('click', function (e) {
//     const diaDado = document.getElementById('r-data').value;
//     const horaDada = document.getElementById('r-hora').value;

//     function faltaDiaC() {
//         let dataAtual = new Date().value; //getDay = Dia da semana

//         let dataMostrada =  diaDado - dataAtual;
//         faltaDia.innerHTML= dataMostrada;

//     } 

//   //faltaDia.innerHTML = 

//     console.log(diaDado)
//     console.log(horaDada)

//     function mostraTempo() {
//         setInterval(faltaDiaC, 1000);

//     }

//     mostraTempo();

// })








botao.addEventListener('click', function (e) {
    const diaDado = document.getElementById('r-data').value;
    const horaDada = document.getElementById('r-hora').getHours;

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
            console.log(horaDada)

        }, 1000);
    }


    var duration = horaDada * 3600000; // Converter para segundos
    display = document.querySelector('#faltaDia'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer




})
