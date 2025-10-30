
// Simple hero slider
function initSlider(){
  const slideEls = document.querySelectorAll('.hero-slide');
  if(!slideEls || slideEls.length===0) return;
  let current = 0;
  slideEls[current].classList.add('active');
  setInterval(()=> {
    slideEls[current].classList.remove('active');
    current = (current+1) % slideEls.length;
    slideEls[current].classList.add('active');
  }, 4000);
}
document.addEventListener('DOMContentLoaded', initSlider);
