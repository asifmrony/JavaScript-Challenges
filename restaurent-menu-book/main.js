var form = document.querySelector('#addForm');

var itemsList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);
// delete event
itemsList.addEventListener('click', removeItem);


//addItem 
function addItem(e) {
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create li element
    var newLi = document.createElement('li');
    //add class
    newLi.className = 'list-group-item';
    //add item from input 
    newLi.appendChild(document.createTextNode(newItem));

    //create button element
    var deleteBtn = document.createElement('button');
    //add classes to deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //create textNode and add to the button
    deleteBtn.appendChild(document.createTextNode('X'));
    //add button to the list element
    newLi.appendChild(deleteBtn);

    //add to the main itemList
    itemsList.appendChild(newLi);
}


//remove item function
function removeItem(e) {
    e.preventDefault();

}