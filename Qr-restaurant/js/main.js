import { fetchMenu } from "./api.js";
import { renderCards } from "./ui.js";

//trace the moment of page loading
document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMenu();
  //the function that renders element of menu on console taken from d.Json
  renderCards(data.menu);

  //reach out input elements
  const inputs = document.querySelectorAll("#buttons input");
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selected = input.id;
      //if 'all products" selected, render all menu
      if (selected == "all") {
        renderCards(data.menu);
      } else {
        //if related items selected, render filtered ones
        const filtered = data.menu.filter((item) => item.category == selected);

        renderCards(filtered);
      }
    });
  });
});
