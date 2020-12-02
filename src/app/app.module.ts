import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { OnChangesParentComponent } from './mycomponent/onchanges-parent.component';
import { SpyListComponent } from './spy-list/spy-list.component';
import { CommunicateWithInputBindingComponent, CommunicateWithInputBindingChild } from './communicate-with-input-binding/communicate-with-input-binding.component';
import { Index2Component } from './pages/index2/index2.component';
import { Index1Component } from './pages/index1/index1.component';
import { AdBannerComponent } from './dynamic-component-loader/ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './dynamic-component-loader/ads/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './dynamic-component-loader/ads/hero-profile/hero-profile.component';
import { AdServiceService } from './dynamic-component-loader/ad-service.service';
import { AdDirective } from './dynamic-component-loader/ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    OnChangesParentComponent,
    SpyListComponent,
    CommunicateWithInputBindingComponent,
    CommunicateWithInputBindingChild,
    Index2Component,
    Index1Component,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AdServiceService],
  bootstrap: [AppComponent],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
})
export class AppModule { }
