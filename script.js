     function myFunction(x) {
        x.classList.toggle("change");

         const menu = document.getElementById("menu");
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
      }
let lastScroll = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll) {
        // scrolleando hacia abajo
        navbar.classList.add("hidden");
      } else {
        // scrolleando hacia arriba
        navbar.classList.remove("hidden");
      }

      lastScroll = currentScroll;
    });

const items = document.querySelectorAll('.cardBox');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');      // entra => animar
    } else {
      entry.target.classList.remove('in');   // sale => resetear (para repetir)
    }
  });
}, {
  threshold: 0.20,                   // 25% visible
  rootMargin: '-10% 0px -10% 0px'    // espera a que esté un poco centrado
});

items.forEach(el => io.observe(el));