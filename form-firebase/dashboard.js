document.addEventListener('DOMContentLoaded', function() {
  const cartIcon = document.getElementById('cart-icon');
  const myCart = document.getElementById('mycart');

  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      
      const itemContainer = button.parentElement;
      const image = itemContainer.querySelector('.food-image').src;
      const title = itemContainer.querySelector('.food-title').textContent;
      const price = itemContainer.querySelector('.food-price').textContent;

      
      const newItem = document.createElement('div');
      newItem.classList.add('cart-item');
      newItem.innerHTML = `
        <img src="${image}" alt="${title}" class="cart-image">
        <span>${title}</span>
        <br>
        <span>${price}</span>
        <br>
        <label for="${title}-quantity">Quantity:</label>
        <input type="number" id="${title}-quantity" name="${title}-quantity" min="1" value="1">
        <button id="check-out">Buy now</button>
      `;
     myCart.appendChild(newItem);

    });
  });

  // Add an event listener to the cart icon to toggle the cart display
  cartIcon.addEventListener('click', function(event) {
    event.preventDefault();
    if (myCart.style.display === 'block') {
      myCart.style.display = 'none';
    } else {
      myCart.style.display = 'block';
    }
  });
});


  
