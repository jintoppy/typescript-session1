class Item {
    constructor(public name: string, public price: number){
    }
}
const itemList : Array<Item> = [
    new Item('phone', 200),
    new Item('tv', 100),
    new Item('light', 300)    
];

const myBtn : HTMLButtonElement = document.querySelector('#mybtn');
const myInput : HTMLInputElement = document.querySelector('#myinput');
const container : HTMLDivElement = document.querySelector('#container');

myBtn.addEventListener('click', () => {
   const filteredList : Array<Item> =  itemList
                                            .filter(item => item.name.indexOf(myInput.value) > -1 );
  renderList(filteredList);
    
});


function renderList(list : Array<Item>){
  container.innerText = "";
  const tableEl : HTMLTableElement = document.createElement('table');
  tableEl.border = "1";
  tableEl.cellPadding = "10";
  const headerRow : HTMLTableRowElement = document.createElement('tr');
  const nameHeaderCell : HTMLTableHeaderCellElement = document.createElement('td');
  nameHeaderCell.innerHTML = "<h3>Name</h3>";
  const priceHeaderCell : HTMLTableHeaderCellElement = document.createElement('td');
  priceHeaderCell.innerHTML = "<h3>Price</h3>";
  headerRow.appendChild(nameHeaderCell);
  headerRow.appendChild(priceHeaderCell);
  tableEl.appendChild(headerRow);

  list.forEach((item: Item) => {
    const trEl: HTMLTableRowElement = document.createElement('tr');
    const nameTdEl : HTMLTableCellElement = document.createElement('td');
    nameTdEl.innerText = item.name;
    const priceTdEl : HTMLTableCellElement = document.createElement('td');
    priceTdEl.innerText = '' + item.price;
    trEl.appendChild(nameTdEl);
    trEl.appendChild(priceTdEl);
    tableEl.appendChild(trEl);
  });
  container.appendChild(tableEl);
}

renderList(itemList);