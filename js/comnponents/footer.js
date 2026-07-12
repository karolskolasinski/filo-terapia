import { html } from "./utils.js";

class Footer extends HTMLElement {
  static observedAttributes = ["data-path"];

  constructor() {
    super();
    const path = this.getAttribute("data-path");
    const prefix = path === "index" ? "#" : "/#";

    this.innerHTML = html`
      <footer class="bg-slate-950 w-full text-slate-300 border-t border-slate-900">
        <div class="max-w-7xl mx-auto px-4 md:px-16 py-12 md:pt-20 md:pb-6">
          <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 pb-12 border-b border-slate-900">
            <div class="flex-1 flex flex-col gap-3">
              <x-logo
                data-prefix="${prefix}"
                class="text-[1.75rem] xs:text-[2rem] text-white font-black tracking-tight"
              ></x-logo>
              <p class="text-sm text-slate-400 max-w-sm font-light">
                Nowoczesna fizjoterapia i logopedia dla całej rodziny. Dbamy o Twój komfort i zdrowie
                każdego dnia.
              </p>
            </div>

            <div class="flex flex-col gap-4 flex-1">
              <h2 class="text-white text-xl font-black uppercase tracking-wider text-indigo-400">
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
                  class="hover:text-white transition-colors duration-200"
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
                <a href="tel:+48694939755" class="hover:text-white transition-colors duration-200">
                  +48 694 939 755
                </a>
              </div>
            </div>

            <div class="flex-1">
              <h2 class="text-white text-xl font-black uppercase tracking-wider text-indigo-400">
                Obserwuj nas
              </h2>

              <div class="flex gap-4 pt-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100032042062158"
                  aria-label="Facebook"
                  class="group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    class="w-7 h-7 fill-slate-400 group-hover:fill-[#0866ff] transition-colors duration-200"
                  >
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    />
                  </svg>
                </a>

                <a href="https://www.linkedin.com/company/fizjotop/" aria-label="LinkedIn" class="group">
                  <svg
                    viewBox="0 0 128 128"
                    class="w-7 h-7 fill-slate-400 group-hover:fill-[#0077B5] transition-colors duration-200"
                  >
                    <path
                      d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
                    />
                    <path
                      fill="#020617"
                      d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                    />
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
