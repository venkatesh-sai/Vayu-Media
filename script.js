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
// WAIT UNTIL PAGE LOADS

document.addEventListener("DOMContentLoaded", () => {

  // ELEMENTS

  const cookiePopup = document.getElementById("cookiePopup");

  const acceptCookie = document.getElementById("acceptCookie");

  const denyCookie = document.getElementById("denyCookie");

  // STOP IF POPUP DOESN'T EXIST

  if(!cookiePopup) return;

  // CHECK SAVED CHOICE

  const cookieChoice = localStorage.getItem("cookieChoice");

  // HIDE POPUP IF ALREADY CHOSEN

  if(cookieChoice === "accepted" || cookieChoice === "denied"){

    cookiePopup.style.display = "none";

  }

  // ACCEPT BUTTON

  if(acceptCookie){

    acceptCookie.addEventListener("click", () => {

      // SAVE CHOICE

      localStorage.setItem("cookieChoice", "accepted");

      // SMOOTH HIDE

      cookiePopup.style.opacity = "0";

      cookiePopup.style.transform = "translateY(5vh)";

      setTimeout(() => {

        cookiePopup.style.display = "none";

      }, 400);

      console.log("Cookies Accepted");

    });

  }

  // DENY BUTTON

  if(denyCookie){

    denyCookie.addEventListener("click", () => {

      // SAVE CHOICE

      localStorage.setItem("cookieChoice", "denied");

      // SMOOTH HIDE

      cookiePopup.style.opacity = "0";

      cookiePopup.style.transform = "translateY(5vh)";

      setTimeout(() => {

        cookiePopup.style.display = "none";

      }, 400);

      console.log("Cookies Denied");

    });

  }

});

const form = document.getElementById("contactForm");

if(form){

  form.addEventListener("submit", async function(e){

    e.preventDefault();

    const formData = new FormData(form);

    const object = Object.fromEntries(formData);

    const json = JSON.stringify(object);

    try{

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
          },
          body:json
        }
      );

      const result = await response.json();

      if(result.success){

        alert("Thank You! Your request has been submitted successfully.");

        form.reset();

      }

      else{

        alert("Something went wrong!");

      }

    }

    catch(error){

      alert("Error submitting form!");

    }

  });

}
document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menuToggle");

  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    if(mobileMenu.classList.contains("active")){

      menuToggle.innerHTML = "✕";

    }

    else{

      menuToggle.innerHTML = "☰";

    }

  });

});