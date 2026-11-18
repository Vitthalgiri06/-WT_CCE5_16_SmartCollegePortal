
function notFoundView(root) {
  root.appendChild(el("h2", "", "Page not found"));
  root.appendChild(el("p", "", "The address " + window.location.hash + " does not exist in this portal."));
  const a = el("a", "", "Go to the Home page");
  a.href = "#/";
  root.appendChild(a);
}
