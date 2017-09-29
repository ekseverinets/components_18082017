(function() {
	'use strict';

	// import
	const Menu = window.Menu;
	const Form = window.Form;

	class App {
		constructor ({el}) {

			this.menu = new Menu({
				el: el.querySelector('.js-menu'),
				data: {
					title: 'List',
					items: []
				}
			});
            
			this.form = new Form({
				el: el.querySelector('.form')
			});

			this.menu.setData({
				title: 'List',
				items: [
					{
						title: 'Item One',
						className: 'profile'
					},
					{
						title: 'Item Two',
						className: 'messages',
						items: [
							{   
								title: 'Item Two-One',
								className: 'item'
							},  
							{
								title: 'Item Two-Two',
								className: 'item',
								items: [
									{
										title: 'Item Two-Two-1',
										className: 'item'
									},
									{
										title: 'Item Two-Two-2',
										className: 'item'
									},
									{
										title: 'Item Two-Two-3',
										className: 'item'
									}
								]
							},  
						]
					},
					{
						title: 'Item Three',
						className: 'settings'
					},
					{
						title: 'Item Four',
						className: 'logout'
					},
					{
						title: 'Item Five',
						className: 'western'
					},
					{
						title: 'Item Six',
						className: 'fantasy'
					}
				]
			});

		}
	}

	// export 
	window.App = App;

})();