import { html } from "./utils.js";

class Header extends HTMLElement {
  static observedAttributes = ["data-path"];

  constructor() {
    super();
    const path = this.getAttribute("data-path");
    const prefix = path === "index" ? "#" : "/#";

    this.innerHTML = html`
      <header class="z-10 sticky top-0 bg-white shadow-md overflow-hidden">
        <div class="flex justify-between items-center p-4 md:px-16 max-w-7xl mx-auto">
          <div class="flex items-center gap-4">
            <x-logo
              data-prefix="${prefix}"
              class="text-[2rem] xs:text-[3rem] font-black tracking-tight"
            >
            </x-logo>

            <button class="button hidden! lg:flex! gap-2">
              Umów wizytę
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 fill-current"
                viewBox="0 -960 960 960"
              >
                <path
                  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v400-400Z"
                />
              </svg>
            </button>
          </div>

          <nav class="hidden md:flex items-center gap-6">
            <a href="${prefix}about" class="hover:text-primary-400">O nas</a>
            <a href="${prefix}services" class="hover:text-primary-400">Kadra</a>
            <a href="${prefix}reviews" class="hover:text-primary-400">Cennik</a>
            <a href="blog.html" class="hover:text-primary-400">Blog</a>
            <a href="${prefix}contact" class="hover:text-primary-400">Kontakt</a>
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

              <span
                class="w-6.5 h-0.5 bg-gray-700 peer-checked:rotate-90 peer-checked:opacity-0 transition-transform duration-300"
              >
              </span>
            </div>

            <ul
              id="menu-list"
              class="group-has-checked:right-0 fixed top-0 -right-full w-full h-screen bg-white duration-300 flex flex-col text-xl font-semibold shadow-[inset_0_4px_6px_-1px_rgba(0,0,0,0.1),inset_0_2px_4px_-2px_rgba(0,0,0,0.1)]"
            >
              <li class="border-b border-gray-100">
                <a
                  href="#"
                  class="block w-full py-5 px-6 transition-colors duration-150 active:bg-primary-500 active:text-white select-none"
                >
                  O nas
                </a>
              </li>

              <li class="border-b border-gray-100">
                <a
                  href="#"
                  class="block w-full py-5 px-6 transition-colors duration-150 active:bg-primary-500 active:text-white select-none"
                >
                  Kadra
                </a>
              </li>

              <li class="border-b border-gray-100">
                <a
                  href="#"
                  class="block w-full py-5 px-6 transition-colors duration-150 active:bg-primary-500 active:text-white select-none"
                >
                  Cennik
                </a>
              </li>

              <li class="border-b border-gray-100">
                <a
                  href="#"
                  class="block w-full py-5 px-6 transition-colors duration-150 active:bg-primary-500 active:text-white select-none"
                >
                  Blog
                </a>
              </li>

              <li class="text-center pt-10">
                <button class="button flex gap-2">
                  Umów wizytę
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 fill-current"
                    viewBox="0 -960 960 960"
                  >
                    <path
                      d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v400-400Z"
                    />
                  </svg>
                </button>
              </li>

              <li class="mt-auto w-full p-6 flex flex-col gap-5 bg-gray-50/50 border-t border-gray-100">
                <div class="flex flex-col gap-3 text-sm font-medium text-gray-600">
                  <div class="inline-flex gap-3 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      class="w-5 h-5 fill-gray-400"
                    >
                      <path
                        d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
                      />
                    </svg>
                    666 993 383
                  </div>

                  <div class="inline-flex gap-3 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      class="w-5 h-5 fill-gray-400"
                    >
                      <path
                        d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
                      />
                    </svg>
                    biuro@filo-terapia.pl
                  </div>

                  <div class="inline-flex gap-3 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      class="w-5 h-5 fill-gray-400"
                    >
                      <path
                        d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
                      />
                    </svg>
                    Gdańsk, Świętokrzyska 64
                  </div>
                </div>

                <a
                  href="${prefix}contact"
                  class="button block w-full text-center py-4 text-xl transition-all duration-150 active:bg-primary-500 active:text-white active:scale-[0.98] select-none"
                >
                  Skontaktuj się z nami
                </a>

                <div class="flex justify-center gap-6 pt-1">
                  <a href="https://facebook.com/profile.php?id=1" class="select-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      class="w-8 h-8 fill-[#0866ff] active:opacity-80 transition-colors duration-150"
                    >
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                      />
                    </svg>
                  </a>

                  <a href="https://instagram.com/1" class="select-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="min-w-8 h-8 fill-[#E1306C] active:opacity-80 transition-colors duration-150"
                    >
                      <path
                        d="M12.004 5.838a6.157 6.157 0 0 0-6.158 6.158 6.157 6.157 0 0 0 6.158 6.158 6.157 6.157 0 0 0 6.158-6.158 6.157 6.157 0 0 0-6.158-6.158zm0 10.155a3.996 3.996 0 1 1 3.997-3.997 3.995 3.995 0 0 1-3.997 3.997z"
                      >
                      </path>
                      <path
                        d="M16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941C-.283 4.325.012 7.435.012 11.996c0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"
                      >
                      </path>
                      <circle cx="18.406" cy="5.595" r="1.439"></circle>
                    </svg>
                  </a>
                </div>
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
