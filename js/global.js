// Variables

// Logic
createCard({
    src: 'http://unsplash.it/400/300?image=500',
    caption:'Image',
    author:'Author',
    price:'Price',
});
createCard({
    src: 'http://unsplash.it/400/300?image=600',
    caption:'Image',
    author:'Author',
    price:'Price',
});
createCard({
    src: 'http://unsplash.it/400/300?image=700',
    caption:'Image',
    author:'Author',
    price:'Price',
});
createCard({
    src: 'http://unsplash.it/400/300?image=800',
    caption:'Image',
    author:'Author',
    price:'Price',
});
createCard({
    src: 'http://unsplash.it/400/300?image=900',
    caption:'Image',
    author:'Author',
    price:'Price',
});
createCard({
    src: 'http://unsplash.it/400/300?image=110',
    caption:'Image',
    author:'Author',
    price:'Price',
});
createCard({
    src: 'http://unsplash.it/400/300?image=120',
    caption:'Image',
    author:'Author',
    price:'Price',
});
createCard({
    src: 'http://unsplash.it/400/300?image=130',
    caption:'Image',
    author:'Author',
    price:'Price',
});
createCard({
    src: 'http://unsplash.it/400/300?image=140',
    caption:'Image',
    author:'Author',
    price:'Price',
});
createCard({
    src: 'http://unsplash.it/400/300?image=300',
    caption:'Image',
    author:'Author',
    price:'Price',
});
createCard({
    src: 'http://unsplash.it/400/300?image=160',
    caption:'Image',
    author:'Author',
    price:'Price',
});
createCard({
    src: 'http://unsplash.it/400/300?image=170',
    caption:'Image',
    author:'Author',
    price:'Price',
});
// functions
function createCard(image) {
    var card = `<div class="card col-sm-4">
        <img src="${image.src}" alt="Image"/>
        <div class="card-caption">${image.caption}</div>
        <div class="row">
        <div class="col-sm-6">
        <div class="card-author text-muted">${image.author}</div>
        </div>
        <div class="col-sm-6">
        <div class="card-price">${image.price}</div>
            </div>
        </div>
    </div>`;
    document.querySelector('.app').innerHTML += card;
}