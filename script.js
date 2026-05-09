const currentSlides = [0, 0];

function changeSlide(direction, projectIndex) {

    const slides = document.querySelectorAll(`.project${projectIndex}`);

    slides[currentSlides[projectIndex]].classList.remove('active');

    currentSlides[projectIndex] += direction;

    if (currentSlides[projectIndex] >= slides.length) {
        currentSlides[projectIndex] = 0;
    }

    if (currentSlides[projectIndex] < 0) {
        currentSlides[projectIndex] = slides.length - 1;
    }

    slides[currentSlides[projectIndex]].classList.add('active');
}