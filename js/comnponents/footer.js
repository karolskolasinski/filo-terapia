import { html } from "./utils.js";

class Footer extends HTMLElement {
  static observedAttributes = ["data-path"];

  constructor() {
    super();
    const path = this.getAttribute("data-path");
    const prefix = path === "index" ? "#" : "/#";
    const isApple = /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const mapsUrl = isApple
      ? "https://maps.apple.com/?daddr=ul.+Świętokrzyska+64,+Gdańsk&dirflg=d"
      : "https://www.google.com/maps/dir/?api=1&destination=ul.+Świętokrzyska+64,+Gdańsk";

    this.innerHTML = html`
      <footer class="bg-primary-950 w-full text-gray-50">
        <div class="max-w-7xl mx-auto px-4 md:px-16 py-12 md:pt-20 md:pb-6">
          <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 pb-12 border-b border-slate-900">
            <div class="flex-1 flex flex-col gap-3">
              <x-logo
                data-prefix="${prefix}"
                class="text-[1.75rem] xs:text-[2rem] text-white font-black tracking-tight"
              ></x-logo>
              <p class="text-sm max-w-sm font-light">
                Nowoczesna fizjoterapia i logopedia dla całej rodziny. Dbamy o Twój komfort i zdrowie
                każdego dnia.
              </p>
            </div>

            <div class="flex flex-col gap-4 flex-1">
              <h2 class="text-xl font-black uppercase tracking-wider text-primary-300">
                Kontakt
              </h2>

              <div class="flex gap-3 items-center group text-sm md:text-base">
                <img
                  src="img/email.svg"
                  alt="Email"
                  class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity brightness-0 invert"
                />
                <a
                  href="mailto:biuro@filo-terapia.pl?subject=Kontakt z filo-terapia.pl"
                  class="hover:text-secondary-400 transition-colors duration-200"
                >
                  biuro@filo-terapia.pl
                </a>
              </div>

              <div class="flex gap-3 items-center group text-sm md:text-base">
                <img
                  src="img/phone.svg"
                  alt="Telefon"
                  class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity brightness-0 invert"
                />
                <a
                  href="tel:+48694939755"
                  class="hover:text-secondary-400 transition-colors duration-200"
                >
                  +48 694 939 755
                </a>
              </div>

              <div class="flex gap-3 items-center group text-sm md:text-base">
                <img
                  src="img/map-marker.svg"
                  alt="Adres"
                  class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity brightness-0 invert"
                />
                <a
                  href="${mapsUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-secondary-400 transition-colors duration-200"
                >
                  ul. Świętokrzyska 64, Gdańsk
                </a>
              </div>
            </div>

            <div class="flex-1 flex flex-col gap-3">
              <h2 class="text-xl font-black uppercase tracking-wider text-primary-300">
                Obserwuj nas
              </h2>

              <div class="flex gap-6">
                <a href="https://facebook.com/profile.php?id=1" class="select-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    class="w-8 h-8 fill-gray-200 hover:fill-[#0866ff] active:opacity-80 transition-colors duration-150"
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
                    class="min-w-8 h-8 fill-gray-200 hover:fill-[#E1306C] active:opacity-80 transition-colors duration-150"
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
            </div>
          </div>

          <span class="pt-6 flex justify-center text-xs text-slate-200">
            &copy; 2026 filo-terapia.pl. Wszelkie prawa zastrzeżone.
          </span>
        </div>
      </footer>
    `;
  }
}

customElements.define("x-footer", Footer);
