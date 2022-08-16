const productQuantityControlsDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const productQuantityControlsInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const productAddButton = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.querySelector('.cart__products');

productQuantityControlsDec.forEach(item => {
	item.addEventListener('click', () => {
		const productQuantityValue = item.nextElementSibling;

		if (+productQuantityValue.textContent > 1) {
			productQuantityValue.textContent--;
		} else {
			productQuantityValue.textContent = 1;
		}
	})
});

productQuantityControlsInc.forEach(item => {
	item.addEventListener('click', () => {
		+item.previousElementSibling.textContent++;
	})
});

productAddButton.forEach(item => {
	item.addEventListener('click', () => {
		const productItem = item.closest('.product');
		const productImg = productItem.querySelector('img');
		const productAmount = productItem.querySelector('.product__quantity-value');
		const cartProductsCollection = Array.from(cartProducts.getElementsByClassName('cart__product'));

		const productInCart = cartProductsCollection.find(item => item.dataset.id === productItem.dataset.id);

		if (productInCart) {
			const productInCartCount = cartProducts.querySelector('.cart__product-count');
			productInCartCount.textContent = productAmount.textContent;
		} else {
			cartProducts.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${productItem.dataset.id}"><img class="cart__product-image" src="${productImg.src}"><div class="cart__product-count">${+productAmount.textContent}</div>`);
		}
	})
})