import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductGuardService } from './product-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent }, // TODO Try with Product Module and boostrap config
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ ProductGuardService ] },
    ]),

    SharedModule
  ],
  exports: [ProductListComponent, ProductDetailComponent],
  declarations: [ProductListComponent, ConvertToSpacesPipe, ProductDetailComponent],
  providers: [ProductService, ProductGuardService],
})
export class ProductModule { }
