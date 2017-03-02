// Variables
var info = {};
// Logic
getEtsyData();

createCard({
    src: 'http://unsplash.it/400/300?image=500',
    caption:'Images',
    author:'Shop',
    price:'Price',
});
// cre
// functions

function getEtsyData() {
    fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop')
        .then(response => response.json())
        .then(data => {
           info = data;
           renderCreateCard();
           console.log(info);
        });
}

function renderCreateCard() {
    info.results.forEach(createCard);
}


function createCard(image) {
    var card = `<div class="card col-sm-4">
        <img src="${image.Images[0].url_170x135}" alt="Image"/>
        <div class="card-caption">${image.title.slice(0,50)}...</div>
        <div class="row">
        <div class="col-sm-6">
        <div class="card-author text-muted">${image.Shop.shop_name}</div>
        </div>
        <div class="col-sm-6">
        <div class="card-price">$${image.price}</div>
            </div>
        </div>
    </div>`;
    document.querySelector('.app').innerHTML += card;
}

function keyPress() {
  getEtsyData();
}
function enterSearch() {
      document.querySelector('#search').addEventListener('click', keypress);
}