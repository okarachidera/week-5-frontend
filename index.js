let contentEl=document.getElementById('content-id');
async function fetchAsync () {
    let response = await fetch('https://chideranewwebapi.herokuapp.com/api');
    let data = await response.json();


    let dataArr=data['data']
    dataArr.forEach(val => {
        contentEl.innerHTML+=`        <div class="col-sm-3 space">
        <div class="card">
          <img
            src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/89/356924/1.jpg?5413"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-title">Dorado Red Wine 75cl X 6</p>
            <p class="card-text"><strong>N</strong> 5,000</p>
            <a href="#!" class="btn btn-warning d-grid">Add Cart</a>
            <a href="checkout.html" class="btn btn-success d-grid btn-color"
              >checkout</a
            >
          </div>
        </div>
      </div>
`
    });

    console.log(data['data'])
    return data;
  }


  fetchAsync () 

