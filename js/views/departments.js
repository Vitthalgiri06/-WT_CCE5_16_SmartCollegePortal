
function departmentsView(root) {
  root.innerHTML = `
    <h2>Departments &amp; Courses</h2>
    <div id="data-status"></div>
    <div id="dept-list" class="grid"></div>
    <h2>Course Offerings</h2>
    <label>Show courses for:
      <select id="dept-filter"><option value="all">All departments</option></select>
    </label>
    <div id="course-list"></div>`;

  populate(root.querySelector("#data-status"), ["departments"], "Loading departments...", function (departments) {
    const list = root.querySelector("#dept-list");
    const filter = root.querySelector("#dept-filter");
    const courseList = root.querySelector("#course-list");

    departments.forEach(function (d) {
      const card = el("div", "card");
      card.appendChild(el("h3", "", d.name));
      card.appendChild(el("p", "small", "Head: " + d.head + " | Intake: " + d.intake));
      list.appendChild(card);
      filter.appendChild(new Option(d.name, d.id));
    });

    function showCourses() {
      courseList.textContent = "";
      const table = el("table");
      table.innerHTML = "<tr><th>Department</th><th>Course</th><th>Credits</th></tr>";
      departments.forEach(function (d) {
        if (filter.value !== "all" && filter.value !== d.id) return;
        d.courses.forEach(function (c) {
          const row = el("tr");
          row.appendChild(el("td", "", d.name));
          row.appendChild(el("td", "", c.name));
          row.appendChild(el("td", "", c.credits));
          table.appendChild(row);
        });
      });
      courseList.appendChild(table);
    }
    filter.addEventListener("change", showCourses);
    showCourses();
  });
}
