

const button = document.getElementById('colorButton');


const colors = ['#f4a261', '#2a9d8f', '#e76f51', '#264653', '#ffb703'];


button.addEventListener('click', () => {
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

let p = 30;
k = p+89;

z = k