const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const plan = document.getElementById("plan").value;

  if (!name || !email || !phone || !plan) {
    msg.textContent = "Please fill all fields.";
    msg.style.color = "red";
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    msg.textContent = "Enter a valid 10-digit phone number.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Registration successful!";
  msg.style.color = "green";
  form.reset();
});
