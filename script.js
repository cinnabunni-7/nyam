const btn = document.getElementById("friendBtn");

btn.addEventListener("click", () => {
  alert("♡ friend request sent!");
  btn.textContent = "♡ added!";
  btn.disabled = true;
});