// We can manage url parameters more easily with the URLSearchParams class. This class requires the url to be entered as a parameter. Then, the relevant parameter is retrieved with the get method.

const params = new URLSearchParams(window.location.search);

const id = parseInt(params.get("id"));
import { renderDetailPage, renderNotFoundPage } from "./ui.js";

//Html element to which the product detail will be transferred
const outlet = document.getElementById("outlet");

//Function to be run when page loads
document.addEventListener("DOMContentLoaded", async () => {
  //send a request to db.json page
  const res = await fetch("../db.json");
  //convert data into js element
  const data = await res.json();
  //find element with its 'id'
  const product = data.menu.find((item) => item.id === id);
  ////if product doesn't exist; go to 'not found page'
  if (!product) {
    renderNotFoundPage(outlet);
  } else {
    renderDetailPage(product, outlet);
  }
});
