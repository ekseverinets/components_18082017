(function() {
	'use strict';

	class Menu {
		constructor({el, data}) {
			this.$el = el;
			this.data = data;
			this.$title = el.querySelector('.js-title');
			this.$menuList = el.querySelector('.js-menu-list');

			// this.initEvents();
		}

		setData (data) {
			this.data = data;
			this.render();
		}

		render () {
			this.$title.innerText = this.data.title;
			this.renderItems(this.data.items, this.$menuList);
		}

		renderItems(items, container) {
			items.forEach(item => {
				this._addItem(item, container);
			});
		}
      
		// initEvents() {
		// 	this.$title.addEventListener('click', this.toggleDisplayMenu.bind(this));
		// }

		// toggleDisplayMenu() {
		// 	this.$el.classList.toggle('_open');
		// }
        
		_addItem(item, container) {
			let itemText = item.title,
				ulEl = document.createElement('ul'),
				liEl = document.createElement('li');
			
			liEl.classList.add(item.className); 

			liEl.textContent = itemText;
             
			if (item.items) {
				liEl.append(ulEl);
				ulEl.classList.add('submenu');
				this.renderItems(item.items, ulEl);
			} 
      
			container.append(liEl);
		}

	}
      
	window.Menu = Menu;

})();