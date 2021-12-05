import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css'],
})
export class ProductslistComponent {
  constructor() {}
  public products = [
    {
      Name: 'JBL Speaker',
      Price: 4500.43,
      Photo: 'assets/jblspeaker.jpg',
      Category: 'Electronics',
    },
    {
      Name: 'Earpods',
      Price: 10500.43,
      Photo: 'assets/earpods.jpg',
      Category: 'Electronics',
    },
    {
      Name: 'Nike Casuals',
      Price: 1500.43,
      Photo: 'assets/nikeshoe.jpg',
      Category: 'FootWare',
    },
    {
      Name: 'Lee Cooper  Boot',
      Price: 3000.43,
      Photo: 'assets/leecooper.jpg',
      Category: 'FootWare',
    },
    {
      Name: 'Shirts',
      Price: 2500.43,
      Photo: 'assets/shirts.jpg',
      Category: 'Fashion',
    },
    {
      Name: 'Jeans',
      Price: 3500.43,
      Photo: 'assets/jeans.jpg',
      Category: 'Fashion',
    },
    {
      Name: 'TShirts',
      Price: 3500.43,
      Photo: 'assets/tshirts.jpg',
      Category: 'Fashion',
    },
  ];

  public electronicsCount = this.products.filter(
    (x) => x.Category == 'Electronics'
  ).length;
  public footwareCount = this.products.filter((x) => x.Category == 'FootWare')
    .length;
  public fashionCount = this.products.filter((x) => x.Category == 'Fashion')
    .length;

  public categoryName = 'All';

  public onFilterCategoryChanged(categoryname: any) {
    this.categoryName = categoryname;
  }
}
