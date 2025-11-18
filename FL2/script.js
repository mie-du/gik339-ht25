console.log(window);

console.log(window.console);
console.log(window.document.childNodes[1].childNodes);

const menuElement = document.getElementById('menu');
const ulElement = document.getElementById('ulla');
console.log(ulElement.children[1].innerHTML);
console.log(menuElement.children[0]);
console.log(menuElement.children[0].children[0]);

const list = document.querySelector('#menu ul');

const menuItems = menuElement.querySelectorAll('.menu_item');
console.log(menuItems);
const menuItemsHTMLCollection = document.getElementsByClassName('menu_item');
console.log(menuItemsHTMLCollection);
const menuItem = menuItems[0];
console.log(menuItem);
menuItem.style.backgroundColor = 'yellow';
menuItem.classList.add('error');
const newElement = document.createElement('li');

newElement.innerHTML = 'Item 4';
newElement.classList.add('menu_item');
console.log(newElement);

const newElementString = `
<li style="background-color: pink" class="menu_item error">
  Item 5
</li>`;
console.log(newElementString);

list.insertAdjacentElement('afterbegin', newElement);
list.insertAdjacentHTML('beforeend', newElementString);

for (let menuItem of menuItemsHTMLCollection) {
  menuItem.style.backgroundColor = 'gray';
  menuItem.classList.add('error');
}
function forEachNode(menuItem) {
  menuItem.style.fontSize = '2rem';
}
menuItems.forEach(forEachNode);
