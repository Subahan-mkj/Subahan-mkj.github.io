// TRACK SLIDES FOR EACH PROJECT
const currentSlides = [0, 0]; 

function changeSlide(direction, projectIndex) {
    const slides = document.querySelectorAll(`.project${projectIndex}`);
    
    // Remove active class
    slides[currentSlides[projectIndex]].classList.remove('active');

    // Calculate next slide
    currentSlides[projectIndex] += direction;

    if (currentSlides[projectIndex] >= slides.length) {
        currentSlides[projectIndex] = 0;
    }
    if (currentSlides[projectIndex] < 0) {
        currentSlides[projectIndex] = slides.length - 1;
    }

    // Add active class
    slides[currentSlides[projectIndex]].classList.add('active');
}

// AUTOMATIC SMOOTH SLIDE FUNCTION
function startAutoSlide() {
    // Project 1 changes every 4 seconds
    setInterval(() => {
        changeSlide(1, 0);
    }, 4000);

    // Project 2 changes every 4.5 seconds (staggered)
    setInterval(() => {
        changeSlide(1, 1);
    }, 4500);
}

// Start auto-sliding when page is ready
window.onload = startAutoSlide;