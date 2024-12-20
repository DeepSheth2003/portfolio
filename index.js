// <<<<<<<<<<<<<<<<<<<<<<<<  Card Flipping >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const flippingBackButton = document.getElementById('toBack');
const flippingFrontButton = document.getElementById('toFront');
const card = document.querySelector('.inner-side');

flippingBackButton.addEventListener('click', () => {
    card.classList.add('flip-card');
});

flippingFrontButton.addEventListener('click', () => {
    card.classList.remove('flip-card');
});


// <<<<<<<<<<<<<<<<<<< email >>>>>>>>>>>>>>>>>>>>>>>>>

const emailOpen = document.querySelectorAll("#sidebar-email, #hire-email, #contact-email");

emailOpen.forEach(email => {
    email.addEventListener("click", () => {
      window.open("mailto:deepsheth56@gmail.com");
    });
  });

// <<<<<<<<<<<<<<<<<<< Call >>>>>>>>>>>>>>>>>>>>>>>>>

const numberOpen = document.querySelectorAll("#sidebar-call, #contact-call");
const myNumber = 6353304906;

numberOpen.forEach(call => {
    call.addEventListener("click", () => {
      window.open(`tel:${myNumber}`);
    });
  });


//>>>>>>>>>>>>>>>>>>>>>>>> amazon >>>>>>>>>>>>>>>>>>>>>>>>>>


const amazonOpen = document.querySelectorAll(".amazon, .amazon");

amazonOpen.forEach(amazon=>{
    amazon.addEventListener("click",()=>{
        window.open("https://deepsheth2003.github.io/deeppamazon","_blank");
    });
});


//>>>>>>>>>>>>>>>>>>>>>>>> instagram >>>>>>>>>>>>>>>>>>>>>>>>>>

const insta = document.getElementById("instagram");

insta.addEventListener("click",()=>{
    window.open("https://www.instagram.com/deep_.088","_blank");
});


//>>>>>>>>>>>>>>>>>>>>>>>> whatsapp >>>>>>>>>>>>>>>>>>>>>>>>>>

const whatsapp = document.getElementById("whatsapp");

whatsapp.addEventListener("click",()=>{
    window.open("https://wa.me/+916353304906","_blank");
});


//>>>>>>>>>>>>>>>>>>>> Mode Switching >>>>>>>>>>>>>>>>>>>>>>>>>>>>

const modeSwitch = document.querySelectorAll("#dark-mode, #dark-mode");

modeSwitch.forEach(mode=>{
  mode.addEventListener("click",()=>{
    document.body.classList.toggle("switch-to-dark");
    mode.classList.toggle("light-mode");
  });
});


