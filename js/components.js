

const NAV_ITEMS = [
  { path: "", label: "Home" },
  { path: "departments", label: "Departments" },
  { path: "faculty", label: "Faculty" },
  { path: "admissions", label: "Admissions" },
  { path: "contact", label: "Contact" }
];

function renderHeader(box) {
  box.appendChild(el("h1", "", "D. Y. Patil College of Engineering, Akurdi, Pune"));
}

function renderNav(box) {
  const ul = el("ul");
  NAV_ITEMS.forEach(function (item) {
    const li = el("li");
    const a = el("a", "", item.label);
    a.href = "#/" + item.path;
    a.dataset.route = item.path;        
    li.appendChild(a);
    ul.appendChild(li);
  });
  box.appendChild(ul);
}

function setActiveNav(path) {
  document.querySelectorAll("#site-nav a").forEach(function (a) {
    if (a.dataset.route === path) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}

function renderFooter(box) {
  box.appendChild(el("p", "", "© 2026 D. Y. Patil College of Engineering, Akurdi, Pune 411044"));
}
