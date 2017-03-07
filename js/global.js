// Variables
var info 
var searchTerm = 'hats'
// Logic
getEtsyData();

    document.querySelector('#searchTerm').addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            searchEtsy();
        }
    });

document.querySelector('#searchButton').addEventListener('click', searchEtsy);

// functions

function searchEtsy() {
    searchTerm = document.querySelector('#searchTerm').value;
    if (searchTerm !== '') {
        fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchTerm) + '&includes=Images,Shop')
        .then(response => response.json())
        .then(loopThroughSearchResults);
    }
}

function loopThroughSearchResults(data) {

    document.querySelector('.app').innerHTML = '';
    if (data.results.length > 0) {
            createCard(data.results);
    }
}

function createCard(items) {
    console.log(items)
    items.forEach(function(details){

    var card = `<div class="card col-sm-4">
        <img src="${details.Images[0].url_170x135}" alt="Image"/>
        <div class="card-caption">${details.title.slice(0,50)}...</div>
        <div class="row">
        <div class="col-sm-6">
        <div class="card-author text-muted">${details.Shop.shop_name}</div>
        </div>
        <div class="col-sm-6">
        <div class="card-price">$${details.price}</div>
            </div>
        </div>
    </div>`;

    document.querySelector('.app').innerHTML += card;
        })
}

function getEtsyData() {
    console.log(searchTerm)

    fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchTerm) + '&includes=Images,Shop')
        .then(response => response.json())
        .then(data => {
           info = data.results;
           createCard(info);
        });
}






