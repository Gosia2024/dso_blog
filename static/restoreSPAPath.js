(function () {
  try {
    var u = new URL(window.location.href);
    var p = u.searchParams.get('p');
    if (p) {
      // URL in der Adresszeile wiederherstellen (ohne Reload)
      window.history.replaceState(null, '', p);
    }
  } catch (_) {}
})();
