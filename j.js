//get slider items | array.form[ES6 features]

const sliderImg = Array.from(
  document.querySelectorAll(".slider-container img")
);

//get number of slides
const slidesCount = sliderImg.length;

//set current slide
let currentSlide = 1;

//slide number element
const slideNumberElement = document.getElementById("slider-number");

//prev and next button
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

//hundel click on prev and next button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//create main ul element
const bulletElement = document.createElement("ul");

//set id on created ul element
bulletElement.setAttribute("id", "bullet-ul");

//create list items based on array slide count
for (let i = 1; i <= slidesCount; i++) {
  console.log("1");
  const bulletItem = document.createElement("li");
  console.log(bulletItem);

  //set custom attribute
  bulletItem.setAttribute("data-index", i);
  //set item content
  bulletItem.appendChild(document.createTextNode(i));
  //append items to the main parents
  bulletElement.appendChild(bulletItem);
  console.log(bulletElement);
}

//add the created ul to the page
document.getElementById("indicators").appendChild(bulletElement);

//get the new created ul
bulletCreatedUl = document.getElementById("bullet-ul");

//get bullet items | array.form[ES6 features]
const bulletsAll = Array.from(document.querySelectorAll("#bullet-ul li"));

//loop through all bullet
for (let i = 0; i < bulletsAll.length; i++) {
  bulletsAll[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}
console.log(bulletsAll);
//create the checker function
function theChecker() {
  //set the slide number
  slideNumberElement.textContent =
    "slide #" + currentSlide + "of " + slidesCount;
  //remove all active classes
  removeAllActive();
  //set active class on current slide
  sliderImg[currentSlide - 1].classList.add("active");

  bulletCreatedUl.children[currentSlide - 1].classList.add("active");

  //check if the current slide is the first
  if (currentSlide == 1) {
    //add disable on prev button
    prevButton.classList.add("disabled");
  } else {
    //remove
    prevButton.classList.remove("disabled");
  }
  //check if the current slide is the last
  if (currentSlide == slidesCount) {
    //add disable on prev button
    nextButton.classList.add("disabled");
  } else {
    //remove
    nextButton.classList.remove("disabled");
  }
}

//trigger the functoin
theChecker();

//next slide function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    ///do nothing
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

//prev slide function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    ///do nothing
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

//remove all active classes
function removeAllActive() {
  sliderImg.forEach((image) => {
    image.classList.remove("active");
  });
  bulletsAll.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
//loop thorough images
