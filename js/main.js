"use strict";

// navbar menu

function myFunction(x) {
  x.classList.toggle("change");
}

// navbar scroll

window.addEventListener("scroll", function () {
  let header = this.document.querySelector("nav");
  header.classList.toggle("bg-color", window.scrollY > 0);
});

// loader

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

//cursor

var cursor = document.querySelector(".cursor-mouse-1");
var cursorinner = document.querySelector(".cursor-mouse-2");
var a = document.querySelectorAll("a, button");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

// SINGLE PAGENAV

// const menuItems = document.querySelectorAll("nav ul li");
// const sections = document.querySelectorAll("section");

// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function handleScroll() {
//   sections.forEach((section, index) => {
//     if (isInViewport(section)) {
//       menuItems.forEach((menuItem) => {
//         menuItem.classList.remove("active");
//       });
//       menuItems[index].classList.add("active");
//     }
//   });
// }
// window.addEventListener("scroll", handleScroll);

// cog opened

let settingOpen = document.querySelector(".cog-block");
let paletteOpen = document.querySelector(".color-selection");

settingOpen.onclick = () => {
  paletteOpen.classList.toggle("open");
  settingOpen.classList.toggle("open");
};

let mouse = document.querySelector(".mouse");
let mousemove = document.querySelector(".mousemove");
let cursorM = document.querySelector(".cursor-mouse");
let svg = document.querySelector(".svg");
let mouseH = document.querySelector(".cursor");

mouse.onclick = function () {
  svg.classList.add("active");
  cursorM.classList.remove("active");
  mouseH.classList.remove("active");
};

mousemove.onclick = function () {
  svg.classList.remove("active");
  cursorM.classList.add("active");
  mouseH.classList.add("active");
};

// color

document.querySelectorAll(".colors .color").forEach((btn) => {
  btn.onclick = () => {
    const color = btn.style.background;
    document.querySelector(":root").style.setProperty("--active-color", color);
  };
});

// filter img

$(".filters ul li").click(function () {
  $(".filters ul li").removeClass("active");
  $(this).addClass("active");
});

function filter(category) {
  const galleryItems = document.getElementsByClassName("item");

  if (category === "all") {
    for (let i = 0; i < galleryItems.length; i++) {
      galleryItems[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < galleryItems.length; i++) {
      galleryItems[i].style.display = "none";
    }

    const filteredItems = document.getElementsByClassName(category);
    for (let i = 0; i < filteredItems.length; i++) {
      filteredItems[i].style.display = "block";
    }
  }
}

// typer

var typed = new Typed(".input",{
  strings:["devoloper","freelancer","desinger"],
  typeSpeed: 130,
  backSpeed: 120,
  loop: true,
})

// form submit

// const contactForm = document.getElementById("contactForm");
// contactForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const phone = document.getElementById("phone").value;
//   const message = document.getElementById("message").value;
//   const fromData = {
//     name: name,
//     email: email,
//     phone: phone,
//     message: message,
//   };
//   fetch("/submit_contact", {
//     method: "POST",
//     body: JSON.stringify(fromData),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Response;", data);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// });
