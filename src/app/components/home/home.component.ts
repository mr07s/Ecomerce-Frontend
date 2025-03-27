import { Component } from '@angular/core';
import { GetApiComponent } from '../../apiIntegration/get_api/get-api.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ProductsPageComponent } from '../products-page/products-page.component';
RouterLink
@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  providers:[GetApiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
})
export class HomeComponent {
  
  categories:any;
  btnClick() {
    console.log('HI there');
  }
  constructor(private GetApiComponent:GetApiComponent ,private router:Router ) {}

  navigateToProduct(productId: string) {
    this.router.navigate(['/products', productId]);
    // this.ProductsPageComponent.getCategoriesById(productId);
  }
  ngOnInit():void{
  this.GetApiComponent.getAllCategories().subscribe((res)=>{
    this.categories=res;
    console.log(this.categories);
  },(error) => {
    console.error('Error fetching data:', error);  // Handle errors
  })
  // console.log("Hey there");
  }
}
