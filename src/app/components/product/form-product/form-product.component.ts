import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";
import { CategoriesService } from "../../../services/categories.service";
import { Categorie } from "../../../types/Categorie";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent implements OnInit {
  imageFiles: File[] = [];
  imagePreviews: string[] = [];
  loading: boolean = false;
  categories: Categorie[] = [];
  formProduct!: FormGroup;

  constructor(
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    private productService: ProductService
  ) {
    categoriesService.findAll().subscribe(
      (data => {
        this.categories = data;
      })
    );
  }
  removeImage(index: number): void {
    this.imagePreviews.splice(index, 1);  // Eliminar la imagen del array por su índice
  }


  ngOnInit(): void {
    this.formProduct = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      stock: [''],
      category: ['']
    });
  }



  onImagesSelected(event: any): void {
    const files = event.target.files;
    this.imageFiles = []; // Limpiar los archivos previos
    this.imagePreviews = []; // Limpiar las vistas previas

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.imageFiles.push(file);

      // Generar vistas previas para la UI (solo para el frontend, no afecta el envío)
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews.push(e.target.result);  // Esto solo es para la vista previa
      };
      reader.readAsDataURL(file);  // Solo para la vista previa, no afecta el envío
    }
  }

// Enviar imágenes correctamente como archivos binarios
  onSubmit(): void {
    if (this.loading) return;

    this.loading = true;

    const formData = new FormData();

    // Agregar otros datos del formulario
    Object.entries(this.formProduct.value).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    // Agregar las imágenes como archivos
    this.imageFiles.forEach((file) => {
      formData.append("images", file);  // 'images' debe coincidir con el nombre esperado en el backend
    });

    // Llamar al servicio para enviar el FormData
    this.productService.createProduct(formData).subscribe({
      next: response => {
        console.log('Producto creado:', response);
        this.loading = false;
        this.formProduct.reset();
        this.imageFiles = [];
        this.imagePreviews = [];
      },
      error: err => {
        console.error('Error al crear el producto:', err);
        this.loading = false;
      }
    });
  }
}
