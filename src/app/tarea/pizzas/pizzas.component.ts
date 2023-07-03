import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPizzas } from 'src/app/pizzas';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  pizzas:IPizzas[]=[];
  pizzasForm!:FormGroup;
  ingredientesDisponibles: string[] = ['jamon', 'piña', 'champiñones'];
  ingredientesSeleccionados: string[] = [];
  total: number = 0;
  nombreUsuario: string = '';
  ventasDia: string = '';
  totalDia:number=0;
  mostrarConfirmacion: boolean = false;

  constructor(private readonly fb: FormBuilder) {
    this.pizzasForm = this.initForm();
  }
  

  onSubmit():void{
    /* console.log('Form-> ',this.alumnosForm.value) */
    this.obtenerValor();
  }

  obtenerValor(): void {
    const tam = this.pizzasForm.get('tamanio')?.value;
    const num = this.pizzasForm.get('numPizzas')?.value;
    const nom = this.pizzasForm.get('nombre')?.value;
    const dir = this.pizzasForm.get('direccion')?.value;
    const tel = this.pizzasForm.get('telefono')?.value;
    
  let subTotal = 0; // Variable para almacenar el subtotal

  // Calcular el subtotal basado en el tamaño de la pizza
  switch (tam) {
    case 'pequeno':
      subTotal = num * 40;
      break;
    case 'mediano':
      subTotal = num * 80;
      break;
    case 'grande':
      subTotal = num * 120;
      break;
    default:
      break;
  }

  // Calcular el costo adicional de los ingredientes seleccionados
  this.ingredientesSeleccionados.forEach((ingrediente: string) => {
    switch (ingrediente) {
      case 'jamon':
      case 'piña':
      case 'champiñones':
        subTotal += num * 10;
        break;
      default:
        break;
    }
  });

  this.total += subTotal;
  
  this.nombreUsuario = nom;

  this.pizzas.push({
    tamanio: tam,
    ingredientes: [...this.ingredientesSeleccionados],
    numPizzas: num,
    subTotal: subTotal,
    nombre: nom,
    direccion: dir,
    telefono: tel,
    ventasDia:''
  });
}

  initForm():FormGroup{
    return this.fb.group({
      tamanio:[''],
      ingredientes:[''],
      numPizzas:[''],
      nombre:[''],
      direccion:[''],
      telefono:['']
    });
  }
  actualizarIngredientes(ingrediente: string): void {
    const index = this.ingredientesSeleccionados.indexOf(ingrediente);
  
    if (index > -1) {
      this.ingredientesSeleccionados.splice(index, 1);
    } else {
      this.ingredientesSeleccionados.push(ingrediente);
    }
  }
  quitarUltimaPizza(): void {
    this.pizzas.pop(); // Remover el último elemento de la lista de pizzas
  }
  
  terminarCompra(): void {
    this.mostrarConfirmacion = true;
    // Mostrar la alerta de confirmación
    const confirmacion = window.confirm('¿Estás seguro de finalizar la compra?');
    if (confirmacion) {
      // Agrega la venta al registro del día
      const nuevaVenta = `Cliente: ${this.nombreUsuario}, Total: ${this.total}, Fecha: ${formatDate(new Date(), 'hh:mm:ss a', 'en-US')}`;
      this.totalDia += this.total;
      this.ventasDia += nuevaVenta + '\n';
      this.total=0;
      // Reinicia el formulario y la lista de pizzas
      this.pizzasForm.reset();
      this.pizzas = [];
    }
  }
  
}
