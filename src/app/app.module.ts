import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ProductModule } from './product/product.module';
import { WellcomeComponent } from './home/wellcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WellcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WellcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ], {}),

    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
