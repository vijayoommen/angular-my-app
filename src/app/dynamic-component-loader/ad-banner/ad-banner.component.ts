import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdItem} from '../ad-item';
import { AdDirective } from '../ad.directive';
import { AdComponent } from '../ad-component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  interval: any;
  currentViewIndex = -1;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(){
    window.clearInterval(this.interval);
  }

  loadComponent(){
    this.currentViewIndex = (this.currentViewIndex + 1) % this.ads.length;
    const ad = this.ads[this.currentViewIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ad.component);

    this.adHost == undefined ? console.log('not found') : console.log('found');
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const contianerRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
    contianerRef.instance.data = ad.data;
  }

  getAds(){
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
