function showMessage(){
  alert('Thank you! Your inquiry submitted successfully.')
}

const cards = document.querySelectorAll('.plan-card, .service-card')

window.addEventListener('scroll', () => {

  cards.forEach(card => {

    const top = card.getBoundingClientRect().top

    if(top < window.innerHeight - 100){
      card.style.opacity = '1'
      card.style.transform = 'translateY(0)'
    }

  })

})

cards.forEach(card => {
  card.style.opacity = '0'
  card.style.transform = 'translateY(50px)'
  card.style.transition = '0.8s ease'
})