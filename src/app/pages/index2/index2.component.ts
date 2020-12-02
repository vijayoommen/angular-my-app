import { Component, OnInit } from '@angular/core';
import { AdServiceService } from 'src/app/dynamic-component-loader/ad-service.service';
import { AdItem } from '../../dynamic-component-loader/ad-item';

@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.css']
})
export class Index2Component implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdServiceService ) {}

  ngOnInit(): void {
    this.ads = this.adService.getAds();
    console.log(this.ads);
  }

}
