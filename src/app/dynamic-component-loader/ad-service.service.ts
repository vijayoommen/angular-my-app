import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { HeroJobAdComponent } from './ads/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './ads/hero-profile/hero-profile.component';

@Injectable({
  providedIn: 'root'
})
export class AdServiceService {

  getAds(){
    return [
      new AdItem(HeroProfileComponent, {name: "Marvel", bio: "I have saved the world"}),
      new AdItem(HeroJobAdComponent, {headline: "Captain America", body: "Done a good job before"}),
      new AdItem(HeroProfileComponent, {name: "Iron Man", bio: "Extremely creative"}),
      new AdItem(HeroJobAdComponent, {headline: "Spiderman", body: "gifted powers"}),
    ];
  }

}
