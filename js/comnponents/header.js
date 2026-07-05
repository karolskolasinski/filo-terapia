class Header extends HTMLElement {
  static observedAttributes = ["data-path"];

  connectedCallback() {
    const header = this.querySelector("#header");

    const updateHeader = () => {
      if (window.scrollY === 0) {
        header.classList.remove("-translate-y-8");
        header.classList.add("translate-y-0");
      } else {
        header.classList.remove("translate-y-0");
        header.classList.add("-translate-y-8");
      }
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader);
  }

  constructor() {
    super();
    const path = this.getAttribute("data-path");
    const prefix = path === "index" ? "#" : "/#";

    this.innerHTML = `
<header
  id="header"
  class="z-10 sticky top-0 bg-white md:bg-white/70 md:backdrop-blur-md transition-transform duration-300 translate-y-0"
>
  <div class="bg-red-900 text-white transition-transform duration-300 translate-y-0">
    <div class="max-w-7xl mx-auto px-4 py-2 md:px-16 flex gap-6 items-center">
      <div class="flex gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="min-w-6 w-6 fill-white inline">
        <path
          d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
        />
      </svg>
        Gdańsk, Świętokrzyska 64
      </div>
      
      <div class="flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="min-w-6 w-6 fill-white inline">
          <path 
            d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" 
          />
        </svg>
        666 993 383
      </div>
      
      <div class="flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="min-w-6 w-6 fill-white inline">
          <path
            d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"
          />
        </svg>
        Pn-Pt 08:00-20:00
      </div>
    </div>
  </div>
  
  <div class="flex justify-between items-center p-4 md:px-16 max-w-7xl mx-auto">
    <a href=${prefix} class="flex gap-2 items-center">
      <img src="img/logo.svg" alt="logo" class="w-8 xs:w-9" />
      <div class="flex flex-col font-black text-[1.75rem] leading-5 xs:text-[2rem] xs:leading-6">
        <div class="text-indigo-500">healthy</div>
        <div class="tracking-tight">work</div>
      </div>
    </a>

    <nav class="hidden md:flex items-center gap-6">
      <a href="${prefix}about" class="hover:text-indigo-500">O nas</a>
      <a href="${prefix}services" class="hover:text-indigo-500">Jak to działa?</a>
      <a href="${prefix}reviews" class="hover:text-indigo-500">Opinie</a>
      <a href="${prefix}contact" class="hover:text-indigo-500">Kontakt</a>
    </nav>

    <nav class="md:hidden">
      <div class="relative flex items-center">
        <input
          id="hamburger"
          type="checkbox"
          class="peer opacity-0 w-0 h-[26px] cursor-pointer" 
        />
        <label
          for="hamburger"
          class="absolute top-0 right-0 w-[26px] h-[26px] z-10 flex items-center justify-center cursor-pointer before:absolute before:w-full before:h-[2px] before:bg-gray-700 before:-translate-y-[8px] before:transition-all after:absolute after:w-full after:h-[2px] after:bg-gray-700 after:translate-y-[8px] after:transition-all peer-checked:rotate-45 peer-checked:before:translate-y-0 peer-checked:before:rotate-0 peer-checked:after:translate-y-0 peer-checked:after:rotate-90 transition-transform duration-300"
        >
        </label>

        <span class="w-[26px] h-[2px] bg-gray-700 peer-checked:rotate-90 transition-transform duration-300">
        </span>

        <ul class="peer-checked:right-0 fixed top-0 -right-full w-full h-full bg-white duration-[.25s] shadow-2xl p-4 flex flex-col gap-6 text-2xl font-bold items-center">
          <li class="self-start">
            <div class="flex gap-2 items-center">
              <img src="img/logo.svg" alt="logo" class="w-8 xs:w-9" />
              <div class="flex flex-col font-black text-[1.75rem] leading-5 xs:text-[2rem] xs:leading-6">
                <div class="text-indigo-500">healthy</div>
                <div class="tracking-tight">work</div>
              </div>
            </div>
          </li>

          <li class="w-full flex justify-center">
            <hr class="w-full border-gray-300" />
          </li>

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
      </div>
    </nav>
  </div>
</header>
`;
  }
}

customElements.define("x-header", Header);
