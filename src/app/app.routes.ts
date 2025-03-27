import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { AdminAddCategoryComponent } from './components/admin-add-category/admin-add-category.component';
import { AdminProductAddComponent } from './components/admin-product-add/admin-product-add.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

export const routes: Routes = [
  { path: 'products/:id', component: ProductsPageComponent },
//   { path: 'categories', component: ProductsPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin/addCategory', component: AdminAddCategoryComponent },
  {path:'admin/adminProduct/:id',component:AdminProductAddComponent},
  {path:'about',component:AboutPageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
