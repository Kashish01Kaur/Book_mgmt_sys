import { Component ,EventEmitter,Input, Output} from '@angular/core';
interface Product{
  "ISBN": number,
  "title": string,
  "author": string,
  "summary": string,
  "image": string,
  "price": {
      "currency": string,
      "value": number,
      "displayValue": string
  }
  }
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() item: Product | undefined;
  @Input() quantity: number | undefined;
  @Output() removeFromCart : EventEmitter<number> = new EventEmitter();
  @Output() incQuantity : EventEmitter<Product> = new EventEmitter();
  @Output() decQuantity : EventEmitter<Product> = new EventEmitter();

  removeProduct(ISBN:number){
    this.removeFromCart.emit(ISBN)
  }

  increaseQuantity(item: Product){
    this.incQuantity.emit(item);
  }
  
  decreaseQuantity(item: Product){
    this.decQuantity.emit(item);
  }
}
