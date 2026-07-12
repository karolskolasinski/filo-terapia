import { html } from "./utils.js";

class InfoBar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = html`
      <div id="info-bar" class="bg-secondary-700 text-white text-xs md:text-sm">
        <div
          class="max-w-7xl mx-auto px-4 py-2 md:px-16 flex flex-col items-center gap-2 xs:gap-4 md:gap-6 xs:flex-row"
        >
          <div class="inline-flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              class="min-w-4 w-4 fill-white inline"
            >
              <path
                d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
              />
            </svg>
            Gdańsk, Świętokrzyska 64
          </div>

          <div class="flex gap-4 md:gap-6">
            <div class="inline-flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                class="min-w-4 w-4 fill-white inline"
              >
                <path
                  d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
                />
              </svg>
              +48 53 53 53 274
            </div>

            <div class="inline-flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                class="min-w-4 w-4 fill-white inline"
              >
                <path
                  d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"
                />
              </svg>
              Pn-Pt 08:00-20:00
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("x-info-bar", InfoBar);
