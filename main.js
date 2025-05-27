let changeBtn = document.querySelector('.change-btn');
let overlay = document.querySelector('#overlay');
let thumbBar = document.querySelector('.thumb-bar');
let displayedImg = document.querySelector('.displayed-img');

changeBtn.addEventListener('click', () => {
  if(changeBtn.textContent === "Darken") {
    overlay.setAttribute('class', 'overlay-light');
    changeBtn.textContent = "Lighten";
  } else {
    overlay.setAttribute('class', 'overlay-dark');
    changeBtn.textContent = "Darken";
  }
});

thumbBar.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    displayedImg.src = e.target.src;
  }
});
