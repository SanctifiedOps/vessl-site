(function () {
  var hero = document.querySelector('.home-hero');
  var actions = document.querySelector('.home-mobile-actions');
  if (!hero || !actions) return;

  var mobile = window.matchMedia('(max-width: 767px)');
  function updateActions() {
    actions.hidden = !mobile.matches || hero.getBoundingClientRect().bottom > 0;
  }

  new IntersectionObserver(updateActions, { threshold: 0 }).observe(hero);
  mobile.addEventListener('change', updateActions);
  window.addEventListener('pageshow', updateActions);
  updateActions();
})();
