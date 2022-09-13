const h1 = document.createElement("h1");
const input = document.createElement('input');
const button = document.createElement('button');
const list = document.createElement('ul');

document.body.append(h1);
document.body.append(input);
document.body.append(button);
document.body.append(list);

button.textContent = 'Add';
h1.textContent = 'To Do List';

const items = JSON.parse(localStorage.getItem('items')) || [];
items.forEach(item => {
    addItem(item);
});

button.addEventListener('click', function() {
    const item = {value: input.value, checked: false}
    items.push(item);
    addItem(item);
});

function addItem(item) {
    localStorage.setItem('items', JSON.stringify(items));
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    label.innerText = item.value;
    if (item.checked) {
        checkbox.checked = true;
    }
    // saving the value of the input
    input.value = '';
    checkbox.type = 'checkbox';
    li.append(checkbox);
    li.append(label);
    list.append(li);
    checkbox.addEventListener('change', function() {
        item.checked = checkbox.checked;
        localStorage.setItem('items', JSON.stringify(items))
    });
}


