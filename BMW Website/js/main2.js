console.log(":)");


// VARIABELEN
var navigatie = document.querySelector("nav");

var megaMenu1 = document.querySelector("nav .mega-menu1");
var item1 = document.querySelector(".item1");

var megaMenu2 = document.querySelector("nav .mega-menu2");
var item2 = document.querySelector(".item2");

var megaMenu3 = document.querySelector("nav .mega-menu3");
var item3 = document.querySelector(".item3");


// ITEM 
item1.onmouseover = function () {
    megaMenu1.classList.remove("hidden");
    megaMenu1.classList.add("show");
    navigatie.classList.add("opengeklapt");
};

item1.onmouseout = function () {
    megaMenu1.classList.remove("show");
    megaMenu1.classList.add("hidden");
    navigatie.classList.remove("opengeklapt");
};


// ITEM 2
item2.onmouseover = function () {
    megaMenu2.classList.remove("hidden");
    megaMenu2.classList.add("show");
    navigatie.classList.add("opengeklapt");
};

item2.onmouseout = function () {
    megaMenu2.classList.remove("show");
    megaMenu2.classList.add("hidden");
    navigatie.classList.remove("opengeklapt");
};


// ITEM 3
item3.onmouseover = function () {
    megaMenu3.classList.remove("hidden");
    megaMenu3.classList.add("show");
    navigatie.classList.add("opengeklapt");
};

item3.onmouseout = function () {
    megaMenu3.classList.remove("show");
    megaMenu3.classList.add("hidden");
    navigatie.classList.remove("opengeklapt");
};





const auto4 = document.querySelectorAll(".bmw-autos li:nth-child(4)");
const auto3 = document.querySelectorAll(".bmw-autos li:nth-child(3)");
const auto2 = document.querySelectorAll(".bmw-autos li:nth-child(2)");
const auto1 = document.querySelectorAll(".bmw-autos li:nth-child(1)");

const autoDetails4 = document.querySelectorAll(".auto-info-bmw4");
const autoDetails3 = document.querySelectorAll(".auto-info-bmw3");
const autoDetails2 = document.querySelectorAll(".auto-info-bmw2");
const autoDetails1 = document.querySelectorAll(".auto-info-bmw1");

function autoDetailShow4() {
  autoDetails2.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails4.forEach((detail) => {
    detail.style.display = detail.style.display === "none" ? "flex" : "none";
  });

  autoDetails1.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails3.forEach((detail) => {
    detail.style.display = "none";
  });

  
}

function autoDetailShow3() {
  autoDetails2.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails3.forEach((detail) => {
    detail.style.display = detail.style.display === "none" ? "flex" : "none";
  });

  autoDetails1.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails4.forEach((detail) => {
    detail.style.display = "none";
  });
}

function autoDetailShow2() {
  autoDetails3.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails2.forEach((detail) => {
    detail.style.display = detail.style.display === "none" ? "flex" : "none";
  });

  autoDetails1.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails4.forEach((detail) => {
    detail.style.display = "none";
  });
}

function autoDetailShow1() {
  autoDetails3.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails1.forEach((detail) => {
    detail.style.display = detail.style.display === "none" ? "flex" : "none";
  });

  autoDetails2.forEach((detail) => {
    detail.style.display = "none";
  });

  autoDetails4.forEach((detail) => {
    detail.style.display = "none";
  });
}


auto4.forEach((auto) => {
  auto.addEventListener("click", autoDetailShow4);
});

auto3.forEach((auto) => {
  auto.addEventListener("click", autoDetailShow3);
});

auto2.forEach((auto) => {
  auto.addEventListener("click", autoDetailShow2);
});

auto1.forEach((auto) => {
  auto.addEventListener("click", autoDetailShow1);
});
