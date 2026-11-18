
function facultyView(root) {
  root.innerHTML = `
    <h2>Our Faculty</h2>
    <div id="data-status"></div>
    <div id="faculty-list" class="grid"></div>`;

  populate(root.querySelector("#data-status"), ["faculty"], "Loading faculty...", function (faculty) {
    const list = root.querySelector("#faculty-list");
    faculty.forEach(function (f) {
      const card = el("div", "card");
      card.appendChild(el("h3", "", f.name));
      card.appendChild(el("p", "", f.designation));
      const details = el("div", "small", "Qualification: " + f.qualification + " | Email: " + f.email);
      details.hidden = true;                       
      card.appendChild(details);
      const button = el("button", "light", "Show details");
      button.addEventListener("click", function () {
        details.hidden = !details.hidden;
        button.textContent = details.hidden ? "Show details" : "Hide details";
      });
      card.appendChild(button);
      list.appendChild(card);
    });
  });
}
