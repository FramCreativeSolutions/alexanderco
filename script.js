let about = document.getElementsByClassName('container-about')[0];
let about_button = document.getElementById('about')
about_button.addEventListener('click',() => {
about.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let products2 = document.getElementById('products2');
let products_button = document.getElementById('products')
products_button.addEventListener('click',() => {
products2.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let services = document.getElementsByClassName('container-services')[0];
let services_button = document.getElementById('services')
services_button.addEventListener('click',() => {
services.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let contacts = document.getElementsByClassName('container-footer')[0];
let contacts_button = document.getElementById('contacts')
contacts_button.addEventListener('click',() => {
contacts.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let button_home = document.getElementById('button-home');
button_home.addEventListener('click',() => {
  products2.scrollIntoView({ 
  behavior: 'smooth' 
});
})






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
if (element.classList.toString().includes('service-number')){
  temp = 'service-number'
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
if (temp === 'service-number') {
  element.classList.add("zoom");
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

//---------------------------------------------------------------------------------------------------------------------
let products = document.getElementsByClassName("products")[0]
let scrolltoObj = document.getElementsByClassName('sri-lanka')[0]

let usa = document.getElementsByClassName('usa')[0];
usa.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./3.png" class="flag flag2"/><strong>Products from the USA</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Cereal</div><div>Chips</div><div>Popcorn</div><div>Oils</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let hungary = document.getElementsByClassName('hungary')[0];
hungary.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./5.png" class="flag flag2"/><strong>Products from Hungary</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Bourbon</div><div>Pet food</div><div>Snack foods</div><div>Meat</div><div>Vinegar</div><div>Oil seeds</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let italy = document.getElementsByClassName('italy')[0];
italy.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./10.png" class="flag flag2"/><strong>Products from Italy</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Wines</div><div>Olives</div><div>Pasta</div><div>Flour</div><div>Pesto</div><div>Rice</div><div>Processed vegetavles</div><div>Fish</div><div>Coffee</div><div>Oils</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let spain = document.getElementsByClassName('spain')[0];
spain.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./11.png" class="flag flag2"/><strong>Products from Spain</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Dry fruits and nuts</div><div>Wines</div><div>Citrus fruits</div><div>Pork meat</div><div>Saffron</div><div>Jam</div><div>Olives and olive oil</div><div>Honey</div><div>Jamon (ham)</div><div>Oils</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let mexico = document.getElementsByClassName('mexico')[0];
mexico.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./4.png" class="flag flag2"/><strong>Products from Mexico</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Avocado oil</div><div>Pecan nuts</div><div>Spirits</div><div>Vinegar</div><div>Soybeans</div><div>Corn</div><div>Avocados</div><div>Lime & berry fruits</div><div>Sugar & sweeteners</div><div>Peppers & chile</div><div>Dairy products</div><div>Tomatoes</div><div>Tequila & mezcal</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let chile = document.getElementsByClassName('chile')[0];
chile.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./2.png" class="flag flag2"/><strong>Products from Chile</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Fish fillets</div><div>Wine</div><div>Nuts</div><div>Corn</div><div>Fresh fruit</div><div>Dairy</div><div>Meat</div><div>Vegetables</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let japan = document.getElementsByClassName('japan')[0];
japan.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./13.png" class="flag flag2"/><strong>Products from Japan</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Noodles</div><div>Seaweed</div><div>Matcha Tea</div><div>Soy Sauce</div><div>Fresh fruit</div><div>Tofu</div><div>Fish</div><div>Miso Soup</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let sri_lanka = document.getElementsByClassName('sri-lanka')[0];
sri_lanka.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./7.png" class="flag flag2"/><strong>Products from Sri Lanka</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Cococnut</div><div>Arak</div><div>Nuts</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let hong_kong = document.getElementsByClassName('hong-kong')[0];
hong_kong.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./9.png" class="flag flag2"/><strong>Products from Hong Kong</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Seaweed</div><div>Rice</div><div>Nuts</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let singapore = document.getElementsByClassName('singapore')[0];
singapore.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./8.png" class="flag flag2"/><strong>Products from Singapore</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Dry fruits</div><div>Wine</div><div>Non-alcoholic beverages</div><div>Nuts</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let thailand = document.getElementsByClassName('thailand')[0];
thailand.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./14.png" class="flag flag2"/><strong>Products from Thailand</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Rice</div><div>Canned tuna</div><div>Sugar</div><div>Cassava meat</div><div>Canned Pineapple</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let new_zealand = document.getElementsByClassName('new-zeeland')[0];
new_zealand.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./6.png" class="flag flag2"/><strong>Products from New Zeeland</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Wine</div><div>Cotton</div><div>Sugar</div><div>Oil</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let australia = document.getElementsByClassName('australia')[0];
australia.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./12.png" class="flag flag2"/><strong>Products from Australia</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Cereal</div><div>Honey</div><div>Dairy</div><div>Meat</div><div>Dry fruits</div><div>Vinegar</div><div>Nuts</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let canada = document.getElementsByClassName('canada')[0];
canada.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./15.png" class="flag flag2"/><strong>Products from Canada</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Maple syrup</div><div>Bacon</div><div>Coffee</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let greece = document.getElementsByClassName('greece')[0];
greece.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./1.png" class="flag flag2"/><strong>Products from Greece</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Bottarga</div><div>Feta cheese</div><div>Olive oil</div><div>Pomegranate juice</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})