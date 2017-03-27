var celdas = document.getElementsByName('celda');
celdas[0].focus();


var comprobar = function(){
    /*for (var i = 0; i < celdas.length; i++) {
    if (celdas[i].value.length == 0){
      alert ("Hay campos vacíos"); // salen alert todas las veces, debe salir 1 sola vez
    }*/

  if ((celdas[0].value.length == 0) || (celdas[1].value.length == 0) || (celdas[2].value.length == 0) || (celdas[3].value.length == 0) ||
      (celdas[4].value.length == 0) || (celdas[5].value.length == 0) || (celdas[6].value.length == 0) || (celdas[7].value.length == 0) ||
      (celdas[8].value.length == 0) || (celdas[9].value.length == 0) || (celdas[10].value.length == 0) || (celdas[11].value.length == 0) ||
      (celdas[12].value.length == 0) || (celdas[13].value.length == 0) ||(celdas[14].value.length == 0) || (celdas[15].value.length == 0)){
        alert ("Hay campos vacíos");
        celdas[0].focus();

  } else if ((celdas[0].value != celdas[1].value)&&(celdas[1].value != celdas[2].value)&&(celdas[2].value != celdas[3].value)&&
    (celdas[4].value != celdas[5].value)&&(celdas[5].value!= celdas[6].value)&&(celdas[6].value != celdas[7].value)&&
    (celdas[8].value != celdas[9].value)&&(celdas[9].value != celdas[10].value)&&(celdas[10].value != celdas[11].value)&&
    (celdas[12].value != celdas[13].value)&&(celdas[13].value != celdas[14].value)&&(celdas[14].value != celdas[15].value)&&

    (celdas[0].value != celdas[1].value)&&(celdas[1].value != celdas[4].value)&&(celdas[4].value != celdas[5].value)&&
    (celdas[2].value != celdas[3].value)&&(celdas[3].value != celdas[6].value)&&(celdas[6].value != celdas[7].value)&&
    (celdas[8].value != celdas[9].value)&&(celdas[9].value != celdas[12].value)&&(celdas[12].value != celdas[13].value)&&
    (celdas[10].value != celdas[11].value)&&(celdas[11].value != celdas[14].value)&&(celdas[14].value != celdas[15].value)&&

    (celdas[0].value != celdas[2].value)&&(celdas[2].value != celdas[8].value)&&(celdas[8].value != celdas[10].value)&&
    (celdas[1].value != celdas[3].value)&&(celdas[3].value != celdas[9].value)&&(celdas[9].value != celdas[11].value)&&
    (celdas[4].value != celdas[6].value)&&(celdas[6].value != celdas[12].value)&&(celdas[12].value != celdas[14].value)&&
    (celdas[5].value != celdas[7].value)&&(celdas[7].value != celdas[13].value)&&(celdas[13].value != celdas[15].value)){
      alert ("Felicidades, ha realizado el Mini Sudoku correctamente");

  } else{
      alert("No lo lograste, intenta de nuevo");
      celdas[0].focus();
  }


  for (var i = 0; i < celdas.length; i++) {
    if (!(/[1-4]/.test(celdas[i].value))){
      alert ("Recuerda que los números válidos son 1,2,3,4");
      celdas[i].focus();
    }
  }

}

var repite= function(){
  for (var i = 0; i < celdas.length; i++) {
    celdas[i].value = "";
    celdas[i].focus();
  }
}
