import { Component } from '@angular/core';
import { ProductsPageComponent } from "../products-page/products-page.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GetApiComponent } from '../../apiIntegration/get_api/get-api.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-product-add',
  imports: [CommonModule,FormsModule],
  providers:[GetApiComponent],
  templateUrl: './admin-product-add.component.html',
  styleUrl: './admin-product-add.component.css'
})
export class AdminProductAddComponent {
  isSubmitting:boolean=false;
  product = {
    // categoryName: '',
    // categoryDescription: ''
    productName:'',
    productImg:'',
    description:'',
    productPrice:''
  };

  constructor(private getApiComponent:GetApiComponent,  private route: ActivatedRoute ,private http: HttpClient) {}

  productList:any[]=[]
private productId:string|null = null;
private createProductUrl:string|null="http://localhost:8080/api/admin/products";

private deleteProductUrl:string|null="http://localhost:8080/api/admin/products";

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

        console.log(id);
        this.getApiComponent.getProducts(id).subscribe((res)=>{
                this.productList=res;
                console.log(this.productList);
            
              },(error) => {
                console.error('Error fetching data:', error);  // Handle errors
              })
      }




      onsubmit(){
        console.log("Hi there");
        this.createProduct(this.productId);

      }

      createProduct(id:any){
        this.http.post(`${this.createProductUrl}/${id}`,
          this.product
        ).subscribe(res=>{
          console.log("COmpleted successfully");
        })
      }

      deleteProduct(id:any){
        this.http.delete(`${this.deleteProductUrl}/${id}`).subscribe(res=>{
          console.log("Deleted successfully")
        })
      }

}
