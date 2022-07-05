import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPreviewCardComponent } from './components/product-preview-card/product-preview-card.component';

const routes: Routes = [
  {
    path: "",
    component: ProductPreviewCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
