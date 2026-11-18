

const routes = [
  { path: "",            title: "Home",              view: homeView },
  { path: "departments", title: "Departments",       view: departmentsView },
  { path: "faculty",     title: "Faculty",           view: facultyView },
  { path: "admissions",  title: "Admissions",        view: admissionsView },
  { path: "contact",     title: "Contact & Enquiry", view: contactView }
];
const notFoundRoute = { path: null, title: "Page not found", view: notFoundView };

function parseHash(hash) {
  return hash.replace(/^#\/?/, "").split("/")[0];
}

function navigate() {
  const path = parseHash(window.location.hash);
  const route = routes.find(function (r) { return r.path === path; }) || notFoundRoute;

  const app = document.getElementById("app");
  const root = el("div", "view");         
  app.textContent = "";                   
  app.appendChild(root);

  document.title = route.title + " | D. Y. Patil College";
  setActiveNav(route.path);

  try {
    route.view(root);                    
  } catch (error) {
    console.error(error);
    root.appendChild(el("p", "error-box", "Sorry, this page could not be shown."));
  }
  window.scrollTo(0, 0);
}

function startRouter() {
  window.addEventListener("hashchange", navigate);   
  navigate();                                        
}
