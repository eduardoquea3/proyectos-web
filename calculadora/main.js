let number = document.querySelectorAll('.number')
let output = document.querySelector('.output')
let borrar = document.querySelector('.borrar')
let reiniciar = document.querySelector('.reiniciar')
let ope = document.querySelectorAll('.ope')
let igual = document.querySelector('.igual')
let punto = document.querySelector('.punto')

output.value = '0'
number.forEach(btn => {
  btn.addEventListener('click', () => {
    if (output.value == '0') {
      output.value = btn.value
    } else {
      output.value += btn.value
    }
    operacion = true
    puntuacion = true
  })
})
borrar.addEventListener('click', () => {
  if (output.value.length > 1) {
    output.value = output.value.slice(0, -1)
  } else {
    output.value = 0
  }
})
reiniciar.addEventListener('click', () => {
  output.value = 0
})
operacion = true
ope.forEach(opt => {
  opt.addEventListener('click', () => {
    if (output.value == '0') {
      return
    } else if (operacion == true) {
      output.value += opt.value
      operacion = false
      return operacion
    } else {
      output.value = output.value.slice(0, -1) + opt.value
    }
  })
})
igual.addEventListener('click', () => {
  output.value = eval(output.value)
})
puntuacion = true
punto.addEventListener('click', () => {
  if (puntuacion == true) {
    output.value += punto.value
    puntuacion = false
    return puntuacion
  } else {
    return
  }
})

document.addEventListener('keydown', (e) => {
  console.log(e)
})