const left = document.querySelector('.fa-arrow-circle-left');
const right = document.querySelector('.fa-arrow-circle-right');
const images = Array.from(document.querySelectorAll('.carousel-item'));

moveleft = () => {
  if (document.querySelector('.display').dataset.index === "0") {
    
  }
}

left.addEventListener('click', moveleft());
right.addEventListener('click', moveRight());