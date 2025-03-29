//Faz com que o slider se mova sozinho
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    
    // Coleta títulos e links diretamente do HTML
    const titles = Array.from(document.querySelectorAll(".slide-content h2"))
        .map(title => title.textContent);
    const links = Array.from(document.querySelectorAll(".slide-content button"))
        .map(button => button.dataset.link); // Obtém links do atributo data-link nos botões

    const indicators = document.querySelectorAll(".controller-nav a"); // Indicadores para atualizar classe active
    let currentIndex = 0;

    // Função para trocar os slides
    const changeSlide = () => {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? "block" : "none";

            // Atualiza título e link dinamicamente
            const slideContent = slide.querySelector(".slide-content");
            if (slideContent) {
                slideContent.querySelector("h2").textContent = titles[currentIndex];
                slideContent.querySelector("button").onclick = () => {
                    window.location.href = links[currentIndex];
                };
            }
        });

        // Atualiza a classe .active nos indicadores
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add("active");
            } else {
                indicator.classList.remove("active");
            }
        });

        currentIndex = (currentIndex + 1) % slides.length; // Altera para o próximo slide
    };

    // Inicializa o carrossel
    setInterval(changeSlide, 5000); // Troca de slide a cada 5 segundos
    changeSlide(); // Executa na inicialização

});
// Adiciona efeito de zoom no slider
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide img");
  
    // Configura o IntersectionObserver
    const observerOptions = {
      root: null, // Usa o viewport como referência
      threshold: 0.1, // Executa o efeito quando 10% da imagem está visível
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Adiciona a classe para efeito
        } else {
          entry.target.classList.remove("visible"); // Remove a classe se sair de tela
        }
      });
    }, observerOptions);
  
    // Observa cada imagem
    slides.forEach(img => {
      observer.observe(img);
    })})