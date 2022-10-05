const footer = document.querySelector('footer');
const aside = document.querySelector('footer aside');
const button = document.querySelector('footer button');
const original = aside.innerHTML;

button.addEventListener('click', () => {
  footer.classList.toggle('mobile-share');
  footer.classList.add('flip');
  aside.classList.toggle('share');
  if (aside.classList.contains('share')) {
    aside.classList.remove('flip')
    aside.innerHTML = `
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
  } else {
    aside.innerHTML = original;
    footer.classList.remove('flip');
    aside.classList.add('flip')
  }

});