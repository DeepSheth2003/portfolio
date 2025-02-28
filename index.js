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


const currency = document.getElementById("currency");
const portfolio = document.getElementById("portfolio");
const amazon = document.getElementById("amazon");


currency.addEventListener("click",()=>{
    window.open("https://deepsheth2003.github.io/currencyConv","_blank");
});

portfolio.addEventListener("click",()=>{
    window.open("https://deepsheth2003.github.io/portfolio","_blank");
});

amazon.addEventListener("click",()=>{
    window.open("https://deepsheth2003.github.io/deeppamazon","_blank");
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

/************** Resume Button */

const resume = document.getElementById("resumeBtn");

resume.addEventListener("click",()=>{
  window.open('./Source/DeepOriginResume.pdf');
});

/************* Attch Link */

const link = document.querySelectorAll("#attachLink , #attachLink");

link.forEach((Goto)=>{
  Goto.addEventListener("click",()=>{
    window.open("https://github.com/DeepSheth2003","_blank");
  })
});


/************* Likedin Link */

const linkedin = document.getElementById("linkedin");

linkedin.addEventListener("click",()=>{
  window.open("https://www.linkedin.com/in/deep-sheth-378164344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app","_blank");
});

