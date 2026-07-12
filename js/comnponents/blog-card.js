import { html } from "./utils.js";

const CATEGORIES = {
  adults: {
    badge: "Dla dorosłych",
    accentBadge: "bg-indigo-600",
    accentTitle: "hover:text-indigo-600",
    accentLink: "text-indigo-600",
  },
  kids: {
    badge: "Dla dzieci",
    accentBadge: "bg-teal-600",
    accentTitle: "hover:text-teal-600",
    accentLink: "text-teal-600",
  },
  speech: {
    badge: "Mowa i rozwój",
    accentBadge: "bg-amber-600",
    accentTitle: "hover:text-amber-600",
    accentLink: "text-amber-600",
  },
};

class BlogCard extends HTMLElement {
  constructor() {
    super();
    const category = this.getAttribute("data-category");
    const preset = CATEGORIES[category];
    const title = this.getAttribute("data-title");
    const excerpt = this.getAttribute("data-excerpt");
    const date = this.getAttribute("data-date");
    const readTime = this.getAttribute("data-read-time");
    const href = this.getAttribute("data-href");
    const author = this.getAttribute("data-author");
    const image = this.getAttribute("data-image");
    const alt = this.getAttribute("data-alt");

    // The host element itself replaces the old <article class="blog-card">,
    // so the existing filter script (querySelectorAll(".blog-card") + data-category)
    // keeps working without any changes.
    this.className =
      "blog-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-all hover:shadow-md";
    this.setAttribute("data-category", category);
    const badgeClass =
      "absolute top-4 left-4 px-3 py-1 text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-sm";

    this.innerHTML = html`
      <div class="relative h-52 overflow-hidden">
        <img
          src="${image}"
          alt="${alt}"
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <span class="${preset.accentBadge} ${badgeClass}">
          ${preset.badge}
        </span>
      </div>
      <div class="p-6 flex flex-col grow">
        <div class="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
          <span>${date}</span>
          <span>•</span>
          <span>Czytania: ${readTime}</span>
        </div>
        <h3 class="font-bold text-gray-900 text-xl mb-3 leading-snug ${preset
          .accentTitle} transition-colors">
          <a href="${href}">${title}</a>
        </h3>
        <p class="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
          ${excerpt}
        </p>
        <div class="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <span class="text-xs text-gray-400">Autor: ${author}</span>
          <a
            href="${href}"
            class="${preset
              .accentLink} text-sm font-bold inline-flex items-center gap-1 hover:underline"
          >
            Czytaj więcej
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="w-4 h-4 fill-current">
              <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
            </svg>
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define("x-blog-card", BlogCard);
