import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  boletas!:number;
  compradores!:number;
  cineco:string="No"
  nombres:string="";
  total:number=0;
  totalADesc:number=0;
  totalADesc1:number=0;
  desc:number=0;
  desc1:number=0;
  resp:string="No se permite que un usuario compre mas de 7 boletas";
  tipoCineco=[
    'Si',
    'No'
  ]

  calcular(){
    this.desc=0;
    this.desc1=0;
    this.total=0;
    this.totalADesc=0;
    this.totalADesc1=0;
    if (this.boletas<=(this.compradores*7)){
      if(this.boletas>5){this.desc+=0.15;}
        this.total=this.boletas*12;
        this.totalADesc=this.total*this.desc;
      if(this.cineco=="Si"){
        this.desc1+=0.1;
        this.totalADesc1=(this.total-this.totalADesc)*this.desc1;
      }
    this.resp="El usuario "+this.nombres+" debera pagar: "+(this.total-this.totalADesc-this.totalADesc1)+" de "+this.compradores+" compradores con un descuento de "+((this.desc+this.desc1)*100)+"%";
    }
    else{
      this.resp="No se permite que un usuario compre mas de 7 boletas";
    }
  }

}
