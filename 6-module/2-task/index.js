import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;  
    this.elem = this.render();
    
  }
     
   render(){
          let div = document.createElement('div');
      div.className = 'card';
      div.innerHTML =
        `<div class="card__top">
              <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
              <span class="card__price">€${this.product.price.toFixed(2)}</span>
         </div>
         <div class="card__body">
              <div class="card__title">${this.product.name}</div>
              <button type="button" class="card__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
          </div>`;
    
          
        
   let customEvent = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true
      })
      let cardButton = div.querySelector('.card__button')
      cardButton.addEventListener("click", function (event) {
        event.path[3].dispatchEvent(customEvent);;
      });

      return div;
    }

   
  }

  






    