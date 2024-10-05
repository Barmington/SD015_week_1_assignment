"strict";

document
  .getElementById("change_text")
  .addEventListener("mouseover", function () {
    const changeFont = document.querySelector(".anchor_1");
    const newA = document.getElementById("change_txt");
    changeFont.classList.add("hide");
    newA.classList.add("newAnchor");
    newA.classList.add("space_info");
    newA.textContent = "Click here for booking";
    newA.style.border = "2 solid white";
    newA.style.Color = "tomato";

    // const fesLt = currentText.slice(0, 1).toUpperCase();
    console.log(newA.textContent);

    // newA.slice(1).toLowerCase();
    // console.log(newA.slice(0, 1).toUpperCase());

    // const newText = firstLetter + remLet;
    // newText = newA.textContent;
    // newA.style.color = black;

    // changeFont.style.backgroundColor = "white";

    // Update the text content of the element
  });
