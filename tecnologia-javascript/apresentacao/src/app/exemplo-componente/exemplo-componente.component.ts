import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-componente',
  templateUrl: './exemplo-componente.component.html',
  styleUrls: ['./exemplo-componente.component.css']
})
export class ExemploComponenteComponent implements OnInit {

  constructor() {
  }

  public data: any[] = []

  ngOnInit(): void {
    this.data.push({id:0,name:"primeiro"})
    this.data.push({id:1,name:"segundo"})
    this.data.push({id:2,name:"terceiro"})
  }

  addData(newEntry:string){
    let entry = {
      id: this.data.length,
      name:newEntry
    }
    this.data.push(entry)
  }
}
