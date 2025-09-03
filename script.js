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