import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spy-list',
  templateUrl: './spy-list.component.html',
  styleUrls: ['./spy-list.component.css']
})
export class SpyListComponent implements OnInit {
  spies: string[] = ['Capatin America', 'Iron man'];
  newSpy: string;

  constructor() { }

  ngOnInit(): void {
  }

  addHero(){
    this.spies.push(this.newSpy);
    this.newSpy = '';
    console.log(`added a new spy ${this.newSpy}`);
  }

  reset(){
    this.spies = [];
    console.log('reset data');
  }

  remove(){
    const indx = this.spies.findIndex(e => e.toLocaleLowerCase() === this.newSpy.toLowerCase());
    indx >= 0 ? this.spies.splice(indx, 1) : this.spies;
    this.newSpy = '';
    console.log(`attempted to remove ${this.newSpy}`);
  }

}
