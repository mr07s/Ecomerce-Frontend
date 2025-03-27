import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-api',
  imports: [],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})

export class PostApiComponent {

  // productList:any[]=[];
  private postCategoryUrl="http://localhost:8080/api/admin/products";
  // private getProductsUrl="http://localhost:8080/api/public/products"
  constructor(private http: HttpClient){}

  // getAllCategories(){
  //   this.http.get("http://localhost:8080/api/public/categories").subscribe((res:any)=>{
  //   this.categoryList=res;
  // });
  // getAllCategories(): Observable<any> {
  //   return this.http.get<any>(`${this.getCategoryUrl}`);
  // };

  createCategory(){
    this.http.post(`${this.postCategoryUrl}`,{
      
    })
  }

  // getProducts(id:any):Observable<any> {
  //   return this.http.get<any>(`${this.getProductsUrl}/${id}`);
  // }
}
