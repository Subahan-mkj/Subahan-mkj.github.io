/* ===== CURSOR ===== */
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .project-card, .about-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(1.8)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
});

/* ===== NAV SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ===== TIME ===== */
function updateTime() {
    document.getElementById('time').textContent = new Date().toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

/* ===== LOCATION ===== */
fetch('https://ipapi.co/json/')
    .then(r => r.json())
    .then(d => {
        const loc = document.getElementById('location');
        if (loc) loc.textContent = d.city + ', ' + d.country_name;
    })
    .catch(() => {
        const loc = document.getElementById('location');
        if (loc) loc.textContent = 'India';
    });

/* ===== PROJECT SLIDER ===== */
const currentSlides = [0, 0];
const slideCount = [5, 5];

function initDots() {
    [0, 1].forEach(idx => {
        const container = document.getElementById('dots-' + idx);
        if (!container) return;
        for (let i = 0; i < slideCount[idx]; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(i, idx));
            container.appendChild(dot);
        }
    });
}

function updateSlider(idx) {
    const wrapper = document.getElementById('slides-' + idx);
    if (wrapper) {
        wrapper.style.transform = `translateX(-${currentSlides[idx] * 20}%)`;
    }
    const dots = document.querySelectorAll(`#dots-${idx} .dot`);
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlides[idx]));
}

function changeSlide(dir, idx) {
    currentSlides[idx] = (currentSlides[idx] + dir + slideCount[idx]) % slideCount[idx];
    updateSlider(idx);
}

function goToSlide(n, idx) {
    currentSlides[idx] = n;
    updateSlider(idx);
}

function startAutoSlide() {
    setInterval(() => changeSlide(1, 0), 4000);
    setInterval(() => changeSlide(1, 1), 4700);
}

/* ===== SCROLL REVEAL ===== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.about-card, .project-card, .contact-link, .skill-tag').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

/* ===== INIT ===== */
window.onload = () => {
    initDots();
    startAutoSlide();
};
// Only run cursor on non-touch devices
if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
}