const addItems = document.querySelector('.add-items'); // query by class name
const itemsList = document.querySelector('.plates'); // query by class name
const items = JSON.parse(localStorage.getItem('items')) || []; // parse stored JSON string back to an array object.
console.log('items', items); // example items (4) [{…}, {…}, {…}, {…}]

function addItem(e) {
	e.preventDefault(); // prevent the browser from performing the default action for that element (page refresh).
	const text = this.querySelector('[name=item]').value;
	console.log('text', text);
	const item = {
		text,
		done: false,
	};

	items.push(item);
	populateList(items, itemsList); //run this function to add items to the plates list.

	// add to local storage using setItem and JSON.stringify to change object to a string.
	localStorage.setItem('items', JSON.stringify(items));
	this.reset();
}

// re-renders entire list every time an item is added
function populateList(plates = [], platesList) {
	platesList.innerHTML = plates
		.map((plate, i) => {
			return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
				plate.done ? 'checked' : ''
			} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
		})
		.join(''); // turns array into a single long string;
}

// toggle state of item check in storage then repopulate list.
function toggleDone(e) {
	if (!e.target.matches('input')) return; // only see inputs
	const el = e.target;
	const index = el.dataset.index;
	items[index].done = !items[index].done; // set to opposite state
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
	console.log(e.target); // example: <input type="checkbox" data-index="0" id="item0">
}

addItems.addEventListener('submit', addItem); // run addItem callback fntn at each submit.
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
