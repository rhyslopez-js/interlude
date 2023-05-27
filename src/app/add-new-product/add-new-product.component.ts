import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent {

  title = " "
  description = " "
  image = " "
  price = " "
  inStock = true
  productAdded: any

  constructor(private http: HttpClient, private router: Router, private forms: FormsModule){}


  addNewProduct(){
    this.http.post("http://localhost:4600/products", { image: this.image, title: this.title, description: this.description, price: this.price, inStock: this.inStock} ).subscribe( res => {

    if(res){
      console.log(this.title, this.description, this.image, this.price, this.inStock)
      this.router.navigate(['/admin']);
    }
    else{
      this.productAdded = false
    }


    })
  }


}
