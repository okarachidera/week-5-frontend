// given url string
let url_id = (window.location.search).split('=')
url_id=url_id[url_id.length-1]


console.log(url_id);

let productDetailEl=document.getElementById('productDetail')


async function fetchAsync() {
  let response = await fetch("https://chideranewwebapi.herokuapp.com/api");
  let data = await response.json();
  console.log(data);

  let dataArr = data["data"];
  dataArr.forEach((val) => {
    if (url_id==val['productId']) {
      productDetailEl.innerHTML+=`  <div class="row">
          <div class="col-md-6 mb-4 mb-md-0">
          
            <div id="mdb-lightbox-ui"></div>
          
            <div class="mdb-lightbox">
          
              <div class="row product-gallery mx-1">
          
                <div class="col-12 mb-0">
                  <figure class="view overlay rounded z-depth-1 main-img">
                    <a 
                      data-size="710x823">
                      <img src="${val['images'][0]}"
                        class="img-fluid z-depth-1">
                    </a>
                  </figure>
          
                </div>
              </div>
          
            </div>
          
          </div>
          <div class="col-md-6">
          
            <h5>${val['productName']}</h5>
            <p class="mb-2 text-muted text-uppercase small">Shirts</p>
                <i class="fas fa-star fa-sm text-primary"></i>
                <i class="fas fa-star fa-sm text-primary"></i>
                <i class="fas fa-star fa-sm text-primary"></i>
                <i class="fas fa-star fa-sm text-primary"></i>
                <i class="far fa-star fa-sm text-primary"></i>
            </ul>
            <p><span class="mr-1"><strong>$${val['price']}</strong></span></p>
            <p class="pt-1">${val['productDescription']}</p>
            <div class="table-responsive">
              <table class="table table-sm table-borderless mb-0">
                <tbody>
                  <tr>
                    <th class="pl-0 w-25" scope="row"><strong>Model</strong></th>
                    <td>Shirt 5407X</td>
                  </tr>
                  <tr>
                    <th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
                    <td>${val['color']}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr>
            <div class="table-responsive mb-2">
              <table class="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <td class="pl-0 pb-0 w-25">Quantity</td>
                    <td class="pb-0">Select size</td>
                  </tr>
                  <tr>
                    <td class="pl-0">
                      <div class="def-number-input number-input safari_only mb-0">
                        <div class="range">
                          <input type="number" class="form-input" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="mt-1">
                        <div class="form-check form-check-inline pl-0">
                          <input type="radio" class="form-check-input" id="small" name="materialExampleRadios"
                            checked>
                          <label class="form-check-label small text-uppercase card-link-secondary"
                            for="small">Small</label>
                        </div>
                        <div class="form-check form-check-inline pl-0">
                          <input type="radio" class="form-check-input" id="medium" name="materialExampleRadios">
                          <label class="form-check-label small text-uppercase card-link-secondary"
                            for="medium">Medium</label>
                        </div>
                        <div class="form-check form-check-inline pl-0">
                          <input type="radio" class="form-check-input" id="large" name="materialExampleRadios">
                          <label class="form-check-label small text-uppercase card-link-secondary"
                            for="large">Large</label>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a href="checkout.html" type="button" class="btn btn-primary btn-md mr-1 mb-2">Buy now</a>
            <button onclick="displaycon()" type="button" class="btn btn-light btn-md mr-1 mb-2"><i
                class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
          </div>
          </div>
          `
      
    }
  });

  console.log(data["data"]);
  return data;
}

fetchAsync();

let sum=0
let cartidEl = document.getElementById("cartid");
function displaycon() {
    sum++
    cartidEl.innerHTML=sum
}


