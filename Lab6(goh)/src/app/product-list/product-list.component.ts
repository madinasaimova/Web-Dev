import { Component, Input } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() categoryName: string = '';

  share(product: Product) {
    const wpLink = `https://wa.me/87018813067?text=${product.link}`;

    window.location.href = wpLink;
  }

  onNotify() {
    window.alert('You will be notified about sales');
  }

  like(product: Product): void {
    product.likes += 1;
  }

  unlike(product: Product): void {
    if (product.likes > 0) {
      product.likes -= 1;
    }
  }

  deleteProduct(product: Product): void {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
