import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, 
  DoCheck, AfterContentChecked } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MycomponentComponent } from './mycomponent.component';

@Component({
    selector: 'app-onchanges-parent',
    templateUrl: './onchanges-parent.component.html',
    styles: []
  })
  export class OnChangesParentComponent implements OnInit, DoCheck{
    dataForm;
    @ViewChild(MycomponentComponent) childView: MycomponentComponent;

    constructor(
      private formBuilder: FormBuilder
    ){
      this.dataForm = this.formBuilder.group({
        name: '',
        email: ''
      })
    }
  
    onSubmit(formValues){
      console.log('form values submitted');
    }

    ngOnInit(){
      console.log('oninit invoked at onChangesPArentComponent');
    }

    ngDoCheck(){
      console.log('docheck involed');
    }

    ngAfterContentChecked(){
      console.log('after connection checked')
    }
  }