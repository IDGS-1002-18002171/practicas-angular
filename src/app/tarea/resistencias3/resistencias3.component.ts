import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias3',
  templateUrl: './resistencias3.component.html',
  styleUrls: ['./resistencias3.component.css']
})
export class Resistencias3Component {
  muestraImg:boolean=true;
  imageMargin:number=20;
  combo1!:number;
  combo2!:number;
  combo3!:number;
  radio!:string;
  valor!:string;
  menor!:number;
  mayor!:number;
  imagen:string="https://www.logicbus.com.mx/blog/wp-content/uploads/2019/07/codigo-colores-resistencias-e1563802288271.jpg";
  tolerancia!:string;
  porc!:number;
  lista1=[
    'Black',
    'Brown',
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Violet',
    'Gray',
    'White'
  ]
  tipoTolerancia=[
    'Gold',
    'Silver'
  ]
  calcular(){
    this.valor=""+this.combo1+this.combo2* Math.pow(10, this.combo3);
    if(this.tolerancia=="Gold"){
      this.porc=parseInt(this.valor)*.05;
      this.menor=parseInt(this.valor)-this.porc;
      this.mayor=parseInt(this.valor) + this.porc;
    }
    if(this.tolerancia=="Silver"){
      this.porc=parseInt(this.valor)*.1;
      this.menor=parseInt(this.valor)-this.porc;
      this.mayor=parseInt(this.valor) + this.porc;  
    }

  }
  showImage():void{
    this.muestraImg=!this.muestraImg;
  }
}
