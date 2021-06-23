
let burger = document.getElementsByClassName('burger')[0];
let close = document.getElementsByClassName('close')[0];

let home = document.getElementsByClassName('logo-white')[0];
let homePage = document.getElementsByClassName('container-landing')[0];
home.addEventListener('click',() => {
homePage.scrollIntoView({ 
  behavior: 'smooth' 
});
if (burger.style.display !== 'none') {
  document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
  burger.style.display = 'block'
  close.style.display = 'none'
  productsMobile.scrollIntoView({ 
    behavior: 'smooth' 
  });

}
})

let about = document.getElementsByClassName('container-about')[0];
let about_button = document.getElementById('about')
about_button.addEventListener('click',() => {
document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
about.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let about_button2 = document.getElementById('about2')
about_button2.addEventListener('click',() => {
document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
burger.style.display = 'block'
close.style.display = 'none'
about.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let products2 = document.getElementById('productsDesk');
let products_button = document.getElementById('products')
products_button.addEventListener('click',() => {
products2.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let products_button2 = document.getElementById('products2')
let productsMobile = document.getElementById('products-mobile')
products_button2.addEventListener('click',() => {
  document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
burger.style.display = 'block'
close.style.display = 'none'
productsMobile.scrollIntoView({ 
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
let services_button2 = document.getElementById('services2')
let servicesMobile = document.getElementById('servicesMobile')
services_button2.addEventListener('click',() => {
  document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
burger.style.display = 'block'
close.style.display = 'none'
servicesMobile.scrollIntoView({ 
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
let contact_button2 = document.getElementById('contacts2')
contact_button2.addEventListener('click',() => {
document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
burger.style.display = 'block'
close.style.display = 'none'
contacts.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let button_home = document.getElementById('button-home');
button_home.addEventListener('click',() => {
    document.getElementById('productsDesk').scrollIntoView({ 
  behavior: 'smooth' 
});
if (burger.style.display !== 'none') {
  document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
  burger.style.display = 'block'
  close.style.display = 'none'
  productsMobile.scrollIntoView({ 
    behavior: 'smooth' 
  });

}
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
let tempUsa = false
let usa2 = document.getElementsByClassName('usa2')[0];
usa2.addEventListener('click',() => {
tempUsa = !tempUsa
if (tempUsa) {
  document.getElementsByClassName("dropdown-products-usa")[0].style.display = 'block'
  document.getElementsByClassName("chevron-usa")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-usa")[0].style.display = 'none'
  document.getElementsByClassName("chevron-usa")[0].style.transform = 'rotate(90deg)'
}
})

let hungary = document.getElementsByClassName('hungary')[0];
hungary.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./5.png" class="flag flag2"/><strong>Products from Hungary</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Bourbon</div><div>Pet food</div><div>Snack foods</div><div>Meat</div><div>Vinegar</div><div>Oil seeds</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempHungary = false
let hungary2 = document.getElementsByClassName('hungary2')[0];
hungary2.addEventListener('click',() => {
tempHungary = !tempHungary
if (tempHungary) {
  document.getElementsByClassName("dropdown-products-hungary")[0].style.display = 'block'
  document.getElementsByClassName("chevron-hungary")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-hungary")[0].style.display = 'none'
  document.getElementsByClassName("chevron-hungary")[0].style.transform = 'rotate(90deg)'
}
})

let italy = document.getElementsByClassName('italy')[0];
italy.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./10.png" class="flag flag2"/><strong>Products from Italy</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Wines</div><div>Olives</div><div>Pasta</div><div>Flour</div><div>Pesto</div><div>Rice</div><div>Processed vegetavles</div><div>Fish</div><div>Coffee</div><div>Oils</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempItaly = false
let italy2 = document.getElementsByClassName('italy2')[0];
italy2.addEventListener('click',() => {
tempItaly = !tempItaly
if (tempItaly) {
  document.getElementsByClassName("dropdown-products-italy")[0].style.display = 'block'
  document.getElementsByClassName("chevron-italy")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-italy")[0].style.display = 'none'
  document.getElementsByClassName("chevron-italy")[0].style.transform = 'rotate(90deg)'
}
})

let spain = document.getElementsByClassName('spain')[0];
spain.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./11.png" class="flag flag2"/><strong>Products from Spain</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Dry fruits and nuts</div><div>Wines</div><div>Citrus fruits</div><div>Pork meat</div><div>Saffron</div><div>Jam</div><div>Olives and olive oil</div><div>Honey</div><div>Jamon (ham)</div><div>Oils</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempSpain = false
let spain2 = document.getElementsByClassName('spain2')[0];
spain2.addEventListener('click',() => {
  tempSpain = !tempSpain
if (tempSpain) {
  document.getElementsByClassName("dropdown-products-spain")[0].style.display = 'block'
  document.getElementsByClassName("chevron-spain")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-spain")[0].style.display = 'none'
  document.getElementsByClassName("chevron-spain")[0].style.transform = 'rotate(90deg)'
}
})

let mexico = document.getElementsByClassName('mexico')[0];
mexico.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./4.png" class="flag flag2"/><strong>Products from Mexico</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Avocado oil</div><div>Pecan nuts</div><div>Spirits</div><div>Vinegar</div><div>Soybeans</div><div>Corn</div><div>Avocados</div><div>Lime & berry fruits</div><div>Sugar & sweeteners</div><div>Peppers & chile</div><div>Dairy products</div><div>Tomatoes</div><div>Tequila & mezcal</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempMexico = false
let mexico2 = document.getElementsByClassName('mexico2')[0];
mexico2.addEventListener('click',() => {
  tempMexico = !tempMexico
if (tempMexico) {
  document.getElementsByClassName("dropdown-products-mexico")[0].style.display = 'block'
  document.getElementsByClassName("chevron-mexico")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-mexico")[0].style.display = 'none'
  document.getElementsByClassName("chevron-mexico")[0].style.transform = 'rotate(90deg)'
}
})

let chile = document.getElementsByClassName('chile')[0];
chile.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./2.png" class="flag flag2"/><strong>Products from Chile</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Fish fillets</div><div>Wine</div><div>Nuts</div><div>Corn</div><div>Fresh fruit</div><div>Dairy</div><div>Meat</div><div>Vegetables</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempChile = false
let chile2 = document.getElementsByClassName('chile2')[0];
chile2.addEventListener('click',() => {
  tempChile = !tempChile
if (tempChile) {
  document.getElementsByClassName("dropdown-products-chile")[0].style.display = 'block'
  document.getElementsByClassName("chevron-chile")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-chile")[0].style.display = 'none'
  document.getElementsByClassName("chevron-chile")[0].style.transform = 'rotate(90deg)'
}
})

let japan = document.getElementsByClassName('japan')[0];
japan.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./13.png" class="flag flag2"/><strong>Products from Japan</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Noodles</div><div>Seaweed</div><div>Matcha Tea</div><div>Soy Sauce</div><div>Fresh fruit</div><div>Tofu</div><div>Fish</div><div>Miso Soup</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempJapan = false
let japan2 = document.getElementsByClassName('japan2')[0];
japan2.addEventListener('click',() => {
  tempJapan = !tempJapan
if (tempJapan) {
  document.getElementsByClassName("dropdown-products-japan")[0].style.display = 'block'
  document.getElementsByClassName("chevron-japan")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-japan")[0].style.display = 'none'
  document.getElementsByClassName("chevron-japan")[0].style.transform = 'rotate(90deg)'
}
})

let sri_lanka = document.getElementsByClassName('sri-lanka')[0];
sri_lanka.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./7.png" class="flag flag2"/><strong>Products from Sri Lanka</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Cococnut</div><div>Arak</div><div>Nuts</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempLanka = false
let lanka2 = document.getElementsByClassName('sri-lanka2')[0];
lanka2.addEventListener('click',() => {
  tempLanka = !tempLanka
if (tempLanka) {
  document.getElementsByClassName("dropdown-products-lanka")[0].style.display = 'block'
  document.getElementsByClassName("chevron-lanka")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-lanka")[0].style.display = 'none'
  document.getElementsByClassName("chevron-lanka")[0].style.transform = 'rotate(90deg)'
}
})

let hong_kong = document.getElementsByClassName('hong-kong')[0];
hong_kong.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./9.png" class="flag flag2"/><strong>Products from Hong Kong</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Seaweed</div><div>Rice</div><div>Nuts</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempHong = false
let hong2 = document.getElementsByClassName('hong-kong2')[0];
hong2.addEventListener('click',() => {
  tempHong = !tempHong
if (tempHong) {
  document.getElementsByClassName("dropdown-products-kong")[0].style.display = 'block'
  document.getElementsByClassName("chevron-kong")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-kong")[0].style.display = 'none'
  document.getElementsByClassName("chevron-kong")[0].style.transform = 'rotate(90deg)'
}
})

let singapore = document.getElementsByClassName('singapore')[0];
singapore.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./8.png" class="flag flag2"/><strong>Products from Singapore</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Dry fruits</div><div>Wine</div><div>Non-alcoholic beverages</div><div>Nuts</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempSingapore = false
let singapore2 = document.getElementsByClassName('singapore2')[0];
singapore2.addEventListener('click',() => {
  tempSingapore = !tempSingapore
if (tempSingapore) {
  document.getElementsByClassName("dropdown-products-singapore")[0].style.display = 'block'
  document.getElementsByClassName("chevron-singapore")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-singapore")[0].style.display = 'none'
  document.getElementsByClassName("chevron-singapore")[0].style.transform = 'rotate(90deg)'
}
})

let thailand = document.getElementsByClassName('thailand')[0];
thailand.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./14.png" class="flag flag2"/><strong>Products from Thailand</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Rice</div><div>Canned tuna</div><div>Sugar</div><div>Cassava meat</div><div>Canned Pineapple</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempThailand = false
let thailand2 = document.getElementsByClassName('thailand2')[0];
thailand2.addEventListener('click',() => {
  tempThailand = !tempThailand
if (tempThailand) {
  document.getElementsByClassName("dropdown-products-thailand")[0].style.display = 'block'
  document.getElementsByClassName("chevron-thailand")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-thailand")[0].style.display = 'none'
  document.getElementsByClassName("chevron-thailand")[0].style.transform = 'rotate(90deg)'
}
})

let new_zealand = document.getElementsByClassName('new-zeeland')[0];
new_zealand.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./6.png" class="flag flag2"/><strong>Products from New Zealand</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Wine</div><div>Cotton</div><div>Sugar</div><div>Oil</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempZeeland = false
let zeeland2 = document.getElementsByClassName('new-zeeland2')[0];
zeeland2.addEventListener('click',() => {
  tempZeeland = !tempZeeland
if (tempZeeland) {
  document.getElementsByClassName("dropdown-products-zeeland")[0].style.display = 'block'
  document.getElementsByClassName("chevron-zeeland")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-zeeland")[0].style.display = 'none'
  document.getElementsByClassName("chevron-zeeland")[0].style.transform = 'rotate(90deg)'
}
})

let australia = document.getElementsByClassName('australia')[0];
australia.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./12.png" class="flag flag2"/><strong>Products from Australia</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Cereal</div><div>Honey</div><div>Dairy</div><div>Meat</div><div>Dry fruits</div><div>Vinegar</div><div>Nuts</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempAustralia = false
let australia2 = document.getElementsByClassName('australia2')[0];
australia2.addEventListener('click',() => {
  tempAustralia = !tempAustralia
if (tempAustralia) {
  document.getElementsByClassName("dropdown-products-australia")[0].style.display = 'block'
  document.getElementsByClassName("chevron-australia")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-australia")[0].style.display = 'none'
  document.getElementsByClassName("chevron-australia")[0].style.transform = 'rotate(90deg)'
}
})

let canada = document.getElementsByClassName('canada')[0];
canada.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./15.png" class="flag flag2"/><strong>Products from Canada</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Maple syrup</div><div>Bacon</div><div>Coffee</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempCanada = false
let canada2 = document.getElementsByClassName('canada2')[0];
canada2.addEventListener('click',() => {
tempCanada = !tempCanada
if (tempCanada) {
  document.getElementsByClassName("dropdown-products-canada")[0].style.display = 'block'
  document.getElementsByClassName("chevron-canada")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-canada")[0].style.display = 'none'
  document.getElementsByClassName("chevron-canada")[0].style.transform = 'rotate(90deg)'
}
})

let greece = document.getElementsByClassName('greece')[0];
greece.addEventListener('click',() => {
document.getElementsByClassName("products")[0].innerHTML = `<img src="./1.png" class="flag flag2"/><strong>Products from Greece</strong><hr class="products-hr"/><div style="height: 10px;"></div><div>Bottarga</div><div>Feta cheese</div><div>Olive oil</div><div>Pomegranate juice</div>`
products.style.display = 'block'
scrolltoObj.scrollIntoView({ 
  behavior: 'smooth' 
});
})
let tempGreece = false
let greece2 = document.getElementsByClassName('greece2')[0];
greece2.addEventListener('click',() => {
  tempGreece = !tempGreece
if (tempGreece) {
  document.getElementsByClassName("dropdown-products-greece")[0].style.display = 'block'
  document.getElementsByClassName("chevron-greece")[0].style.transform = 'rotate(270deg)'
} else {
  document.getElementsByClassName("dropdown-products-greece")[0].style.display = 'none'
  document.getElementsByClassName("chevron-greece")[0].style.transform = 'rotate(90deg)'
}
})



burger.addEventListener('click',() => {
document.getElementsByClassName("container-menu-items2")[0].style.display = 'flex'
burger.style.display = 'none'
close.style.display = 'block'
})

close.addEventListener('click',() => {
document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
burger.style.display = 'block'
close.style.display = 'none'
})