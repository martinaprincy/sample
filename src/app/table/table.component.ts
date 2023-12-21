import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
movies=[
  {
    "Movie":"kgf-1",
    "Heroname":"yash",
    "Heroinename":"srinidhi"
  },
  {
    "Movie":"leo",
    "Heroname":"vijay",
    "Heroinename":"trisha"
  },
  {
    "Movie":"maveeran",
    "Heroname":"ramsaran",
    "Heroinename":"kajalagrwal"
  },
]


}
