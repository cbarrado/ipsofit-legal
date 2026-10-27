// Runs in <head> before first paint so a saved dark choice never flashes light.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('ipsofit-theme'); } catch (e) {}
  root.setAttribute('data-theme', saved === 'dark' ? 'dark' : 'light');
  root.classList.add('js');
})();
