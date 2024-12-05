import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customer = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    password: '',
    image: null as File | null,
  };

  imagePreview: string = 'https://via.placeholder.com/150';

  // Función para manejar la carga de la imagen
  onImageChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput?.files?.[0]) {
      const file = fileInput.files[0];
      this.customer.image = file;


      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }


  onSubmit() {
    if (this.customer.image) {

      console.log('Cliente registrado', this.customer);
    }
  }


}
