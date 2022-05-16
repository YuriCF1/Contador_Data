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




// botao.addEventListener('click', function (e) {
//     const diaDado = document.getElementById('r-data').value;
//     const horaDada = document.getElementById('r-hora').getHours;

//     function startTimer(duration, display) {
//         var timer = duration, minutes, seconds;
//         setInterval(function () {
//             minutes = parseInt(timer / 60, 10);
//             seconds = parseInt(timer % 60, 10);
//             minutes = minutes < 10 ? "0" + minutes : minutes;
//             seconds = seconds < 10 ? "0" + seconds : seconds;
//             display.textContent = minutes + ":" + seconds;

//             if (--timer < 0) {
//                 timer = duration;
//             }
//             console.log(horaDada)

//         }, 1000);
//     }


//     var duration = horaDada * 3600000; // Converter para segundos
//     display = document.querySelector('#faltaDia'); // selecionando o timer
//     startTimer(duration, display); // iniciando o timer




// })






// //aqui vai sempre ser a hora atual
// var dataAtual = new Date();
// //como exemplo vou definir a data de fim com base na data atual
// var dataFinal = new Date();
// dataFinal.setDate(dataFinal.getDate() + 5);






botao.addEventListener('click', function (e) {
    const diaMostrado = document.getElementById('f_dias');
    const horaMostrado = document.getElementById('f_horas');
    const minutoMostrado = document.getElementById('f_minutos');
    

    e.preventDefault();
    const diaDado = document.getElementById('r-data');
    
    const minuteG = 1000 * 60;
    const hourG = minuteG * 60;
    const dayG = hourG * 24;
    const yearG = dayG * 365;
    
    const diaAgora = new Date();
    const diaTempo = diaAgora.getTime();

    const dataRecebida = new Date(diaDado.value)
    //const horaRecebida = dataRecebida.getHours();
    //const minutoRecebida = dataRecebida.getMinutes();
    
    // const dataCorrigida = new Date(dataRecebida.getUTCFullYear(), dataRecebida.getUTCMonth(),dataRecebida.getUTCDate());


    // toTimeString                                       ////////////////
    // reservar cada elemento em uma variável e subtrair. ///////////////


    const dataTempo = dataRecebida.getTime();
    //const horaTempo = horaRecebida.getTime();
    
    let diferenca = dataTempo - diaTempo;
    //let diferencaHora = horaTempo - diaTempo;

    let diasF = (diferenca / (dayG));
    let horasF = (diferenca) - (diasF * 1000 * 60 * 60 * 24);
    let minutosF = (horasF / (minuteG));

    let diasFm = Math.floor(diasF);
    let horasFm =  Math.floor(horasF);
    let minutosm = Math.floor(minutosF);
    // let horasF = Math.round(diferenca / (hourG));


    diaMostrado.innerHTML = diasFm;
    horaMostrado.innerHTML = horasFm;
    minutoMostrado.innerHTML = minutosm;

    console.log(dataRecebida)
    //console.log(horaRecebida)
    console.log(diaAgora)
    console.log(diasF)
    console.log(horasF)
    console.log(minutosF)
    // console.log('Milis')
    // console.log(diferenca)
    // console.log(diasF)
   
  
    
    
    
    
    
    
    
    // const diaDado = document.getElementById('r-data').value;


    // let substituir = diaDado - diapraValer;
    // console.log(diapraValer)

    // let d = new Date(diaDado);
    // let diaPego = d.getDate() + 1;


    // const horaDada = document.getElementById('r-hora').getHours;



    // //aqui vai sempre ser a hora atual
    // var dataAtual = new Date();

    // //como exemplo vou definir a data de fim com base na data atual
    // var dataFinal = new Date();
    // dataFinal.setDate(Math.abs(diaPego));

    // console.log(diaDado)

    // //aqui é a diferenca entre as datas, basicamente é com isso que voce calcula o tempo restante
    // var dateDiff;
    // var dias, horas, minutos, segundos;
    // var $dia = $('#f_dias');
    // var $hora = $('#f_horas');
    // var $minuto = $('#f_minutos');
    // var $segundo = $('#f_segundos');
    // var $debug = $('#debug');
    // var timer;



    // function update() {
    //     dateDiff = dataFinal - dataAtual;
    //     dateDiff = dateDiff / 1000;

    //     segundos = Math.floor((dateDiff % 60));

    //     dateDiff = dateDiff / 60;
    //     minutos = Math.floor((dateDiff % 60));

    //     dateDiff = dateDiff / 60;
    //     horas = Math.floor((dateDiff % 24));

    //     dias = Math.floor(dateDiff / 24);

    //     $dia.text(dias);
    //     $hora.text(horas);
    //     $minuto.text(minutos);
    //     $segundo.text(segundos);

    //     dataAtual.setSeconds(dataAtual.getSeconds() + 1);
    // }

    // update();
    // timer = setInterval(update, 1000);



})