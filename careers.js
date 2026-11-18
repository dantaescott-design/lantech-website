"use strict";
const filter = document.getElementById("role-filter");
const cards = Array.from(document.querySelectorAll(".opening-card"));
const status = document.getElementById("filter-status");
if (filter && cards.length && status) {
  document.querySelector(".openings-toolbar").hidden = false;
  filter.addEventListener("change", () => {
    let categoryCount = 0;
    let openingCount = 0;
    for (const card of cards) {
      card.hidden = filter.value !== "all" && card.dataset.family !== filter.value;
      if (!card.hidden) {
        categoryCount += 1;
        openingCount += parseInt(card.querySelector(".opening-count").textContent, 10);
      }
    }
    status.textContent = `Showing ${categoryCount} role ${categoryCount === 1 ? "category" : "categories"} · ${openingCount} openings`;
  });
}
