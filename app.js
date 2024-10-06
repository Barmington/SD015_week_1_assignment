"strict";

const newPage = document.getElementById("booking_page");
newPage.addEventListener("click", function () {
  const popup = document.getElementById("new_page");
  const hideInfo = document.querySelector(".spacey_info");

  popup.classList.remove("noShow");
  popup.classList.add("booking_table");
  hideInfo.classList.add("hide");
});
