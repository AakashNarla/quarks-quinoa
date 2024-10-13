import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Observer} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";
import {animate, state, style, transition, trigger} from "@angular/animations";


class ProjectRepresentation {
  name: string;
  isVisible: boolean;

  constructor(name: string, isVisible: boolean) {
    this.name = name;
    this.isVisible = isVisible;
  }
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgIf,
    MatList,
    MatListItem,
    NgForOf
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
 result: string = " ";

  constructor(private httpService : BackendService) {  }

  projects: ProjectRepresentation[] = [];


  ngOnInit(): void {
    this.httpService.fetchData("/api/projects").subscribe(this.observerData());
  }

  private observerData(): Observer<any>{
    return {
      complete : () => {},
      next: (value) => {

      console.log("Value-from-server",value);
      const originalProjects = value?.projects;

      for (let project of originalProjects){
        this.projects.push(new ProjectRepresentation(project, false));
      }
      },
      error: (error) => {
        console.log("Found Error!!!",error)
      }
    }
  }
}
