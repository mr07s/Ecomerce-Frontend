import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  categoryList:any[]=[];
  private getCategoryUrl="http://localhost:8080/api/public/categories";
  private getProductsUrl="http://localhost:8080/api/public/products"
  constructor(private http: HttpClient){}

  // getAllCategories(){
  //   this.http.get("http://localhost:8080/api/public/categories").subscribe((res:any)=>{
  //   this.categoryList=res;
  // });
  
  getAllCategories(): Observable<any> {
    return this.http.get<any>(`${this.getCategoryUrl}`);
  };

  getProducts(id:any):Observable<any> {
    return this.http.get<any>(`${this.getProductsUrl}/${id}`);
  }

}

