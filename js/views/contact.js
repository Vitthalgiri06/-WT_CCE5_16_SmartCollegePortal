// CONTACT VIEW: enquiry form (validation + saving is in enquiry.js)
function contactView(root) {
  root.innerHTML = `
    <h2>Contact Us</h2>
    <form id="enquiry-form" novalidate>
      <label>Full Name <input id="fullname" type="text" placeholder="e.g. Vitthal Giri"></label>
      <div class="msg" id="err-fullname"></div>
      <label>Email <input id="email" type="text" placeholder="name@example.com"></label>
      <div class="msg" id="err-email"></div>
      <label>Mobile Number <input id="mobile" type="text" placeholder="10-digit mobile number"></label>
      <div class="msg" id="err-mobile"></div>
      <label>Programme of Interest
        <select id="programme">
          <option value="">-- Select a programme --</option>
          <option>AI and Data Science</option>
          <option>Computer Engineering</option>
          <option>Mechanical Engineering</option>
        </select>
      </label>
      <div class="msg" id="err-programme"></div>
      <label>Your Message <textarea id="message" rows="3" placeholder="10 to 300 characters"></textarea></label>
      <div class="msg" id="err-message"></div>
      <button type="submit">Submit Enquiry</button>
    </form>
    <div id="form-status"></div>
    <h2>Saved Enquiries</h2>
    <div id="saved-list"></div>`;

  initEnquiryForm(root);     
}
