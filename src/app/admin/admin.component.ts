import { Component } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  productsAPI:any[] = []
  id = ""

  constructor(private http:HttpClient, private activatedroute: ActivatedRoute){

  }

  deleteProduct(){

    let id = this.activatedroute.snapshot.paramMap.get("id")

          
    this.http.delete("http://localhost:4600/products/" + id).subscribe(res =>{
      if(res){
        alert("The product has been added")
      }
    })
  }


  ngOnInit(): void {
    this.http.get<Product>("http://localhost:4600/products").subscribe(response =>{
        console.log(response.productData)
      this.productsAPI = response.productData
    })
  }

}
