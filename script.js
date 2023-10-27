const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const productNames = [
  'The Micro Bag Collection',
  'Small Check Merino Wool Scarf',
  'Mini Alexa in Amethyst',
  'Medium Lily in Sapphire'
];

const productName = document.querySelector('.productname');
let currentIndex = 0;
let isAnimating = false; // Flag to track whether animation is in progress

function changeSlide(newIndex) {
  currentIndex = newIndex;
  productName.textContent = productNames[currentIndex];
  images.forEach((img, index) => {
    gsap.to(img, {
      duration: 1.5,
      opacity: index === currentIndex ? 1 : 0,
      ease: 'power2.inOut'
    });
  });
}

gsap.to(productName, { duration: 1.5, opacity: 1, ease: 'power2.inOut' });

changeSlide(currentIndex);

function startAutomaticAnimation() {
  return setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeSlide(currentIndex);
  }, 3000);
}

let interval = startAutomaticAnimation();

function handleManualSlide(direction) {
  if (isAnimating) {
    return; // Ignore manual slide changes while the animation is in progress
  }
  isAnimating = true; // Set the flag
  clearInterval(interval); // Stop the automatic animation
  const newIndex =
    direction === 'left'
      ? (currentIndex - 1 + images.length) % images.length
      : (currentIndex + 1) % images.length;
  changeSlide(newIndex);

  setTimeout(() => {
    isAnimating = false; // Reset the flag
    interval = startAutomaticAnimation(); // Restart the automatic animation
  }, 3000);
}

const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

leftArrow.addEventListener('click', () => {
  handleManualSlide('left');
});

rightArrow.addEventListener('click', () => {
  handleManualSlide('right');
});

