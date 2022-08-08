"use strict";


const shoppingList = ['Arroz', 'Feijão', 'Carne', 'Massa', 'Biscoito', 'Pão']

const listEl = document.getElementById ('list'); 
const searchField = document.getElementById ('searchField'); 
searchField.addEventListener('input', inputHandler); 

this.fillList(); (1)

function fillList(list = shoppingList) { 
    listEl.innerHTML = ""; 
    for(let i=0; i < list.length; i++) {
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

function inputHandler() {
    const filteredList = shoppingList.filter(el => {
        const listItem = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItem.includes(searchWord);
    });

    fillList(filteredList); (2)
}