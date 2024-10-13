import { Routes } from '@angular/router';
import {ProjectComponent} from "./components/project/project.component";
import {NonExistingComponentComponent} from "./components/non-existing-component/non-existing-component.component";

export const routes: Routes = [
  {
    path: '', component: ProjectComponent
  },
  {
    path:'**', component: NonExistingComponentComponent
  }
];
