import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit, OnChanges {
  @Input() watchForm;

  changeLog: string[] = [];

  constructor(){}

   ngOnChanges(changes: SimpleChanges) {
    for(const prop in changes){
      const chg = changes[prop];
      console.log(`${prop}: ${JSON.stringify(chg.previousValue)} | ${JSON.stringify(chg.currentValue)}`);
    }
  }

  ngOnInit(): void {
    console.log('onInit invoked on MyComponentcomponent');
  }
}