const firstImage = document.getElementById('imagen1');
const secondImage = document.getElementById('imagen2');

function loadImageWithTransition (entries, observer) {
  // entries es un array con informacion de los elementos que esta vigilando 
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      target.classList.add('visible');
    }
  });
};

const observer = new IntersectionObserver(loadImageWithTransition, {
  root: null,
  rootMargin: '0px',
  threshold: 1
});

observer.observe(firstImage);
observer.observe(secondImage);