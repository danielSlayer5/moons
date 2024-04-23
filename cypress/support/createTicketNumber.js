const fs = require('fs')
const faker = require("faker")

let numeroAleatorio = Math.floor(Math.random() * 10000000000);
let numeroAleatorioString = numeroAleatorio.toString().padStart(10, '0');

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Función para generar un objeto con valores aleatorios
function generarValoresAleatorios() {
  return {
    ticketNumber: ('cash'+ numeroAleatorioString)
  }
}
// Generar 10 valores aleatorios
const valoresAleatorios = generarValoresAleatorios();
// Convertir el objeto a formato JSON
const jsonValores = JSON.stringify(valoresAleatorios, null, 2);
// Guardar el JSON en un archivo
fs.writeFile('cypress/fixtures/ticketNumber.json', jsonValores, 'utf8', (err) => {
  if (err) {
    console.error('Error al guardar el archivo:', err);
    return;
  }
  console.log('Valores guardados correctamente en valores.json');
});