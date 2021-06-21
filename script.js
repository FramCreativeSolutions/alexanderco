const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1.25) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
    let temp = 'no'
    if (element.classList.toString().includes('about-img')) {
        temp = 'about-img'
    } 
    if (element.classList.toString().includes('about-all-text')){
        temp = 'about-all-text'
    }
    if (element.classList.toString().includes('black-square3')){
      temp = 'black-square3'
  }
  if (element.classList.toString().includes('black-square4')){
    temp = 'black-square4'
}
if (element.classList.toString().includes('black-square5')){
  temp = 'black-square5'
}
if (element.classList.toString().includes('black-square6')){
  temp = 'black-square6'
}
if (element.classList.toString().includes('inner-circle')){
  temp = 'inner-circle'
}

    if (temp === 'about-img'){
        element.classList.add("scrolled1");
    } 
    if (temp === 'about-all-text') {
        element.classList.add("scrolled2");
    }
    if (temp === 'black-square3') {
      element.classList.add("scrolled3");
  }
  if (temp === 'black-square4') {
    element.classList.add("scrolled4");
}
if (temp === 'black-square5') {
  element.classList.add("scrolled5");
}
if (temp === 'black-square6') {
  element.classList.add("scrolled6");
}
if (temp === 'inner-circle') {
  element.classList.add("rotate");
}
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled2");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

let usa = document.getElementsByClassName('usa')[0];
let products = document.getElementsByClassName("products")[0]
usa.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./3.png" class="flag"/><strong>USA</strong><div style="height: 10px;"></div><div>Cereal</div><div>Chips</div><div>Popcorn</div><div>Oils</div>`
products.style.display = 'block'
products.scrollIntoView({ 
  behavior: 'smooth' 
});
})
