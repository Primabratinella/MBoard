// 1. DYNAMIC GLOBAL TIMEZONE CLOCKS
function updateClocks() {
    const now = new Date();
    
    // Format Local Time (USA/EST)
    const localOptions = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('local-clock').innerText = now.toLocaleTimeString('en-US', localOptions);
    
    // Format Ghana Time (GMT)
    const ghanaOptions = { timeZone: 'Africa/Accra', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('ghana-clock').innerText = now.toLocaleTimeString('en-US', ghanaOptions);
}
setInterval(updateClocks, 1000);
updateClocks();

// 2. ROTATING PICTURE GALLERY AUTOMATION (Cycles every 6 seconds)
const photos = document.querySelectorAll('#gallery img');
let currentPhotoIndex = 0;

setInterval(() => {
    if(photos.length > 0) {
        photos[currentPhotoIndex].classList.remove('active');
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        photos[currentPhotoIndex].classList.add('active');
    }
}, 6000);

// 3. LOWER-THIRD FACT TICKER AUTOMATION (Cycles every 12 seconds)
const slides = document.querySelectorAll('.ticker-slide');
let currentSlideIndex = 0;

setInterval(() => {
    if(slides.length > 0) {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add('active');
    }
}, 12000);
