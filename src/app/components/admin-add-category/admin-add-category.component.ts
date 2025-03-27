import { Component } from '@angular/core';
import { GetApiComponent } from '../../apiIntegration/get_api/get-api.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-add-category',
  imports: [CommonModule,FormsModule],
  providers:[GetApiComponent],
  templateUrl: './admin-add-category.component.html',
  styleUrl: './admin-add-category.component.css'
})
export class AdminAddCategoryComponent {


  private postCategoryUrl="http://localhost:8080/api/public/categories";
  // private getProductsUrl="http://localhost:8080/api/public/products"
private deleteUrl="http://localhost:8080/api/admin/categories"

  
  categories:any;
  category = {
    categoryName: '',
    categoryDescription: ''
  };
  isSubmitting:boolean=false;

  constructor(private GetApiComponent:GetApiComponent ,private router:Router,private http: HttpClient ) {}

  ngOnInit():void{
    this.getCategories()
   
    // con
}
getCategories(){
  this.GetApiComponent.getAllCategories().subscribe((res)=>{
    this.categories=res;
    console.log(this.categories);
  },(error) => {
    console.error('Error fetching data:', error);  // Handle errors
  })
}

navigateToProductAdmin(id:any){
  console.log("Hi there");
  this.router.navigate(["admin/adminProduct",id]);

}
onsubmit(){
  // const headers = new HttpHeaders().set('Content-Type', 'text/plain');
  
      console.log("Submitted")
      this.http.post(`${this.postCategoryUrl}`,this.category).subscribe((res)=>{
        console.log(res);
      },(error)=>{
        console.log(error);
      });
      console.log("HI");

}

deleteCategory(id:any){
  this.http.delete(`${this.deleteUrl}/${id}`).subscribe((res)=>{
    console.log("Deleted successfully")
    this.getCategories()

  },(error)=>{
    console.log(error)
  })
}
}
