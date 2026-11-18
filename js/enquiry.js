
function initEnquiryForm(root) {
  const form = root.querySelector("#enquiry-form");
  const statusBox = root.querySelector("#form-status");
  const savedList = root.querySelector("#saved-list");


  const rules = {
    fullname:  function (v) { return /^[A-Za-z .]{3,}$/.test(v) ? "" : "Enter your full name (letters only, minimum 3)."; },
    email:     function (v) { return /^\S+@\S+\.\S+$/.test(v) ? "" : "Enter a valid email address."; },
    mobile:    function (v) { return /^[6-9]\d{9}$/.test(v) ? "" : "Enter a valid 10-digit mobile number."; },
    programme: function (v) { return v ? "" : "Please select a programme."; },
    message:   function (v) { return v.length >= 10 && v.length <= 300 ? "" : "Message must be 10 to 300 characters."; }
  };

  function validateField(name) {
    const value = form.querySelector("#" + name).value.trim();
    const error = rules[name](value);
    root.querySelector("#err-" + name).textContent = error;
    return error === "";
  }


  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let allValid = true;
    Object.keys(rules).forEach(function (name) {
      if (!validateField(name)) allValid = false;
    });
    if (!allValid) {
      statusBox.className = "error-box";
      statusBox.textContent = "Please correct the highlighted fields and submit again.";
      return;
    }
    const list = readEnquiries();
    list.push({
      name: form.querySelector("#fullname").value.trim(),
      email: form.querySelector("#email").value.trim(),
      mobile: form.querySelector("#mobile").value.trim(),
      programme: form.querySelector("#programme").value,
      message: form.querySelector("#message").value.trim()
    });
    localStorage.setItem("dypEnquiries", JSON.stringify(list));
    statusBox.className = "ok";
    statusBox.textContent = "Thank you! Your enquiry was saved.";
    form.reset();
    showEnquiries();
  });


  function readEnquiries() {
    try { return JSON.parse(localStorage.getItem("dypEnquiries")) || []; }
    catch (error) { return []; }
  }

  function showEnquiries() {
    const list = readEnquiries();
    savedList.textContent = "";
    if (list.length === 0) { savedList.appendChild(el("p", "small", "No enquiries saved yet.")); return; }
    list.forEach(function (e, index) {
      const card = el("div", "card");
      card.appendChild(el("h3", "", e.name));
      card.appendChild(el("p", "small", e.programme + " | " + e.email + " | " + e.mobile));
      card.appendChild(el("p", "", e.message));
      const del = el("button", "light", "Delete");
      del.addEventListener("click", function () {
        list.splice(index, 1);
        localStorage.setItem("dypEnquiries", JSON.stringify(list));
        showEnquiries();
      });
      card.appendChild(del);
      savedList.appendChild(card);
    });
  }
  showEnquiries();
}
