import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Mundo ' + VERSION.major;
  num1: number;
  num2: number
  
  objCurso: any;

  constructor (private http: HttpClient){}
  ngOnInit(){
    this.http.get<any>("https://UnnaturalFatherlyInterfaces--christopheran14.repl.co").subscribe(data=>{
      this.objCurso = data;
    });
  }
}
