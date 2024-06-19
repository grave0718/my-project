const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      } else {
        entry.target.classList.remove("fade-in");
      }
    });
  },

  { threshold: 1.0 }
);

const targetElements = document.querySelectorAll(".img");
targetElements.forEach((element) => {
  observer.observe(element);
});
