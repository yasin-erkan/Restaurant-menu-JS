//call the interface in which menu elements are  gonna be listed
const menuList = document.getElementById("menu-list");

//the function that renders the elements of menu
export const renderCards = (data) => {
  const cardsHtml = data
    .map(
      (item) =>
        `
       <a
        href="/detail.html?id=${item.id}"
        class="d-flex flex-column flex-md-row text-dark text-decoration-none gap-3 mx-4 my-4"
        id="card"
      >
        
        <img
          src="${item.img}"
          class="rounded img-fluid shadow"
          alt=""
        />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${item.price} $</p>
          </div>

          <p class="lead">
         ${item.desc}
          </p>
        </div>
      </a>  
 `
    )
    .join("");
  //pass through constructed Html to the 'div' in menuList
  menuList.innerHTML = cardsHtml;
};

// the function that renders the page product details
export const renderDetailPage = (product, outlet) => {
  outlet.innerHTML = `
  <div class="d-flex justify-content-between fs-6">
        <a href="/">
          <img width="35px" src="./images/home.png" alt="" />
        </a>
        <p>Homepage / ${product.category} / ${product.title.toLowerCase()}</p>
      </div>
      <h1 class="text-center my-4">${product.title} </h1>

      <img
        src="${product.img}"
        style="max-height: 400px"
        class="rounded object-fit-cover shadow"
        alt="image"
      />

      <h4 class="mt-4">
        Product category:
        <span class="text-success">${product.category}</span>
      </h4>

      <h4 class="mt-4">
        Product Price:
        <span class="text-success">${product.price} ₺</span>
      </h4>

      <p class="lead">
       ${product.desc}
      </p>
  `;
};

export const renderNotFoundPage = (outlet) => {
  outlet.innerHTML = `

  <div style='height:90vh' class='d-flex justify-content-center align-items-center'>
  <div class='d-flex flex-column align-items-center gap-3'>
    <h1 class='fw-bold'>The Product is not found !</h1>
    <a href='/'>Return Home</a>
  </div> 
  </div>
            
   `;
};
