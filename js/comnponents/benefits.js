class Benefits extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
<section class="bg-gray-50" id="about">
  <div class="flex flex-col gap-10 px-4 md:px-16 py-10 md:py-20 max-w-7xl mx-auto">
    <h2 class="text-center w-full text-2xl md:text-4xl font-black">
      Korzyści
    </h2>

    <div class="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-10" data-aos="fade-up">
      <p class="text-gray-800 leading-7 p-8 flex gap-4 items-center border border-gray-300 rounded-2xl shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          class="min-w-12 h-12 fill-indigo-500"
        >
          <path 
            d="M360-120v-200q-62-5-121.5-14T120-360l20-80q83 23 168 31.5t172 8.5q86 0 171-8.5T820-440l20 80q-60 17-119.5 26T600-320v200H360Zm120-320q-34 0-57-23t-23-57q0-33 23-56.5t57-23.5q33 0 56.5 23.5T560-520q0 34-23.5 57T480-440ZM180-560q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T240-620q0 26-17.5 43T180-560Zm600 0q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T840-620q0 26-17.5 43T780-560ZM290-710q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T350-770q0 26-17.5 43T290-710Zm380 0q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T730-770q0 26-17.5 43T670-710Zm-190-50q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T540-820q0 26-17.5 43T480-760Z"
          />
        </svg>
        Zadowoleni i docenieni pracownicy
      </p>
      
      <p class="text-gray-800 leading-7 p-8 flex gap-4 items-center border border-gray-300 rounded-2xl shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          class="min-w-12 h-12 fill-indigo-500"
        >
          <path 
            d="M610-760q-21 0-35.5-14.5T560-810q0-21 14.5-35.5T610-860q21 0 35.5 14.5T660-810q0 21-14.5 35.5T610-760Zm0 660q-21 0-35.5-14.5T560-150q0-21 14.5-35.5T610-200q21 0 35.5 14.5T660-150q0 21-14.5 35.5T610-100Zm160-520q-21 0-35.5-14.5T720-670q0-21 14.5-35.5T770-720q21 0 35.5 14.5T820-670q0 21-14.5 35.5T770-620Zm0 380q-21 0-35.5-14.5T720-290q0-21 14.5-35.5T770-340q21 0 35.5 14.5T820-290q0 21-14.5 35.5T770-240Zm60-190q-21 0-35.5-14.5T780-480q0-21 14.5-35.5T830-530q21 0 35.5 14.5T880-480q0 21-14.5 35.5T830-430ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880v80q-134 0-227 93t-93 227q0 134 93 227t227 93v80Zm0-320q-33 0-56.5-23.5T400-480q0-5 .5-10.5T403-501l-83-83 56-56 83 83q4-1 21-3 33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z"
          />
        </svg>
        Zwiększenie wydajności i efektywności pracy pracowników
      </p>
      
      <p class="text-gray-800 leading-7 p-8 flex gap-4 items-center border border-gray-300 rounded-2xl shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          class="min-w-12 h-12 fill-indigo-500"
        >
          <path 
            d="M280-80v-200H80v-400h200v-200h400v200h200v400H680v200H280ZM160-520h200q10 0 19 5t14 13l35 52 54-162q4-12 14.5-20t23.5-8q10 0 19 5t14 13l68 102h179v-80H600v-200H360v200H160v80Zm200 360h240v-200h200v-80H600q-10 0-19-5t-15-13l-34-52-54 162q-4 12-15 20t-24 8q-10 0-19-5t-14-13l-68-102H160v80h200v200Zm120-320Z"
          />
        </svg>
        Mniej zwolnień lekarskich
      </p>
      
      <p class="text-gray-800 leading-7 p-8 flex gap-4 items-center border border-gray-300 rounded-2xl shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          class="min-w-12 h-12 fill-indigo-500"
        >
          <path 
            d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z"
          />
        </svg>
        Wyróżnienie się na tle konkurencji, zyskanie na atrakcyjności w oczach potencjalnych pracowników
      </p>
    </div>
  </div>
</section>

<section class="relative flex flex-col px-4 md:px-16 py-10 md:py-20 gap-10 max-w-7xl mx-auto">
  <div class="absolute left-0 top-0 -z-10 h-full w-full bg-white">
    <div class="relative h-full w-full bg-white">
      <div
        class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      >
      </div>
    </div>
  </div>

  <h2 class="text-center w-full text-2xl md:text-4xl font-black">
    Oparcie w badaniach naukowych (Evidence-Based)
  </h2>
  
  <p class="text-gray-500" data-aos="fade-up">
    Choroby układu kostno-stawowego, mięśniowego i tkanki łącznej stanowią 15,4% wszystkich zwolnień 
    lekarskich. I tu pojawiamy się my z naszym projektem 
    <strong class="text-black"><span class="text-indigo-500">healthy</span>work</strong> i walczymy
     z przyczyną absencji. 
  </p>
  
  <p class="text-gray-500" data-aos="fade-up">
    Dzięki szybkiej interwencji terapeutycznej u osób, które doznały urazów, fizjoterapeuci pomogli 
    Brytyjskiej sieci domów towarowych zaoszczędzić aż 41010 dni roboczych, czyli 2,7 mln funtów. Z usług
    fizjoterapeutów w ciągu 12 miesięcy skorzystały 2324 osoby<sup>*</sup>.
  </p>
  
  <p class="text-gray-500" data-aos="fade-up">
    W londyńskim centrum zdrowia fizjoterapeuci przyczynili się do znacznego skrócenia absencji w pracy. 
    Aż 89% osób poddanych terapii pozostało lub szybciej wróciło do obowiązków zawodowych. A u 93% 
    uzyskano znaczną poprawę stanu zdrowia<sup>*</sup>. 
  </p>
  
  <p class="text-gray-500" data-aos="fade-up">
    Funkcjonariusze londyńskiej straży pożarnej wzięli udział w programie prozdrowotnym, opierający się 
    na wykonywaniu odpowiednich ćwiczeń. Program przyniósł realny dochód. Zaoszczędzono aż 85% czasu, 
    który funkcjonariusze spędziliby na zwolnieniu zdrowotnym<sup>*</sup>. 
  </p>
</section>
`;
  }
}

customElements.define("hw-benefits", Benefits);
