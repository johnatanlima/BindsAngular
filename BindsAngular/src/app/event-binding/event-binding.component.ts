import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "Mensagem do botão";
  i = 0;
  
  btnEnable = true;

  constructor() { }
  ngOnInit() { }

  save(){ console.log("clicou! Está funfando..."); }

  //funcao para ver o bind ocorrendo
  inc(){
    this.i++;
    this.buttonName = "Foi clicado " + this.i + "vezes";
  }

  spinnerMode = "determinate";
 
  //FUNCAO PARA DESATIVAR OU EXECUTAR O SPINNER
  disable(){
    console.log('clicou');
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout( () => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 2000)
  }


  selectDisabled = false;
  selectedOption = 1;

  //Fazendo o select item ativar ou desativar de acordo com o check box
  cbChange(event){
    console.log(event.checked);
    this.selectDisabled = event.checked;
  }

  selectionChange(event){
      this.selectedOption = event.value;
  }
}
