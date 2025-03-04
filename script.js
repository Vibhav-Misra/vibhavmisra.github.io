window.addEventListener("scroll", function () {
    const hero = document.getElementById("hero");
    if (window.scrollY > 100) {
        hero.classList.add("fade-out");
    } else {
        hero.classList.remove("fade-out");
    }
});

