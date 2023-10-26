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

function changeSlide(newIndex) {
    currentIndex = newIndex;
    productName.textContent = productNames[currentIndex];
    images.forEach((img, index) => {
        gsap.to(img, {
            duration: 1.5,
            opacity: index === currentIndex ? 1: 0 , // Toggle opacity
            ease: 'power2.inOut'
        });
    });
}

gsap.to(productName, {
    duration: 1.5,
    opacity: 1,
    ease: 'power2.inOut'
});

changeSlide(currentIndex);

const interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeSlide(currentIndex);
}, 3000);

const leftArrow = document.querySelector('arrow-left')
const rightArrow = document.querySelector('arrow-right')

leftArrow.addEventListener('click',() => {
    clearInterval(interval);
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeSlide(currentIndex);
    setTimeout(() => {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        changeSlide(currentIndex);
      },3000)  
    },3000)
});

rightArrow.addEventListener('click',() => {
    clearInterval(interval);
    currentIndex = (currentIndex + 1 + images.length) % images.length;
    changeSlide(currentIndex);
    setTimeout(() => {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        changeSlide(currentIndex);
      },3000)  
    },3000)
});

