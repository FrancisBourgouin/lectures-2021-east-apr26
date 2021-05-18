// $(target).action()

$(document).ready(() => {


  const title = $('header h1')
  title.text("YAS QUIZ PARTAY")
  title.css('color', 'yellow')

  const randomizer = () => Math.floor(Math.random() * 255)

  const changeBackground = (event) => {
    const r = randomizer()
    const g = randomizer()
    const b = randomizer()
    const colorString = `rgb(${r},${g},${b})`
    console.log(event.target)
    $(event.target).parent().css('background', colorString)
  }

  $(document).on('click', changeBackground)


  const showImageAnswer = (event) => {

    $('.result').empty()

    const image = $('<img>')
    if (event.target.id === 'yes') {
      image.attr('src', "/images/smart1.webp")
    }
    if (event.target.id === 'no') {
      image.attr('src', "/images/smart2.gif")
    }
    if (event.target.id === 'depends') {
      image.attr('src', "/images/genius.webp")
    }

    $('.result').append(image)
  }

  $('button').on('click', showImageAnswer)


  // navigator.geolocation.getCurrentPosition(console.log, console.error)
})