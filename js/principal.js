let tempoDecorridoEmSegundos = 11
let intervaloId = null
const surprise = document.querySelector('.botao')
const tempoNaTela = document.querySelector('#timer')
const imagem = document.querySelector('.imagem')
const body = document.querySelector('body')
const titulo = document.querySelector('title')

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        zerar()
        alert('VIADO')
        surpresa()
        tempoNaTela.innerHTML = `` 
        titulo.innerHTML = `FELIZ ANIVERSARIO`
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}


surprise.addEventListener('click', iniciar) 

function iniciar () {
    intervaloId = setInterval(contagemRegressiva, 1000)
    surprise.remove()
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null 
}
function mostrarTempo() {
    const tempo = tempoDecorridoEmSegundos 
    tempoNaTela.innerHTML = `${tempo}` 
}

function surpresa () {
    const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250)
    imagem.style.opacity = '1'
}

