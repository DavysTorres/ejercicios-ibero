let numeros = [10, 5, 8, 3, 12, 7]

function findMaxMin(numeros) {
  let max = numeros[0]
  let min = numeros[0]

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i]
    }
    else if (numeros[i] < min) {
      min = numeros[i]
    }
  }

  return { max, min }
}

document.querySelector('#mi-boton').addEventListener('click', function () {
  let resultado = findMaxMin(numeros)
  console.log(resultado)
})
