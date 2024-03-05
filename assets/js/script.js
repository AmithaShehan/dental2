// const container = document.querySelectorAll('.container-before-after');
// document.querySelectorAll('.custom-slider').addEventListener('input', (e) => {
//   container.style.setProperty('--position', `${e.target.value}%`);
// })

const sliders = document.querySelectorAll('.custom-slider');

sliders.forEach(slider => {
  slider.addEventListener('input', (e) => {
    const container = slider.closest('.container-before-after');
    container.style.setProperty('--position', `${e.target.value}%`);
  });
});
