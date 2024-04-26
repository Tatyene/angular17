import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router';
import { ProductsService } from '../../shared/service/products.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  form = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  })

  onSubmit() {
    this.productsService.post({
      title: this.form.controls.title.value
    }).subscribe(() => {
      this.matSnackBar.open('Produto criado com sucesso!', 'Ok', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });

      this.router.navigateByUrl('/');
    });
  }
}