import { Component } from '@angular/core';
import { Category } from './categories';
import { Product, products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categories: Category[] | undefined;
  selectedCategory: Category | null = null;

  constructor() {
    const groupedProducts: { [key: string]: Product[] } = {};

    products.forEach((product) => {
      if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
      }
      groupedProducts[product.category].push(product);
    });

    this.categories = Object.keys(groupedProducts).map((categoryName) => ({
      name: categoryName,
      products: groupedProducts[categoryName],
      showProducts: false,
    }));
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    console.log(category);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
