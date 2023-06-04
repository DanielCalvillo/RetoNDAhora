document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenuToggle.addEventListener("click", function() {
    mobileMenu.classList.toggle("open");
  });

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function(item) {
    const question = item.querySelector(".question");

    question.addEventListener("click", function() {
      item.classList.toggle("open");
    });
  });
});

var experiencia_one = document.getElementById("experiencia_one");
var experiencia_two = document.getElementById("experiencia_two");
var experiencia_three = document.getElementById("experiencia_three");
var experiencia_four = document.getElementById("experiencia_four");
var experiencia_five = document.getElementById("experiencia_five");
var experiencia_six = document.getElementById("experiencia_six");

var description_one = document.getElementById("description_one");
var description_two = document.getElementById("description_two");
var description_three = document.getElementById("description_three");
var description_four = document.getElementById("description_four");
var description_five = document.getElementById("description_five");
var description_six = document.getElementById("description_six");


// Ésta api sólo trae placeholders como url
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    console.log(json[0].title)
    description_one.textContent =  json[0].title
    description_two.textContent =  json[1].title
    description_three.textContent = json[2].title
    description_four.textContent = json[3].title
    description_five.textContent = json[4].title
    description_six.textContent = json[5].title

     console.log(json)
    });

    var sandwichButton = document.getElementById('#sandwich-button');
    var navBar = document.querySelector('#mobile_nav_bar');
    console.log(sandwichButton)
    sandwichButton.addEventListener('click', function() {
      console.log('clicked')
      if(navBar.style.display === "none" || navBar.style.display === "") {
        navBar.style.display = "block";
      } else {
        navBar.style.display = "none";
      }
    });

    function handleClick() {
      if(navBar.style.display === "none" || navBar.style.display === "") {
        navBar.style.display = "block";
      } else {
        navBar.style.display = "none";
      }
    }