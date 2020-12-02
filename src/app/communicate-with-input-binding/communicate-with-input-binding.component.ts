import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-communicate-with-input-binding',
  templateUrl: './communicate-with-input-binding.component.html',
  styleUrls: ['./communicate-with-input-binding.component.css']
})
export class CommunicateWithInputBindingComponent implements OnInit {
  hero: string;
  Heros: Packet;

  constructor() {
    this.hero = '-----';
  }

  ngOnInit(): void {
  }

  add(){
    this.Heros.name = this.hero;
  }

  onCapatalized(capatalized: string){
    this.hero = capatalized;
  }
}

@Component({
  selector: "app-communicate-with-input-binding-child",
  templateUrl: "./communicate-with-input-binding-child.component.html",
  styles: []
})
export class CommunicateWithInputBindingChild{
    @Input() packetName: string;
    @Output() capatalizedEvent = new EventEmitter<string>(); 

    capatalize(){
      this.capatalizedEvent.emit(this.packetName.toUpperCase());
    }
}

export interface Packet {
  name: string;
}
