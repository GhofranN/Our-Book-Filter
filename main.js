let switcherLis = document.querySelectorAll(".container .switcher li");
let imgs = document.querySelectorAll(".gallery .container .img-box");

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage Imgs
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}



// Set Interval for Random Color :

let colorParts = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let conatiner = document.querySelector(".gallery .container");
console.log(conatiner);

setInterval (() =>{

  let hexaArr = []; 

for( let i =0; i<6 ; i++){
  hexaArr.push(colorParts[Math.floor(Math.random() * colorParts.length)]);
}

let generatedHEXCode = `#${hexaArr.join("")}`;

  console.log(hexaArr);
  console.log(generatedHEXCode);

   conatiner.style.backgroundColor = generatedHEXCode;

  //  document.body.style.backgroundColor = generatedHEXCode;
}, 500 * 60);

// let counter = setInterval(() => {
//   // Get Date Now
//   let dateNow = new Date().getTime();

//   // Find The Date Difference Between Now And Countdown Date
//   let dateDiff = countDownDate - dateNow;

//   // Get Time Units
//   // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
//   let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

//   document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
//   document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
//   document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
//   document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

//   if (dateDiff < 0) {
//     clearInterval(counter);
//   }
// }, 1000);



