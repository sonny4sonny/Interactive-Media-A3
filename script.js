window.addEventListener('load', () => {
  document.getElementById('hero-title').classList.add('visible');
  document.getElementById('hero-tagline').classList.add('visible');
  document.getElementById('scroll-hint').classList.add('visible');
});


// this watches elements on the page and notices when you scroll to them
// when an element comes into view it gets the visible class which starts its animation
// the 0.15 means it waits until a small portion of the element is actually visible before triggering
// learned how this works from mozilla
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

// artist cards get a slightly different delay each so they appear one after another
// the delay gets bigger each time - This took a long converstaion with Google Gemini to figure out 
document.querySelectorAll(
  '.release-art, .release-info, .artist-card, .ethos-word, .contact-link, .section-label'
).forEach((el, i) => {
  if (el.classList.contains('artist-card')) {
    el.style.transitionDelay = `${i * 0.08}s`;
  }
  observer.observe(el);
});