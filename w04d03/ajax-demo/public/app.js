console.log('inside app.js');

$(document).ready(() => {
  // grab the food-item-container from the DOM
  const $container = $('#food-item-container');

  // grab the form from the DOM
  const $form = $('#new-food-item');

  // helper function to create individual foodItem elements
  const createFoodItem = (foodItem) => {
    const $foodItem = $(`
      <article class="food-item">
        <header>
          <h2>Name: ${foodItem.name}</h2>
          <h3>ID: ${foodItem.id}</h3>
        </header>
  
        <p>Tagline: ${foodItem.tagline}</p>
  
        <hr/>
  
        <footer>
          <h3>Price: $${foodItem.price}</h3>
          <h3>Calories: ${foodItem.calories}</h3>
        </footer>
      </article>
    `);

    return $foodItem;
  };

  // helper function to prepend each foodItem to the DOM
  const renderFoodItems = (foodItems) => {
    $container.empty();
    for (const foodItem of foodItems) {
      const $foodItem = createFoodItem(foodItem);
      $container.prepend($foodItem);
    }
  };

  // helper function to fetch the food item data for us
  const loadFoodItems = () => {
    $.ajax({
      method: 'GET',
      url: '/food-items',
      success: (foodItems) => {
        console.log(foodItems);
        renderFoodItems(foodItems);
      }
    });
  };

  // listen for the form's submit event
  $form.on('submit', (event) => {
    // prevent the default browser behaviour
    event.preventDefault();

    // get the form data
    const formData = $form.serialize();

    // post the form data to the backend
    $.ajax({
      method: 'POST',
      url: '/food-items',
      data: formData,
      success: (response) => {
        console.log(response);
        loadFoodItems();
      }
    });  
  });

  // make the initial request for foodItems when the document loads
  loadFoodItems();
});
