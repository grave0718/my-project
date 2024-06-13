let observer = new IntersectionObserver((e) => {
  e.forEach((박스) => {
    박스.target.style.opacity = 1;
  });
});

let observechk = document.querySelectorAll("observer-chk");

observer.observe("observe-chk[0]");
observer.observe("observe-chk[1]");
observer.observe("observe-chk[2]");
