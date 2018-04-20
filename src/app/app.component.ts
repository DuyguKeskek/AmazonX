import { Component } from '@angular/core';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCat = '';
  cartList: Product [] = [];

  productList: Product [] = [
    new Product ('JS for Dummies', 'Book', 39, ''),
    new Product ('Apple MacBook Pro Retina 15"', 'Tech', 3999, ''),
    new Product ('Samsung Galaxy Gear Smartwatch', 'Tech', 699, ''),
    new Product ('Coldplay - Ghost Stories', 'Music', 19, '')
  ]

  selectedCategory(categoryName) {
    this.selectedCat = categoryName;
    console.log(this.selectedCat);
  }

  addCart(product: Product) {
    this.cartList.push(product)
    console.log(product);
  }
}
