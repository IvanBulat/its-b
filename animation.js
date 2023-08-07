document.getElementById('arrowL').onclick = leftClick
document.getElementById('arrowR').onclick = rightClick
const cir = document.querySelector('.circle')

let currentPosition = 0
let deg = 0

function rightClick() {
  if (currentPosition === 0) {
    currentPosition += 8
    changes(currentPosition)
    cir.style.transform = `rotate(${deg += 40}deg)`
  }
  else {
    currentPosition -=1
    if (currentPosition === 0) {
      currentPosition = 9
      changes(currentPosition)
      currentPosition = 0
    } else {
      changes(currentPosition)
    }
    cir.style.transform = `rotate(${deg += 40}deg)`
  }
}

function leftClick() {
  currentPosition += 1
  changes(currentPosition)
  if (currentPosition >= 9) currentPosition = 0
  cir.style.transform = `rotate(${deg -= 40}deg)`
  console.log(currentPosition)
}

function changes() {
  if (currentPosition === 1) {
    change('#5CAC0E', '#DDFFBC', '#5CAC0E', './photo/break2.png', 'Breakfast', 'The 1-st meal')
  }
  if (currentPosition === 2) {
    change('#5CAC0E', '#DDFFBC', '#5CAC0E', './photo/dinner1.png', 'Breakfast', 'The 1-st meal')
  }
  if (currentPosition === 3) {
    change('#FEA150', '#FEA150', 'white', './photo/lunch1.png', 'Lunch', 'The 2-nd meal')
  }
  if (currentPosition === 4) {
    change('#FEA150', '#FEA150', 'white', './photo/break.png', 'Lunch', 'The 2-nd meal')
  }
  if (currentPosition === 5) {
    change('#FEA150', '#FEA150', 'white', './photo/lunch1.png', 'Lunch', 'The 2-nd meal')
  }
  if (currentPosition === 6) {
    change('#FF8989', '#FF8989', 'white', './photo/dinner1.png', 'Dinner', 'The 3-rd meal')
  }
  if (currentPosition === 7) {
    change('#FF8989', '#FF8989', 'white', './photo/break2.png', 'Dinner', 'The 3-rd meal')
  }
  if (currentPosition === 8) {
    change('#FF8989', '#FF8989', 'white', './photo/lunch1.png', 'Dinner', 'The 3-rd meal')
  }
  if (currentPosition === 9) {
    change('#5CAC0E', '#DDFFBC', '#5CAC0E', './photo/breakfast1.png', 'Breakfast', 'The 1-st meal')
  }
}

async function change(color1, color2, color3, src, meal, numOfMeal) {
  const h1 = document.querySelector('h1'),
    h2 = document.querySelector('h2'),
    elips = document.querySelector('.elips'),
    animationBut = document.querySelector('.arrow1'),
    animationBut1 = document.querySelector('.arrow2'),
    but = document.querySelector('.but'),
    img = document.getElementById('img'),
    cir = document.querySelector('.circle');

  h1.style.color = color1
  h1.innerText = meal
  h2.innerText = numOfMeal
  elips.style.backgroundColor = color2
  animationBut.style.backgroundColor = color1
  animationBut1.style.backgroundColor = color1
  but.style.backgroundColor = color1
  cir.style.borderColor = color3
  img.style.opacity = 0.4
  await new Promise((resolve, reject) => setTimeout(resolve, 400))
  img.src = src
  img.style.opacity = 1
}

document.getElementById('butLock').onclick = lock

let lockState = 'open'
let idInterval

async function lock() {
  const lock = document.getElementById('lock'),
    arrowL = document.getElementById('arrowL'),
    arrowR = document.getElementById('arrowR'),
    navBut1 = document.getElementById('navBut1'),
    navBut2 = document.getElementById('navBut2'),
    navBut3 = document.getElementById('navBut3') 

  if (lockState === 'close') {
    lock.style.top = '1px'
    lock.style.left = '16px'
    lock.style.transform = 'rotate(30deg)'

    arrowL.style.display = 'block'
    arrowR.style.display = 'block'
    await new Promise((resolve, reject) => setTimeout(resolve, 1000)) 
    arrowL.style.opacity = 1
    arrowR.style.opacity = 1
    navBut1.disabled = false
    navBut2.disabled = false
    navBut3.disabled = false

    clearInterval(idInterval)

    lockState = 'open'
  } else {
    lock.style.top = '3px'
    lock.style.left = '13px'
    lock.style.transform = 'rotate(0deg)'

    arrowL.style.opacity = 1
    arrowR.style.opacity = 1
    arrowL.style.opacity = 0
    arrowR.style.opacity = 0
    await new Promise((resolve, reject) => setTimeout(resolve, 1000)) 
    arrowL.style.display = 'none'
    arrowR.style.display = 'none'

    navBut1.disabled = true
    navBut2.disabled = true
    navBut3.disabled = true

    idInterval = setInterval(leftClick, 2000)

    lockState = 'close'
  }
}

document.getElementById('navBut1').onclick = function () {
  switchMeal(9)
  change('#5CAC0E', '#DDFFBC', '#5CAC0E', './photo/breakfast1.png', 'Breakfast', 'The 1-st meal')
}
document.getElementById('navBut2').onclick = function () {
  switchMeal(3)
  change('#FEA150', '#FEA150', 'white', './photo/lunch1.png', 'Lunch', 'The 2-nd meal')
}
document.getElementById('navBut3').onclick = function () {
  switchMeal(6)
  change('#FF8989', '#FF8989', 'white', './photo/dinner1.png', 'Dinner', 'The 3-rd meal')
}

function switchMeal(positionMeal) {
  if (positionMeal === currentPosition) return
  if (positionMeal === 9 && currentPosition === 0) return
  if (currentPosition - positionMeal < 0) {
    cir.style.transform = `rotate(${deg += (positionMeal - currentPosition) * 40}deg)`
  } else {
    cir.style.transform = `rotate(${deg -= (currentPosition - positionMeal) * 40}deg)`
  }
  if (positionMeal === 9) currentPosition = 0
  else currentPosition = positionMeal
}

document.getElementById('but').onclick = go 

function go() {
  window.location.pathname = 'animation2.html'
}