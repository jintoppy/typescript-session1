var Item = /** @class */ (function () {
    function Item(name, price) {
        this.name = name;
        this.price = price;
    }
    return Item;
}());
var itemList = [
    new Item('phone', 200),
    new Item('tv', 100),
    new Item('light', 300)
];
var myBtn = document.querySelector('#mybtn');
var myInput = document.querySelector('#myinput');
var container = document.querySelector('#container');
myBtn.addEventListener('click', function () {
    var filteredList = itemList
        .filter(function (item) { return item.name.indexOf(myInput.value) > -1; });
    renderList(filteredList);
});
function renderList(list) {
    container.innerText = "";
    var tableEl = document.createElement('table');
    tableEl.border = "1";
    tableEl.cellPadding = "10";
    var headerRow = document.createElement('tr');
    var nameHeaderCell = document.createElement('td');
    nameHeaderCell.innerHTML = "<h3>Name</h3>";
    var priceHeaderCell = document.createElement('td');
    priceHeaderCell.innerHTML = "<h3>Price</h3>";
    headerRow.appendChild(nameHeaderCell);
    headerRow.appendChild(priceHeaderCell);
    tableEl.appendChild(headerRow);
    list.forEach(function (item) {
        var trEl = document.createElement('tr');
        var nameTdEl = document.createElement('td');
        nameTdEl.innerText = item.name;
        var priceTdEl = document.createElement('td');
        priceTdEl.innerText = '' + item.price;
        trEl.appendChild(nameTdEl);
        trEl.appendChild(priceTdEl);
        tableEl.appendChild(trEl);
    });
    container.appendChild(tableEl);
}
renderList(itemList);
