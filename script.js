/**
 * Chapter: {
 *   id,
 *   title,
 *   blurb,
 *   revealText,
 *   mediaType,
 *   mediaSrc,
 *   mediaAlt
 * }
 * Favorite: { id, label, detail }
 * Scenario: { id, title, description }
 */
const content = {
  herName: "Diva",
  intro:
    "Hi, this is purely for entertainment and to celebrate my existence. No animals were harmed in the making of this page.",
  closingMessage:
    "She makes ordinary days feel soft, silly, and full of color. The world is better with her in it.",
  chapters: [
    {
      id: "cake-origin-story",
      title: "Cake Se Cake",
      blurb:
        "to get cake, you gotta eat cake.",
      revealText:
        "Aunty is kinda yummy ngl",
      mediaType: "image",
      mediaSrc: "assets/cake-baby.jpeg",
      mediaAlt: "Baby photo of her eating cake",
    },
    {
      id: "leftover-princess-court",
      title: "Leftover Royalty",
      blurb:
        "The face he makes when he gets caught munching on my leftovers.",
      revealText:
        "House Designation: Princess",
      mediaType: "image",
      mediaSrc:
        "assets/brother-leftovers.jpeg",
      mediaAlt:
        "Her brother known for eating leftovers and getting special treatment",
    },
    {
      id: "dekha-bachooo-part-two",
      title: "Dekha Bachooo",
      blurb:
        "dekha bachoo kardi nah <s>kachi</s> pant geeli",
      revealText:
        "chalo ab ghus jao mere andar",
      mediaType: "image",
      mediaSrc: "assets/dekha-bachooo.jpg",
      mediaAlt: "Her intimidating expression saying dekha bachooo again",
    },
    {
      id: "aise-hi-hota-hai",
      title: "Aise Hi Hota Hai",
      blurb:
        "rona band karo, aise hi hota hai",
      revealText:
        "chalo ab shirt utaaro",
      mediaType: "image",
      mediaSrc:
        "assets/aise-hi-hota-hai.jpeg",
      mediaAlt: "Her shrugging expression saying aise hi hota hai",
    },
    {
      id: "alcohol-lover",
      title: "kutti Daaru",
      blurb: "fuck the vid bro, daaru peene de mereko",
      revealText:
        "POV: putting papas credit card to good use",
      mediaType: "video",
      mediaSrc: "assets/alcohol.mp4",
      mediaAlt: "Her enjoying a drink",
    },
    {
      id: "flower-energy",
      title: "Flower girlie",
      blurb: "wanna see a magic trick? Gimme some flowers and watch my legs magically spread",
      revealText:
        "but bro ngl fuck the flowers, look at my eyes glowing.",
      mediaType: "image",
      mediaSrc: "assets/flowers.jpeg",
      mediaAlt: "Her with flowers",
    },
    {
      id: "food-over-man",
      title: "Food Over Man",
      blurb:
        "\"would you trade me for mcdonalds? \"",
      revealText:
        "aur uthaa calls",
      mediaType: "video",
      mediaSrc: "assets/food-over-man.mov",
      mediaAlt: "Video where she says food is greater than man",
    },
    {
      id: "diet-coke-defense",
      title: "Diet Coke Logic",
      blurb: "<s>Boost</s> diet coke is the secret to my energy",
      revealText:
        "the only diet i follow *insert smirk emoji",
      mediaType: "image",
      mediaSrc: "assets/diet-coke.jpeg",
      mediaAlt: "Her drinking Diet Coke",
    },
    {
      id: "classy-saari",
      title: "Classy Saari",
      blurb:
        "how my in-laws see me ",
      revealText:
        "ngl looking very <s>fuckable</s> edible",
      mediaType: "image",
      mediaSrc: "assets/classy-saari.jpeg",
      mediaAlt: "Her wearing a classy saari",
    },
    {
      id: "rumi-child",
      title: "Mera Bacha",
      blurb: "Hi my name is Rumi",
      revealText:
        "Apparently im allergic to chicken. I think cuz im adopted they just dont wanna feed me the expensive stuff",
      mediaType: "image",
      mediaSrc: "assets/rumi.jpeg",
      mediaAlt: "Her dog Rumi",
    },
    {
      id: "bestfriend-pritha",
      title: "Bestfriend Roll Call",
      blurb:
        "my bestie and <s>Pratha</s> Pritha",
      revealText:
        "secret fact: ive kissed em both *insert diva heheeheh laugh",
      mediaType: "image",
      mediaSrc: "assets/me-bestfriend-pritha.jpeg",
      mediaAlt: "Photo of her with me and her best friend",
    },
    {
      id: "painting-pride",
      title: "Artist Mode",
      blurb: "whenever you feel good about your self about something, just remember there is a Diva out there who can do it better ",
      revealText:
        "title: Monalisa Devi",
      mediaType: "image",
      mediaSrc: "assets/painting.jpeg",
      mediaAlt: "Her with a painting she made",
    },
    {
      id: "mountain-vibe",
      title: "Mountain Main Character",
      blurb: "can i mount myself on top of you?",
      revealText:
        "if only you were as long as this hike",
      mediaType: "image",
      mediaSrc: "assets/mountain.jpeg",
      mediaAlt: "Her on a mountain",
    },
    {
      id: "simar-bestfriend",
      title: "SIMAR DADDY",
      blurb: "\"Dont worry babygirl, ill protect you from all these toxic men\"",
      revealText:
        "me recruiting women for my dream threesome",
      mediaType: "image",
      mediaSrc: "assets/simar.jpeg",
      mediaAlt: "Her with her best friend Simar",
    },
    {
      id: "donkey-chasing",
      title: "Donkey Chase",
      blurb:
        "Men when i exist",
      revealText:
        "Woah look who i ran into today, my exes",
      mediaType: "video",
      mediaSrc: "assets/donkey-chasing.mp4",
      mediaAlt: "Inside joke moment of a donkey chase",
    },
    {
      id: "guy-friend-flowers",
      title: "Flower Friend Entry",
      blurb: "He still thinks he can impress Rahul with flowers. Bhai tu paer chuu",
      revealText:
        "Oppenheimer *mic drop*",
      mediaType: "image",
      mediaSrc: "assets/guy-friend-flowers.jpeg",
      mediaAlt: "Her with her guy friend and flowers",
    },
    {
      id: "couple-pic",
      title: "Siblings!!",
      blurb: "Stop being jealous bitch!!",
      revealText:
        "ive seen him naked *insert diva heheeheh laugh*",
      mediaType: "image",
      mediaSrc: "assets/couple-pic.jpeg",
      mediaAlt: "A couple picture of us together",
    },
  ],
  favorites: [
    {
      id: "fav-food",
      label: "Favorite food",
      detail:
        "Whatever it is, she turns every bite into a full review show with bonus reactions.",
    },
    {
      id: "fav-color",
      label: "Favorite color",
      detail:
        "She picks shades that somehow match her mood and make everything around her prettier.",
    },
    {
      id: "fav-song",
      label: "Favorite song",
      detail:
        "One line plays and she is already performing it like a headliner on world tour.",
    },
    {
      id: "fav-show",
      label: "Comfort show",
      detail:
        "She knows every plot twist but still gasps at the same scene every single time.",
    },
    {
      id: "fav-drink",
      label: "Go-to drink",
      detail:
        "She has a precise order and a backup order because she is prepared and iconic.",
    },
  ],
  scenarios: [
    {
      id: "happiest",
      title: "When she is happiest",
      description:
        "Good company, good food, and just enough chaos to keep the story interesting.",
    },
    {
      id: "focus",
      title: "When she is in focus mode",
      description:
        "Minimal distractions, clear goal, and that determined energy where everything gets done.",
    },
    {
      id: "chaotic-cute",
      title: "When she is chaotic cute",
      description:
        "Random dance move, dramatic one-liner, and suddenly everyone is laughing.",
    },
  ],
};

