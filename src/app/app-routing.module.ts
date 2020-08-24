import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "new", component: NewComponent },
  { path: "wallpapers", component: WallpapersComponent },
  { path: "wallpaper", component: WallpapersComponent },
  { path: "portraits", component: PortraitsComponent },
  { path: "portrait", component: PortraitsComponent },
  { path: "blue", component: BlueComponent },
  { path: "green", component: GreenComponent },
  { path: "yellow", component: YellowComponent },
  { path: "orange", component: OrangeComponent },
  { path: "red", component: RedComponent },
  { path: "purple", component: PurpleComponent },
  { path: "black", component: BlackComponent },
  { path: "white", component: WhiteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
