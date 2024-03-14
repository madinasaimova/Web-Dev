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
    window.open(wpLink, "_blank");
}


  onNotify() {
    window.alert('You will be notified about sales');
  }

  like(product: Product): void {
    product.likes += 1;
  }

  deleteProduct(product: Product): void {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
}

