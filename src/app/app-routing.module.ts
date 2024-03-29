import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';


const routes: Routes = [
  {path:'products',component:ProductListComponent},
  {path:'products/:id',
  canActivate:[ProductDetailGuard],
  component:ProductDetailComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'',redirectTo:'welcome', pathMatch:'full'},
  {path:'**',redirectTo:'welcome', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
