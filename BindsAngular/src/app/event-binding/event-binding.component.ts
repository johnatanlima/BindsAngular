import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "Mensagem do botão";
  i = 0;
  spinnerMode = "determinate";
  btnEnable = true;

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.log("clicou! Está funfando...");
  }

  inc(){
    this.i++;
    this.buttonName = "Foi clicado " + this.i + "vezes";
  }

  disable(){

    console.log('clicou');

    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout( () => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 2000)
  }
}
