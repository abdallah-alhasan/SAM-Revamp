// Get the slider wrapper and individual slide items
const sliderWrappers = document.querySelectorAll('.main-slider-wrapper');
sliderWrappers.forEach(sliderWrapper => {
    const slideItems = sliderWrapper.querySelectorAll('.slide-item');

// Get the previous and next arrow buttons
const prevButton = sliderWrapper.querySelector('.slider-prev-arrow');
const nextButton = sliderWrapper.querySelector('.slider-next-arrow');

// Set initial slide index to 0
let currentSlideIndex = 0;

// Show the first slide on page load
showSlide(currentSlideIndex);

// Add event listeners to the previous and next buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Function to show a slide at a given index
function showSlide(index) {
  // Hide all slides
  for (let i = 0; i < slideItems.length; i++) {
    slideItems[i].style.display = 'none';
  }

  // Show the slide at the given index
  slideItems[index].style.display = 'block';
}

// Function to move to the previous slide
function prevSlide() {
  currentSlideIndex--;

  // If at beginning of slides, go to end
  if (currentSlideIndex < 0) {
    currentSlideIndex = slideItems.length - 1;
  }

  // Show the previous slide
  showSlide(currentSlideIndex);
}

// Function to move to the next slide
function nextSlide() {
  currentSlideIndex++;

  // If at end of slides, go back to beginning
  if (currentSlideIndex >= slideItems.length) {
    currentSlideIndex = 0;
  }

  // Show the next slide
  showSlide(currentSlideIndex);
}

// Set an interval to automatically move to the next slide
setInterval(nextSlide, 5000);

});



const listItems = document.querySelectorAll('.explore-btn');
const images = document.querySelectorAll('.explore-img');

listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        images.forEach(image => image.classList.add('hide'));
        images[index].classList.remove('hide');

        listItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    });
});

const listItemsMobile = document.querySelectorAll('.just-on-mobile .explore-btn');
const imagesMobile = document.querySelectorAll('.just-on-mobile .explore-img');

listItemsMobile.forEach((item, index) => {
    item.addEventListener('click', () => {
        imagesMobile.forEach(image => image.classList.add('hide'));
        imagesMobile[index].classList.remove('hide');

        listItemsMobile.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    });
});




const latestItems = document.querySelectorAll('.latest-item');
const prevBtn = document.querySelector('.latest-prev');
const nextBtn = document.querySelector('.latest-next');
let currentIndex = 0;

function showItem(index) {
  latestItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function nextItem() {
  currentIndex++;
  if (currentIndex >= latestItems.length) {
    currentIndex = 0;
  }
  showItem(currentIndex);
}

function prevItem() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = latestItems.length - 1;
  }
  showItem(currentIndex);
}

nextBtn.addEventListener('click', nextItem);
prevBtn.addEventListener('click', prevItem);

showItem(currentIndex);





