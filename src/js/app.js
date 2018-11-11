// Show Cart
document.getElementById('cart-info').addEventListener('click', function() {
  const cart = document.getElementById('cart');
  cart.classList.toggle('show-cart');
  console.log(cart);
});

// add items to the cart

(function(){

  const cartBtn = document.querySelectorAll('.store-item-icon');

  cartBtn.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
    // console.log(event.target);

    if(event.target.parentElement.classList.contains('store-item-icon')) {

      let fullPath = event.target.parentElement.previousElementSibling.src;
      let pos = fullPath.indexOf('img') + 3;
      let partPath = fullPath.slice(pos);

      const item = {};
        item.img = `img-cart${partPath}`

      let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
        item.name = name;

      let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

      let finalPrice = price.slice(1).trim();

      item.price = finalPrice


      const cartItem = document.createElement('div');
        cartItem.classList.add(
          'cart-item',
          'd-flex',
          'justify-content-between',
          'text-capitalize',
          'my-3'
        );

        cartItem.innerHTML = `
        <!-- https://www.iconfinder.com/icons/61138/cake_donut_icon -->
        <img src= "${item.img}" class="img-fluid" id="item-img" alt="">
        <div class="item-text">
          <p id="cart-item-title" class="cart-item-title font-weight-bold mb-0">${item.name}</p>
          <span>$</span>
          <span id="cart-item-price" class="cart-item-price mb-0">${item.price}</span>
        </div>
        <a href="#" id="cart-item-remove" class="cart-item-remove">
            <i class="fas fa-trash-alt"></i>
        </a>
      </div>
      `;

      // Select Cart
      const cart = document.getElementById('cart');
      const total = document.querySelector('.cart-total-container');

      cart.insertBefore(cartItem, total);
      alert('item added to the cart!');

      showTotals();



    }
    })
  })

  // Show Total
  function showTotals() {

    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

    items.forEach(function(item) {
      total.push(parseFloat(item.textContent));
    })


    const totalMoney = total.reduce(function(total,item) {
      total += item;
      return total;
    },0)

    const finalMoney = totalMoney.toFixed(2);
    console.log(finalMoney);

    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;


  };





})();