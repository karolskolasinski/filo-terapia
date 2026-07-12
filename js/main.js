import "./comnponents/header.js";
import "./comnponents/footer.js";
import "./comnponents/review.js";
import "./comnponents/info-bar.js";
import "./comnponents/blog-card.js";
import "./comnponents/logo.js";

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