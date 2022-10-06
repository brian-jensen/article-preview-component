const footer = document.querySelector("footer");
const aside = document.querySelector("footer aside");
const button = document.querySelector("footer button");
const tooltip = document.querySelector(".tooltip");
const desktop = window.matchMedia("(min-width: 64em)");

const original = aside.innerHTML;

button.addEventListener("click", () => {
  const dynamic = `
    <h2>share</h2>
    <a href="https://www.facebook.com/" target="_blank">
      <img src="./images/icon-facebook.svg" alt="facebook icon">
    </a>
    <a href="https://twitter.com/" target="_blank">
      <img src="./images/icon-twitter.svg" alt="twitter icon">
    </a>
    <a href="https://www.pinterest.com/" target="_blank">
      <img src="./images/icon-pinterest.svg" alt="pinterest icon">
    </a>
  `;

  if (desktop.matches) {
    footer.classList.toggle("desktop-share");
    tooltip.classList.toggle("share");
    if (tooltip.classList.contains("share")) {
      tooltip.style.display = "flex";
      tooltip.innerHTML = dynamic;
    } else {
      tooltip.innerHTML = "";
      tooltip.style.display = "";
    }
  } else {
    footer.classList.toggle("mobile-share");
    footer.classList.add("flip");
    aside.classList.toggle("share");
    if (aside.classList.contains("share")) {
      aside.classList.remove("flip");
      aside.innerHTML = dynamic;
    } else {
      aside.innerHTML = original;
      footer.classList.remove("flip");
      aside.classList.add("flip");
    }
  }
});

desktop.addEventListener("change", () => {
  if (desktop.matches) {
    footer.classList.remove("mobile-share", "flip");
    aside.classList.remove("share", "flip");
    aside.innerHTML = original;
  } else {
    footer.classList.remove("desktop-share");
    tooltip.classList.remove("share");
    tooltip.innerHTML = "";
    tooltip.style.display = "";
  }
});
