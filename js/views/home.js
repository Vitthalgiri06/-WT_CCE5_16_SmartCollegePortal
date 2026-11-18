
function homeView(root) {
  root.innerHTML = `
    <h2>Welcome to D. Y. Patil College of Engineering</h2>
    <p>Quick access to departments, faculty, admissions and notices.</p>
    <h2>Announcements &amp; Notices</h2>
    <div id="data-status"></div>
    <div id="notice-list"></div>`;


  populate(root.querySelector("#data-status"), ["notices"], "Loading notices...", function (notices) {
    const list = root.querySelector("#notice-list");
     
    notices.forEach(function (n) {
      const card = el("div", "card");
      card.appendChild(el("h3", "", n.title));
      card.appendChild(el("span", "small", "Posted on " + n.date + " "));
      if (n.important) card.appendChild(el("span", "badge", "Important"));
      if (n.link) {
        const a = el("a", "", n.linkText);
        a.href = n.link;                
        card.appendChild(el("p"));
        card.lastChild.appendChild(a);
      }
      list.appendChild(card);
    });
  });
}
