const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let index = 0;

function updateCarousel() {
  // Calcula o deslocamento baseado no índice atual
  // Como cada item tem flex: 0 0 50%, precisamos calcular corretamente
  const itemWidth = items[0].offsetWidth;
  const displacement = -index * itemWidth;

  // Move o carrossel
  track.style.transform = `translateX(${displacement}px)`;

  // Remove destaque de todos
  items.forEach(item => item.classList.remove("active"));
  
  // Adiciona destaque ao item atual
  items[index].classList.add("active");
}

nextButton.addEventListener("click", () => {
  index++;
  if (index >= items.length) {
    index = 0;
  }
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = items.length - 1;
  }
  updateCarousel();
});

// Atualiza quando a janela é redimensionada
window.addEventListener('resize', updateCarousel);

// Inicia com o primeiro em destaque
updateCarousel();