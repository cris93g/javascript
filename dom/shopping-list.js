//creates class
class ShoppingList{
    constructor(){
        this.unorderList = document.querySelector('ul');
        this.input = document.querySelector('input');
        this.button = document.querySelector('button');
    }
    //click function
    click(){
        this.button.onclick = ()=> {
        let currentValue = this.input.value;
        this.input.value = '';
        let newList = document.createElement('li');
        let newSpan = document.createElement('span');
        let newButton = document.createElement('button');
        //appends or adds elements
        newList.appendChild(newSpan);
        newList.appendChild(newButton);
        //new span becomes current value
        newSpan.textContent = currentValue;
        newButton.textContent = 'Delete';
        this.unorderList.appendChild(newList);
        //deletes item
        newButton.onclick = ()=> {
            this.unorderList.removeChild(newList);
        };
        this.input.focus();
        };
    }
}
//creates a new class --> myshopping class than i use the function or method click()
let myShoppingList= new ShoppingList()
myShoppingList.click()