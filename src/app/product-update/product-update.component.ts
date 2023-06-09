import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  modifyProduct: any

  id = ""
  title = ""
  description = " "
  image = " "
  price = " "
  inStock = true
  productAdded: any

  constructor(private http: HttpClient, private router: Router, private forms: FormsModule, private activatedroute: ActivatedRoute){}


  updateProduct(){
    let id = this.activatedroute.snapshot.paramMap.get("id")


    this.http.put("http://localhost:4600/products/" + id, { id: this.id, image: this.image, title: this.title, description: this.description, price: this.price, inStock: this.inStock} ).subscribe( res => {

    if(res){
      console.log(this.title, this.description, this.image, this.price, this.inStock)
      this.router.navigate(['/admin']);
    }
    else{
      this.productAdded = false
    }
    })
  }

  deleteProduct(){

    let id = this.activatedroute.snapshot.paramMap.get("id")

          
    this.http.delete("http://localhost:4600/products/" + id).subscribe(res =>{
      if(res){
        alert("The product has been deleted")

        this.router.navigate(['/admin']);
      }
    })
  }

  ngOnInit(): void {
    let id = this.activatedroute.snapshot.paramMap.get("id")

    this.http.get<any>("http://localhost:4600/products/" + id).subscribe(response =>{
      console.log(response)
      this.modifyProduct = response

      this.id = response.id
      this.title = response.title
      this.description = response.description
      this.price = response.price
      this.inStock = response.inStock

    })


  }

  

}
