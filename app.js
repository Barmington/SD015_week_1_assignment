"strict";

const newPage = document.getElementById("booking_page");
newPage.addEventListener("click", function () {
  const popup = document.getElementById("new_page");
  popup.classList.add("booking_table");

  const opt1h2 = document.querySelector(".opt_1");
  const opt1P = document.querySelector(".opt_1");
  const opt2h2 = document.querySelector(".opt_2");

  const opt2P = document.querySelector(".opt_2");
  const opt3h2 = document.querySelector(".opt_3");
  const opt3P = document.querySelector(".opt_3");

  const h21 = document.createElement("h2");
  const p1 = document.createElement("p");
  const h22 = document.createElement("h2");
  const p2 = document.createElement("p");
  const h23 = document.createElement("h2");
  const p3 = document.createElement("p");

  h21.textContent = "Economy";
  p1.textContent = "£550";
  h22.textContent = "Business class";
  p2.textContent = "£700";
  h23.textContent = "First class";
  p3.textContent = "£1500";

  opt1h2.appendChild(h21);
  opt1P.appendChild(p1);
  opt2h2.appendChild(h22);
  opt2P.appendChild(p2);
  opt3h2.appendChild(h23);
  opt3P.appendChild(p3);
});
