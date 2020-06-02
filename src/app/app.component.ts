import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Drag-image';
  display: boolean = false;

  list: string[];
  constructor(){}

  ngOnInit(){
    this.list = ["Red","Blue","Green","Pink"]
  }
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    this.display = true;
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    console.log( ev.target.id)
    ev.dataTransfer.setData("text", ev.target.id);
  }

  onSubmit(f: any): void {
    this.display = false;
  }
}
