let contentEl = document.getElementById("content-id");
let cartidEl = document.getElementById("cartid");
async function fetchAsync() {
  let response = await fetch("https://chideranewwebapi.herokuapp.com/api");
  let data = await response.json();
  console.log(data);

  let dataArr = data["data"];
  dataArr.forEach((val) => {
    contentEl.innerHTML += `        <div class="col-sm-3 space">
        <div class="card">
          <img
            src="${val["images"][0]}"
            class="card-img-top"
            height="350px"
            alt="..."
          />
          <div class="card-body">
            <p class="card-title">${val["productName"]}</p>
            <p class="card-text"><strong>N</strong> ${val["price"]}</p>

            <div class="row">
            <a id="addcartid" onclick="displaycon()" class="btn btn-dark col-8 btn-colorsp "
              >Add Cart</a
            >
            <a href="product.html?productid=${val['productId']}" class="col-4 btn btn-primary fs-4"
              ><i class="fa fa-eye"></i> </a>
            </div>
            <br>
          </div>

        </div>
      </div>
`;
  });

  console.log(data["data"]);
  return data;
}

fetchAsync();

let sum=0
function displaycon() {
    sum++
    cartidEl.innerHTML=sum
}


displaycon()


