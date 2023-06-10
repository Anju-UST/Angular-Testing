import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent {
  fact:number=1;
  factorial(n:number):number{
    for(var i=1;i<=n;i++){
      this.fact=this.fact*i;
    }
    return this.fact;
  }
}
