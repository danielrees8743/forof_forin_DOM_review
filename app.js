let cartTotal = 0;
const foodMenuContainer = document.querySelector('#food-menu');
const dessertMenuContainer = document.querySelector('#dessert-menu');
const drinkMenuContainer = document.querySelector('#drink-menu');
const cartTotalDisplay = document.querySelector('.cart-total');
cartTotalDisplay.innerText = cartTotal;

const render = ({ name, image, description, price }, menuItem) => {
  // const { name, image, description, price } = item;
  menuItem.innerHTML += `
  <div class="card">
    <div class="card-header">
        <h2>${name}</h2>
    </div>
    <div class="card-body">
        <div class="card-body-left">
            <img
                src=${image}
            />
        </div>
        <div class="card-body-right">
            <p>
                ${description}
            </p>
        </div>
        </div>
        <div class="card-footer">
            <p class="price">$${price}</p>
            <button value=${price}>Add to Cart</button>
        </div>
    </div>
</div>
  `;
};

//^ Use a for...of loop to iterate over the foodMenuItems array and create menu item cards for each of them.
for (let foodItem of foodMenuItems) {
  render(foodItem, foodMenuContainer);
}

//^ Use the for...in loop to iterate over the drinkMenuItems array and create menu item cards for each of them.
for (let drinkItem in drinkMenuItems) {
  render(drinkMenuItems[drinkItem], drinkMenuContainer);
}
//^ Question: Why is it less ideal to use a for...in loop (as opposed to a for...of loop) to iterate
//^ Use a .map() method to iterate over the dessertMenuItems array and create menu item cards for each of them.
dessertMenuItems.map((dessert) => {
  render(dessert, dessertMenuContainer);
});

//^ Refactor your code so it is DRY

//^ Add an event listener to all menu item buttons that adds the price of the menu item to the cartTotal variable and updates the cart total in the DOM.
const button = document.querySelectorAll('button[value]');
button.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    cartTotal += +e.target.value;
    console.log(cartTotal);
    cartTotalDisplay.innerText = cartTotal;
  });
});
