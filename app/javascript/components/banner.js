import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  console.log("inside banner")
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Learn to code"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
