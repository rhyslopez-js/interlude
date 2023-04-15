import { Component } from '@angular/core';
import { Products } from '../interfaces/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products:Products[] = [

    {
      image: "/assets/product1.png",
      title: "TeenX Hoodie",
      description: "TeenX oversized black hoodie. Design embroided on heavy blend Gildan material.",
      price: "$120",
      inStock: true, 
    },
    
    {
      image: "/assets/product2.png",
      title: "Distressed Cargo Pants",
      description: "Vintage distressed oversized cargo pants. Straight fit with 10 pockets & no ankle garters.",
      price: "$140",
      inStock: true, 
    },
    
    {
      image: "/assets/product3.png",
      title: "Hyperpop Hoodie",
      description: "Hyperpop oversized grey hoodie. Design printed on heavy blend Gildan material.",
      price: "$99",
      inStock: false, 
    },


  ]

}
