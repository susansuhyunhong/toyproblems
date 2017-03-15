var stars = document.querySelectorAll('.star');

function fixColor(maxIdx){
  stars.forEach((star, i) => {
    i <= maxIdx ? star.classList.add('fix') : star.classList.remove('fix');
  });
}

function tempColor(maxIdx){
  for( let i = 0; i <= maxIdx; i++ ){
    stars[i].classList.toggle('hover');
  }
}

function clickStar(){
  stars.forEach((star, idx) => {
    star.addEventListener('click', (e) => fixColor(idx));
  });
}

function hoverStar(){
  stars.forEach((star, idx) => {
    star.addEventListener('mouseover', (e) => tempColor(idx));
    star.addEventListener('mouseout', (e) => tempColor(idx));
  });
}

clickStar();
hoverStar();
