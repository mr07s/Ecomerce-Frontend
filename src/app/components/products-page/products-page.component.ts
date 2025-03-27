import { Component } from '@angular/core';
import { GetApiComponent } from '../../apiIntegration/get_api/get-api.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-page',
  imports: [CommonModule],
  providers:[GetApiComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
  standalone:true
})
export class ProductsPageComponent {

          constructor(private getApiComponent:GetApiComponent,  private route: ActivatedRoute ) {}
 productList:any[]=[]
private productId:string|null = null;

      // ngOnInit():void{
      //   this.route.paramMap.subscribe(params =>
      //     this.productId=params.get('id');
      //     if(this.productId){

      //       this.getCategoriesById(this.productId)
      //     }else{
            
      //     }
      //   )
      
      //     }
      ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
          this.productId = params.get('id');
          
          if (this.productId) {
            this.getCategoriesById(this.productId);
          } else {
            console.log("Not found");
          }
        });
      }
        



getCategoriesById(id:any){

  this.getApiComponent.getProducts(id).subscribe((res)=>{
          this.productList=res;
          console.log(this.productList);
      
        },(error) => {
          console.error('Error fetching data:', error);  // Handle errors
        })
}


}