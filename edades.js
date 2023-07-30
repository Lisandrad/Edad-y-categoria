

function edades() {
  // let menor;
  // let adulto;
  // let mayor;
  
 let valorEntrada = prompt('Introducir Su Edad')
  const valor = parseFloat(valorEntrada);
  console.log(valor);

  if (valor <= 17) {
    alert("Eres menor de edad.")
  } else if (valor >= 18 && valor <=64) {
    alert("Eres adulto.")
  } else if ( valor <=65) {
    alert("Eres un adulto mayor.")}

edades();
}
edades();