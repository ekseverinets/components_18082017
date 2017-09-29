(function() {
	'use strict';

	class Form {
		constructor({el}) {
            this.$el = el;
            this.$button = el.querySelector('.button');

            this._initEvents();
        }
        
        _initEvents () {
            this.$button.addEventListener('click', this.validate.bind(this));
        }

		validate () {
            console.log('fg');
			let elems = this.$el.elements;

            this.resetError(elems.name.parentNode);
            
			if (!elems.name.value) {
			    this.showError(elems.name.parentNode, 'Please write your name');
			}
      
            this.resetError(elems.message.parentNode);
            
			if (!elems.message.value) {
			    this.showError(elems.message.parentNode, 'Please write something');
			}
		}

		showError (container, errorMessage) {
		    container.className = 'error';
		    let msgElem = document.createElement('span');
		    msgElem.className = "error-message";
		    msgElem.innerHTML = errorMessage;
		    container.appendChild(msgElem);
		}
      
		resetError (container) {
		    container.className = '';
		    if (container.lastChild.className == "error-message") {
		      container.removeChild(container.lastChild);
		    }
		}

	}
      
	window.Form = Form;

})();