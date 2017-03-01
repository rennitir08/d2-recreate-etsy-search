// // Variables
// var data = [{"id":1001,"firstName":"Lorem","lastName":"ipsum","department":"dolor","client":"sit"},{"id":1002,"firstName":"amet","lastName":"consectetur","department":"adipiscing","client":"elit"},{"id":1003,"firstName":"Integer","lastName":"nec","department":"odio","client":"Praesent"},{"id":1003,"firstName":"libero","lastName":"Sed","department":"cursus","client":"ante"},{"id":1004,"firstName":"dapibus","lastName":"diam","department":"Sed","client":"nisi"},{"id":1005,"firstName":"Nulla","lastName":"quis","department":"sem","client":"at"},{"id":1006,"firstName":"nibh","lastName":"elementum","department":"imperdiet","client":"Duis"},{"id":1007,"firstName":"sagittis","lastName":"ipsum","department":"Praesent","client":"mauris"},{"id":1008,"firstName":"Fusce","lastName":"nec","department":"tellus","client":"sed"},{"id":1009,"firstName":"augue","lastName":"semper","department":"porta","client":"Mauris"},{"id":1010,"firstName":"massa","lastName":"Vestibulum","department":"lacinia","client":"arcu"},{"id":1011,"firstName":"eget","lastName":"nulla","department":"Class","client":"aptent"},{"id":1012,"firstName":"taciti","lastName":"sociosqu","department":"ad","client":"litora"},{"id":1013,"firstName":"torquent","lastName":"per","department":"conubia","client":"nostra"},{"id":1014,"firstName":"per","lastName":"inceptos","department":"himenaeos","client":"Curabitur"},{"id":1015,"firstName":"sodales","lastName":"ligula","department":"in","client":"libero"}];
// // Object > Node > Element > HTMLElement
// // Logic
// document.querySelector('thead').addEventListener('click', changeSortOrder);

// renderData();

// // Functions
// function createRow(row) {
//     console.log(row);
//     var tableRow = document.createElement('tr');
//     var columnId = document.createElement('td');
//     var columnFirstName = document.createElement('td');
//     var columnLastName = document.createElement('td');
//     var columnDepartment = document.createElement('td');
//     var columnClient = document.createElement('td');

//     columnId.innerHTML = row.id;
//     columnFirstName.innerHTML = row.firstName;
//     columnLastName.innerHTML = row.lastName;
//     columnDepartment.innerHTML = row.department;
//     columnClient.innerHTML = row.client;

//     tableRow.appendChild(columnId);
//     tableRow.appendChild(columnFirstName);
//     tableRow.appendChild(columnLastName);
//     tableRow.appendChild(columnDepartment);
//     tableRow.appendChild(columnClient);

//     document.querySelector('tbody').appendChild(tableRow);
// }

// function changeSortOrder () {
//     data = data.reverse();
//     renderData();
// }

// function renderData() {
//     document.querySelector('tbody').innerHTML = '';
//     data.forEach(createRow);
// }
createCard({
    src: 'http://unsplash.it/400/300?image=500',
    caption: 'Unknown Image'
});
createCard({
    src: 'http://unsplash.it/400/300?image=600',
    caption: 'Unknown Image'
});
createCard({
    src: 'http://unsplash.it/400/300?image=700',
    caption: 'Unknown Image'
});

function createCard(image) {
    var card = `<div class="card">
        <img src="${image.src}" alt="Image"/>
        <h5 class="card-caption">${image.caption}</h5>
    </div>`;



    document.querySelector('#app').innerHTML += card;
}