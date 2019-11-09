import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  NomeQualquer = "Johw johw";

  sujeito = {

    nome: 'Johnatan',
    sobrenome:'Lima', 
    idade: 26,
    endereco: 'la no outro lado do mundo'
  }

  

  constructor() { }

  ngOnInit() {
  }

}
