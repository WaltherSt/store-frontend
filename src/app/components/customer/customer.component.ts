import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CityService } from "../../services/city.service";
import { HttpClient } from '@angular/common/http';
import {CustomerService} from "../../services/customer.service";
import {SpinnerComponent} from "../spinner/spinner.component";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    FormsModule,
    SpinnerComponent
  ],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
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
  cities: string[] = [];
  loading:boolean = false;

  constructor(private cityService: CityService, private customerService: CustomerService,private router:Router) {
    this.cityService.getAllCities().subscribe(cities => {
      cities.forEach(city => {
        this.cities.push(city.name);
      });
    });
  }

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

  // Función para enviar los datos usando FormData
  onSubmit() {
    const formData = new FormData();

    formData.append('name', this.customer.name);
    formData.append('email', this.customer.email);
    formData.append('phone', this.customer.phone);
    formData.append('address', this.customer.address);
    formData.append('city', this.customer.city);
    formData.append('password', this.customer.password);

    if (this.customer.image) {
      formData.append('image', this.customer.image);
    }
    this.loading = true;

    this.customerService.customerRegister(formData).subscribe({
      next: (result) => {
        console.log('Cliente registrado exitosamente:', result);

        // Restablecer los campos del formulario
        this.customer = {
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          password: '',
          image: null,
        };

        // Restablecer la vista previa de la imagen
        this.imagePreview = 'https://via.placeholder.com/150';


      },
      error: (error) => {
        console.error('Error al registrar el cliente:', error);

      },
      complete:()=>{
        this.loading = false;
        this.router.navigate(['/login'])


      }

    });
  }





}
