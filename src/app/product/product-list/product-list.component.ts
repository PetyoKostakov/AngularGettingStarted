import { Component, OnInit } from '@angular/core';

import { IProduct } from '../product';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Products List';
  products: IProduct[];
  filteredProducts: IProduct[];
  showImages = false;
  toggleImagesVisibilityButtonText: string;
  clickedStars: number;

  _listFilter = '';
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this._filterProducts(this.products, value) : this.products;
  }

  constructor(private _productService: ProductService) {
    this.toggleImagesVisibilityButtonText = this._getToggleImagesVisibilityButtonText();
  }

  _getToggleImagesVisibilityButtonText(): string {
    return this.showImages ? 'Hide Images' : 'Show Images';
  }

  _filterProducts(products: IProduct[], filterValue: string): IProduct[] {
    return products.filter( product => {
      return product.productName.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
    });
  }

  onShowImageClick(): void {
    this.showImages = !this.showImages;
    this.toggleImagesVisibilityButtonText = this._getToggleImagesVisibilityButtonText();
  }

  ngOnInit() {
    this._productService.getProducts().subscribe(function (products) {
      this.products = products;
      this.filteredProducts = this.products;
    }.bind(this));
  }

  onNotify(clickedRating: number) {
    this.clickedStars = clickedRating;
  }
}