const timelineEl = document.getElementById("timeline");
const favoritesEl = document.getElementById("favorites");
const scenariosEl = document.getElementById("scenarios");
const nameEl = document.getElementById("her-name");
const replayBtn = document.getElementById("replay-btn");
const heroCopy = document.querySelector(".hero-copy");
const closingMessageEl = document.getElementById("closing-message");

if (nameEl) {
  nameEl.textContent = content.herName;
}

if (heroCopy) {
  heroCopy.textContent = content.intro;
}

if (closingMessageEl) {
  closingMessageEl.textContent = content.closingMessage;
}

function renderTimeline() {
  if (!timelineEl) return;

  const cards = content.chapters
    .map((chapter, idx) => {
      const toneClass = idx % 2 === 0 ? "is-peach" : "is-sage";
      const hasTrail = idx < content.chapters.length - 1;
      const mediaHtml =
        chapter.mediaType === "video"
          ? `<video
                class="chapter-media"
                autoplay
                loop
                muted
                playsinline
                preload="metadata"
                aria-label="${chapter.mediaAlt}"
              >
                <source src="${chapter.mediaSrc}" />
                Your browser does not support the video tag.
              </video>`
          : `<img
                class="chapter-media"
                src="${chapter.mediaSrc}"
                alt="${chapter.mediaAlt}"
                loading="lazy"
              />`;
      return `
        <div class="timeline-step">
          <article
            class="chapter-card ${toneClass}"
            data-animate-on-scroll
            style="--enter-delay: ${idx * 90}ms"
          >
            <div class="chapter-head">
              ${mediaHtml}
              <h3 class="chapter-title">${chapter.title}</h3>
            </div>
            <p class="chapter-blurb">${chapter.blurb}</p>
            <button
              class="reveal-trigger"
              type="button"
              data-reveal-trigger
              aria-expanded="false"
            >
              Tap to reveal
            </button>
            <div class="reveal-panel" data-reveal-panel>
              <p class="reveal-text">${chapter.revealText}</p>
            </div>
          </article>
          ${
            hasTrail
              ? `<div
                  class="trail"
                  data-road-segment
                  aria-hidden="true"
                  style="--trail-delay: ${idx * 90 + 120}ms"
                >
                  <svg class="trail-svg" viewBox="0 0 120 220" preserveAspectRatio="none">
                    <path
                      class="trail-path"
                      d="M60 0 C20 48,100 90,60 140 C22 176,96 198,60 220"
                    />
                    <path
                      class="trail-center"
                      d="M60 0 C20 48,100 90,60 140 C22 176,96 198,60 220"
                    />
                  </svg>
                </div>`
              : ""
          }
        </div>
      `;
    })
    .join("");

  timelineEl.innerHTML = cards;
}

