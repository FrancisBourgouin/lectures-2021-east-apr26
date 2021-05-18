const title = document.querySelector('header h1')
title.innerText = "YAS QUIZ PARTAY"
title.style.color = "yellow"

const randomizer = () => Math.floor(Math.random() * 255)

const changeBackground = (event) => {
  const r = randomizer()
  const g = randomizer()
  const b = randomizer()
  const colorString = `rgb(${r},${g},${b})`

  event.target.parentElement.style.background = colorString
}

document.addEventListener('click', changeBackground)

const showImageAnswer = (event) => {
  document.querySelector('.result').innerHTML = ""
  const image = document.createElement('img')
  if (event.target.id === 'yes') {
    image.src = "/images/smart1.webp"
  }
  if (event.target.id === 'no') {
    image.src = "/images/smart2.gif"
  }
  if (event.target.id === 'depends') {
    image.src = "/images/genius.webp"
  }

  document.querySelector('.result').appendChild(image)
}


const buttons = document.querySelectorAll('button')

for (const button of buttons) {
  button.addEventListener('click', showImageAnswer)

}