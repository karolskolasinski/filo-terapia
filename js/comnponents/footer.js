class Footer extends HTMLElement {
  static observedAttributes = ["data-path"];

  constructor() {
    super();
    const path = this.getAttribute("data-path");
    const prefix = path === "index" ? "#" : "/#";

    this.innerHTML = `
<footer class="bg-slate-900 w-full text-white">
  <div class="max-w-7xl mx-auto px-4 md:px-16 py-10 md:pt-20 md:pb-0">
    <div class="flex flex-col lg:flex-row gap-16 pb-8">
      <div class="flex-1 flex flex-col gap-2">
        <a href="${prefix}" class="flex gap-2 items-center w-fit">
          <img src="img/logo.svg" alt="logo" class="w-8 xs:w-9 brightness-0 invert" />
          <div class="flex flex-col font-black text-[1.75rem] leading-5 xs:text-[2rem] xs:leading-6">
            <div class="text-indigo-500">healthy</div>
            <div class="tracking-tight">work</div>
          </div>
        </a>
        
        <small>fizjoterapia w miejscu pracy</small>
      </div>

      <div class="flex flex-col gap-4 flex-1">
        <h2 class="text-indigo-200 text-2xl font-bold">Kontakt</h2>

        <div class="flex gap-2 items-center">
          <img src="img/email.svg" alt="logo" class="w-6 xs:w-7 brightness-0 invert" />
          <a href="mailto:buiro@healthywork.pl?subject=Kontakt z healthywork.pl">
            biuro@healthywork.pl
          </a>
        </div>

        <div class="flex gap-2 items-center">
          <img src="img/phone.svg" alt="logo" class="w-6 xs:w-7 brightness-0 invert" />
          +48 694 939 755
        </div>
      </div>

      <div class="flex-1">
        <h2 class="text-indigo-200 text-2xl font-bold">Obserwuj nas</h2>
        
        <div class="flex gap-4 pt-4">
          <a href="https://www.facebook.com/profile.php?id=100032042062158"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="min-w-8 h-8 fill-white hover:fill-[#0866ff]">
              <path class="transition-colors duration-200" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
          </a>
          
          <a href="https://www.linkedin.com/company/fizjotop/"> 
            <svg viewBox="0 0 128 128" class="min-w-8 h-8 group">
              <path fill="white" class="group-hover:fill-[#0077B5] transition-colors duration-200" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"/>
              <path d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <small class="py-4 text-center block">
      2025 - copyright © healthywork.pl 
    </small>
  </div>
</footer>
`;
  }
}

customElements.define("hw-footer", Footer);
