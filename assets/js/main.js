/* =========================================================
   Charles Chiu — site behaviour
   Buildless, dependency-free. Edit the DATA section below
   to add skills/projects; the page re-renders automatically.
   ========================================================= */

/* ---------- 1. DATA (edit me) ----------------------------
   To add a skill: add a string to `skills`.
   To add a project: add an object to `projects`.
     - link is optional (omit or set to "" to hide the link)
   -------------------------------------------------------- */
const skills = [
    "C",
    "C++",
    "Data Structures",
    "Algorithms",
    "Git",
];

const projects = [
    {
        title: "Personal Website",
        description: "This site — a buildless, themeable portfolio served on GitHub Pages.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/charleschiu075/charleschiu075.github.io",
    },
    {
        title: "Coursework & Experiments",
        description: "C/C++ exercises and small programs from my CS studies at YZU.",
        tags: ["C", "C++"],
        link: "https://github.com/charleschiu075",
    },
];

/* ---------- 2. RENDERING -------------------------------- */
function renderSkills() {
    const list = document.getElementById("skills-list");
    if (!list || !skills.length) return;
    list.innerHTML = skills
        .map((s) => `<li class="skill-tag">${escapeHtml(s)}</li>`)
        .join("");
}

function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    if (!projects.length) {
        grid.innerHTML = `<p class="projects__empty">More projects coming soon.</p>`;
        return;
    }
    grid.innerHTML = projects
        .map((p) => {
            const tags = (p.tags || [])
                .map((t) => `<li>${escapeHtml(t)}</li>`)
                .join("");
            const link = p.link
                ? `<a class="project-card__link" href="${encodeURI(p.link)}" target="_blank" rel="noopener">View</a>`
                : "";
            return `
                <article class="project-card">
                    <h3 class="project-card__title">${escapeHtml(p.title)}</h3>
                    <p class="project-card__desc">${escapeHtml(p.description)}</p>
                    <ul class="project-card__tags">${tags}</ul>
                    ${link}
                </article>`;
        })
        .join("");
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    }[c]));
}

/* ---------- 3. THEME TOGGLE ----------------------------- */
function initTheme() {
    const root = document.documentElement;
    const toggle = document.getElementById("theme-toggle");
    const icon = toggle?.querySelector(".theme-toggle__icon");

    const stored = localStorage.getItem("theme");
    const prefersLight =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = stored || (prefersLight ? "light" : "dark");
    applyTheme(initial);

    toggle?.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
        applyTheme(next);
        localStorage.setItem("theme", next);
    });

    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);
        if (icon) icon.textContent = theme === "light" ? "🌞" : "🌙";
    }
}

/* ---------- 4. SCROLL REVEAL ---------------------------- */
function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
    }
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
}

/* ---------- 5. INIT ------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
    renderProjects();
    initTheme();
    initReveal();
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
});
