import "./comnponents/header.js";
import "./comnponents/footer.js";
import "./comnponents/benefits.js";
import "./comnponents/review.js";

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerCheckbox = document.getElementById("hamburger");
  const menuList = document.getElementById("menu-list");

  if (hamburgerCheckbox && menuList) {
    const menuItems = menuList.querySelectorAll("a");

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        hamburgerCheckbox.checked = false;
      });
    });
  }
});