import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../shared/interfaces/product';
import { ProductsService } from '../../shared/service/products.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products: Product[] = [];
  productService = inject(ProductsService);

  ngOnInit() {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
  }
}