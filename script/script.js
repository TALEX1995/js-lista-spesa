console.log('JS Ok')

// Recover DOM Element

shoppingListPlaceholder = document.getElementById('shopping-list');


// Create Array

shoppingListArray = ['uova', 'pane', 'pollo', 'pizza', 'redbull', 'patate', 'mozzarella'];


// Create shopping list
shoppingList = ''

// Crate variable index

currentIndex = 0

// Cicle with while

while (currentIndex !== shoppingListArray.length) {

    // Create Node
    shoppingList += `<p>${shoppingListArray[currentIndex]}</p>`;

    // Increment current Index
    currentIndex++
}




// Cicle with for
// for (let i = 0; i < shoppingListArray.length; i++) {
//     shoppingList += `<p>${shoppingListArray[i]}</p>`;
// }

shoppingListPlaceholder.innerHTML = shoppingList