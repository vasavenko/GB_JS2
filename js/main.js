"use strict"

class ProductList {
	_goods;
	_allProducts;
	_summ;
	constructor(container = '.products') {
		this.container = container;
		this._goods = [];
		this._allProducts = [];

		this._fetchGoods();
		this._render();
	}

	_fetchGoods() {
		this._goods = [{
				id: 1,
				title: 'Notebook',
				price: 20000
			},
			{
				id: 2,
				title: 'Mouse',
				price: 1500
			},
			{
				id: 3,
				title: 'Keyboard',
				price: 5000
			},
			{
				id: 4,
				title: 'Gamepad',
				price: 4500
			},
		];
	}

	_render() {
		const block = document.querySelector(this.container);

		for (let product of this._goods) {
			const productObject = new ProductItem(product);

			this._allProducts.push(productObject);
			block.insertAdjacentHTML('beforeend', productObject.render());
		}
	}

	get summAllProducts() {
		let summ = 0;
		for (let prod of this._goods) {
			summ += prod.price
		}
		return summ
	}
}

class ProductItem {
	constructor(product, img = 'https://via.placeholder.com/200x150') {
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
	}

	render() {
		return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
	}
}

const catalog = new ProductList();
let s = catalog.summAllProducts

class CartProductList extends ProductList {
	/*
	метод очистки корзины
	метод продолжить покупки
	*/
}
class CartProductItem extends ProductItem {
	/*
	метод удаления товара из корзины
	метод изменения количества товара и пересчета суммы
	метод добавления в список желаний
	возможно другой метод вывода карточки товара на страницу
	*/
}