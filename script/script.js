console.log('JS Ok')

// Recover DOM Element

shoppingListPlaceholder = document.getElementById('shopping-list');


// Create Array

shoppingListArray = ['uova', 'pane', 'pollo', 'pizza', 'redbull', 'patate', 'mozzarella'];


// Create shopping list
shoppingList = ''

for (let i = 0; i < shoppingListArray.length; i++) {
    shoppingList += `<p>${shoppingListArray[i]}</p>`;
}

shoppingListPlaceholder.innerHTML = shoppingList