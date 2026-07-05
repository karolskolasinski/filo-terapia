import "./comnponents/header.js";
import "./comnponents/footer.js";
import "./comnponents/benefits.js";
import "./comnponents/review.js";

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerCheckbox = document.getElementById("hamburger");
  const menuItems = document.querySelectorAll(
    "#hamburger ~ ul a, #hamburger ~ ul button, #hamburger ~ ul li > a",
  );

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (hamburgerCheckbox.checked) {
        hamburgerCheckbox.checked = false;
      }
    });
  });
});
