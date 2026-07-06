class Header extends HTMLElement {
  static observedAttributes = ["data-path"];

  constructor() {
    super();
    const path = this.getAttribute("data-path");
    const prefix = path === "index" ? "#" : "/#";

    this.innerHTML = `
<header class="z-10 sticky top-0 bg-white md:bg-white/70 md:backdrop-blur-md shadow-md overflow-hidden">
  <div class="flex justify-between items-center p-4 md:px-16 max-w-7xl mx-auto">
    <div class="flex items-center gap-4">
      <a href="${prefix}" class="flex gap-2 items-center">
      <img src="img/logo.svg" alt="logo" class="w-10 xs:w-14" />
      <div class="flex flex-col font-display">
      <div class="uppercase text-[8px] xs:text-[10px] tracking-[3px]">Ośrodek terapii</div>
      <div class="text-primary-500 leading-12 xs:leading-14 tracking-[8px] font-bold text-[2.5rem] xs:text-[3rem]">FiLO</div>
      </div>
      </a>
      
      <button class="button hidden! xs:block!">
        Umów wizytę
      </button>
    </div>

    <nav class="hidden md:flex items-center gap-6">
      <a href="${prefix}about" class="hover:text-indigo-500">O nas</a>
      <a href="${prefix}services" class="hover:text-indigo-500">Jak to działa?</a>
      <a href="${prefix}reviews" class="hover:text-indigo-500">Opinie</a>
      <a href="${prefix}contact" class="hover:text-indigo-500">Kontakt</a>
    </nav>

    <nav class="md:hidden group">
      <div class="relative flex items-center">
        <input
          id="hamburger"
          type="checkbox"
          class="peer opacity-0 w-0 h-6.5 cursor-pointer" 
        />
        <label
          for="hamburger"
          class="absolute top-0 right-0 w-6.5 h-6.5 z-10 flex items-center justify-center cursor-pointer before:absolute before:w-full before:h-0.5 before:bg-gray-700 before:-translate-y-2 before:transition-all after:absolute after:w-full after:h-0.5 after:bg-gray-700 after:translate-y-2 after:transition-all peer-checked:rotate-45 peer-checked:before:translate-y-0 peer-checked:before:rotate-0 peer-checked:after:translate-y-0 peer-checked:after:rotate-90 transition-transform duration-300"
        >
        </label>

        <span class="w-6.5 h-0.5 bg-gray-700 peer-checked:rotate-90 peer-checked:opacity-0 transition-transform duration-300">
        </span>
      </div>
      
      <ul id="menu-list" class="group-has-checked:right-0 fixed top-0 -right-full w-full h-screen bg-white duration-[.25s] p-4 flex flex-col gap-6 text-2xl font-bold items-center shadow-[inset_0_4px_6px_-1px_rgba(0,0,0,0.1),inset_0_2px_4px_-2px_rgba(0,0,0,0.1)]">
        <li class="pt-4">
          <a href="${prefix}about">O nas</a>
        </li>
        <li>
          <a href="${prefix}services">Jak to działa?</a>
        </li>
        <li class="pb-4">
          <a href="${prefix}reviews">Opinie</a>
        </li>

        <li class="w-full flex justify-center">
          <hr class="w-full border-gray-300" />
        </li>
        <li class="flex flex-col items-center justify-end w-full">
          <a href="${prefix}contact" class="button w-full">Skontaktuj się z nami</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
`;
    this.hamburger = this.querySelector("#hamburger");
    this.header = this.querySelector("header");
    this.menuList = this.querySelector("#menu-list");

    this.updateMenuPosition = this.updateMenuPosition.bind(this);

    this.hamburger.addEventListener("change", () => {
      this.updateMenuPosition();

      this.header.classList.toggle("overflow-hidden", !this.hamburger.checked);
      document.body.classList.toggle("overflow-hidden", this.hamburger.checked);
    });

    window.addEventListener("scroll", this.updateMenuPosition);
    window.addEventListener("resize", this.updateMenuPosition);
  }

  connectedCallback() {
    this.updateMenuPosition();
  }

  updateMenuPosition() {
    const infoBar = document.getElementById("info-bar");
    const headerRect = this.header.getBoundingClientRect();
    let targetTop = headerRect.bottom;

    if (infoBar && window.scrollY === 0) {
      const infoRect = infoBar.getBoundingClientRect();
      targetTop = infoRect.height + headerRect.height;
    }

    this.menuList.style.top = `${targetTop}px`;
    this.menuList.style.height = `calc(100vh - ${targetTop}px)`;
  }
}

customElements.define("x-header", Header);
