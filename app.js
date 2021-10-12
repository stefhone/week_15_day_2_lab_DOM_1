document.addEventListener('DOMContentLoaded', () => {
    // a <p> with red text that says “Hey I’m red!”

        // 1 create element
        const newParagraph = document.createElement('p');
        // 2 give new element content
        newParagraph.textContent = 'Hey I’m red!'; 
        newParagraph.id = 'red';
        // 3 add to the DOM attach to parent element
        const newParagraphContainer = document.querySelector('#container');
        // 4 use DOM method appendChild
        newParagraphContainer.appendChild(newParagraph);


    // an <h3> with blue text that says “I’m a blue h3!”
        // 1 create element
        const newH3 = document.createElement('h3');
        // 2 give new element content
        newH3.textContent = 'I’m a blue h3!'; 
        newH3.id = 'blue';
        // 3 add to the DOM attach to parent element
        const newH3Container = document.querySelector('#container');
        // 4 use DOM method appendChild
        newH3Container.appendChild(newH3);

    // a <div> with a black border and pink background color with the following elements inside of it:
        // 1 create element
        const newDiv = document.createElement('div');
        // 2 give new element content
        newDiv.textContent = ''; 
        newDiv.classList.add('pink-div');
        // 3 add to the DOM attach to parent element
        const newDivContainer = document.querySelector('#container');
        // 4 use DOM method appendChild
        newDivContainer.appendChild(newDiv);

    // <h1> inside the pink div that says “I’m in a div”
        // 1 create element
        const newH1 = document.createElement('h1');
        // 2 give new element content
        newH1.textContent = 'I’m in a div'; 
        newH1.id = 'black';
        // 3 add to the DOM attach to parent element
        const newH1Container = document.querySelector('.pink-div');
        // 4 use DOM method appendChild
        newH1Container.appendChild(newH1);

    // a <p> that says “ME TOO!”
        // 1 create element
        const newP = document.createElement('p');
        // 2 give new element content
        newP.textContent = 'OMG! ME TOO!'; 
        newP.id = 'purple';
        // 3 add to the DOM attach to parent element
        const newPContainer = document.querySelector('.pink-div');
        // 4 use DOM method appendChild
        newPContainer.appendChild(newP);


    // EXTENSIONS
    // Create an array of strings to detail your favourite foods.
    const favouriteFoods = ['Pizza', 'Bread', 'Potato', 'Pasta'];

    // Add a new div with a header of "My Favourite Foods"
    // 1 create element
    const newDivFood = document.createElement('div');
    // 2 give new element content
    newDivFood.classList.add('food-div');
    // 3 add to the DOM attach to parent element
    const newDivFoodContainer = document.querySelector('#container');
    // 4 use DOM method appendChild
    newDivFoodContainer.appendChild(newDivFood);

    // 1 create element
    const h1FoodTitle = document.createElement('h1');
    // 2 give new element content
    h1FoodTitle.textContent = 'My Favourite Foods'; 
    // 3 add to the DOM attach to parent element
    const h1FoodTitleContainer = document.querySelector('.food-div');
    // 4 use DOM method appendChild
    h1FoodTitleContainer.appendChild(h1FoodTitle);

    // Append that list to the div
    // 1 create element
    const newUl = document.createElement('ul');
    // 2 give new element content - THIS EXAMPLE DOES NOT NEED CONTENT WHICH IS FINE
    // 3 add to the DOM attach to parent element
    const newUlContainer = document.querySelector('.food-div');
    // 4 use DOM method appendChild
    newUlContainer.appendChild(newUl);

    // Create a new list of your favourite foods
    // loop through array of favouriteFoods
    // for every item in the array perform the following
    for(const food of favouriteFoods) {
        const foodItem = document.createElement('li');
        foodItem.classList.add('list-item');
        foodItem.textContent = food; 
        newUl.appendChild(foodItem);
    }
        

});