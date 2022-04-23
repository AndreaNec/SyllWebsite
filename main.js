


// Setup End Date for Countdown (getTime == Time in Milleseconds)
let launchDate = new Date("Apr 24, 2022 00:00:00").getTime();

// Setup Timer to tick every 1 second
let timer = setInterval(tick, 1000);

function tick () {
  // Get current time
  let now = new Date().getTime();
  // Get the difference in time to get time left until reaches 0
  let t = launchDate - now;

  // Check if time is above 0
  if (t > 0) {
    // Setup Days, hours, seconds and minutes
    // Algorithm to calculate days...
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    // prefix any number below 10 with a "0" E.g. 1 = 01
    if (days < 10) { days = "0" + days; }
    
    // Algorithm to calculate hours
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }

    // Algorithm to calculate minutes
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }

    // Algorithm to calc seconds
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }

    // Create Time String
    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    // Set time on document
    document.querySelector('.countdown').innerText = time;
  }
}

// Setup End Date for Countdown (getTime == Time in Milleseconds)
let PrivateMint = new Date("Apr 24, 2022 00:00:00").getTime();

// Setup Timer to tick every 1 second
let timerPrivateMint = setInterval(tickPrivate, 1000);

function tickPrivate () {
  // Get current time
  let now = new Date().getTime();
  // Get the difference in time to get time left until reaches 0
  let t = launchDate - now;

  // Check if time is above 0
  if (t > 0) {
    // Setup Days, hours, seconds and minutes
    // Algorithm to calculate days...
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    // prefix any number below 10 with a "0" E.g. 1 = 01
    if (days < 10) { days = "0" + days; }
    
    // Create Time String
    let time = `${days}`;
    
    // Set time on document
    document.querySelector('.privateMintDate').innerText = time;
  }
}


//Roadmap scroll
var content = document.getElementById('content'),
    scrollStep = 200;

document.getElementById('right-button').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = content.scrollLeft,
      cw = content.scrollWidth;
	
  if ((sl + scrollStep) >= cw) {
    content.scrollTo(cw, 0);
  } else {
    content.scrollTo((sl + scrollStep), 0);
  }
});

document.getElementById('left-button').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = content.scrollLeft;
	
  if ((sl - scrollStep) <= 0) {
    content.scrollTo(0, 0);
  } else {
    content.scrollTo((sl - scrollStep), 0);
  }
});





// const header = document.querySelector("header");
// const sectionOne = document.querySelector(".home-intro");

// const faders = document.querySelectorAll(".fade-in");
// const sliders = document.querySelectorAll(".slide-in");

// const sectionOneOptions = {
// };

// const sectionOneObserver = new IntersectionObserver(function(
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       header.classList.add("nav-scrolled");
//     } else {
//       header.classList.remove("nav-scrolled");
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

// const appearOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -250px 0px"
// };

// const appearOnScroll = new IntersectionObserver(function(
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// appearOptions);

// faders.forEach(fader => {
//   appearOnScroll.observe(fader);
// });

// sliders.forEach(slider => {
//   appearOnScroll.observe(slider);
// });