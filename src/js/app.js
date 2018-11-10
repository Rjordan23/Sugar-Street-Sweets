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
      


      console.log(partPath)
    }

    })
  })



})();