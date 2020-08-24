import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NewComponent } from './new/new.component';
import { WallpapersComponent } from './wallpapers/wallpapers.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';
import { YellowComponent } from './yellow/yellow.component';
import { OrangeComponent } from './orange/orange.component';
import { RedComponent } from './red/red.component';
import { PurpleComponent } from './purple/purple.component';
import { BlackComponent } from './black/black.component';
import { WhiteComponent } from './white/white.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NewComponent,
    WallpapersComponent,
    PortraitsComponent,
    BlueComponent,
    GreenComponent,
    YellowComponent,
    OrangeComponent,
    RedComponent,
    PurpleComponent,
    BlackComponent,
    WhiteComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