function renderFavorites() {
  if (!favoritesEl) return;

  favoritesEl.innerHTML = content.favorites
    .map(
      (item, idx) => `
      <div
        class="chip-item"
        data-animate-on-scroll
        style="--enter-delay: ${idx * 70}ms"
      >
        <button
          class="chip-btn"
          type="button"
          data-reveal-trigger
          aria-expanded="false"
        >
          ${item.label}
          <span aria-hidden="true">+</span>
        </button>
        <p class="chip-detail" data-reveal-panel>${item.detail}</p>
      </div>
    `,
    )
    .join("");
}

function renderScenarios() {
  if (!scenariosEl) return;

  scenariosEl.innerHTML = content.scenarios
    .map(
      (scenario, idx) => `
      <article
        class="scenario-item"
        data-animate-on-scroll
        style="--enter-delay: ${idx * 90}ms"
      >
        <button
          class="scenario-btn"
          type="button"
          data-reveal-trigger
          aria-expanded="false"
        >
          ${scenario.title}
          <span aria-hidden="true">+</span>
        </button>
        <p class="scenario-detail" data-reveal-panel>${scenario.description}</p>
      </article>
    `,
    )
    .join("");
}

function setupRevealToggles() {
  document.querySelectorAll("[data-reveal-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const container = trigger.closest(".chapter-card, .chip-item, .scenario-item");
      const panel = container?.querySelector("[data-reveal-panel]");
      if (!container || !panel) return;

      const isOpen = container.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", String(isOpen));

      const symbol = trigger.querySelector("span");
      if (symbol) {
        symbol.textContent = isOpen ? "−" : "+";
      }
    });
  });
}

function setupScrollAnimations() {
  const animatedEls = document.querySelectorAll("[data-animate-on-scroll]");
  if (!("IntersectionObserver" in window)) {
    animatedEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -35px 0px",
    },
  );

  animatedEls.forEach((el) => observer.observe(el));
}

function setupRoadTrailAnimation() {
  const segments = document.querySelectorAll("[data-road-segment]");
  if (!segments.length) return;

  if (!("IntersectionObserver" in window)) {
    segments.forEach((segment) => segment.classList.add("is-drawn"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-drawn");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.45,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  segments.forEach((segment) => observer.observe(segment));
}

function setupReplayButton() {
  if (!replayBtn) return;
  replayBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

function init() {
  renderTimeline();
  renderFavorites();
  renderScenarios();
  setupRevealToggles();
  setupScrollAnimations();
  setupRoadTrailAnimation();
  setupReplayButton();
}

init();
