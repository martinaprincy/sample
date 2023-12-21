import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num=0;
  title = 'princy';
  names: string[]=['martina princy','subi bavi','jeevi jeeva',"jayasri"];
  name: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];

  formatNames(): string {
    return this.name
      .map((name, index) => `${index}.${name}`)
      .join('\n');
  }
  
  numbers:number[]=[];
    newNum:number=0;
    add(){
      this.numbers.push(this.newNum);
      this.newNum=0;
    }
    tableview=false;
    view: string = 'list';
    name1="martinaprincy";
 company="oasys" ;   
 myDate:Date=new Date();
}

