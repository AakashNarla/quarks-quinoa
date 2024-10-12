import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {NonExistingComponentComponent} from "./components/non-existing-component/non-existing-component.component";

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path:'contact', component: ContactComponent
  },
  {
    path:'**', component: NonExistingComponentComponent
  }
];
