function addButton() {
    //Get element
    var userInput = document.getElementById("input").value;
    var list = document.getElementById("toDoList");

    addItem(userInput, list);
}
function doneButton() {
    var selectedItem = document.getElementById("toDoList");
    var doneItem = selectedItem.value;    
    removeItem(selectedItem);
    
    //Creates a new element in the new list
    var doneList = document.getElementById("doneList");
    addItem(doneItem, doneList);


}
function removeButton() {
    var selectedItem = document.getElementById("toDoList");
    removeItem(selectedItem);
}
function removeDoneButton() {
    var selectedItem = document.getElementById("doneList");
    removeItem(selectedItem);
}





//Class
function addItem (userInput, list) {
    //Create
    var create = document.createElement("option");

    //Adds list item
    create.innerHTML = userInput;
    list.appendChild(create);
}
function removeItem (selectedItem) {
    selectedItem.remove(selectedItem.selectedIndex);
}