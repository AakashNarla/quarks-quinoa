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
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgIf,
    MatList,
    MatListItem,
    NgForOf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  encapsulation: ViewEncapsulation.None,
  animations:[
    trigger('detailAnimation',[
      state('hidden',style({
        opacity: 0,
        height: 0,
        overflow: 'hidden'

      })  ),
      state('visible',style({
        opacity: 1,
        height: '*',
        overflow: 'visible'
      })  ),
     transition('hidden => visible', [animate('500ms ease-in')]),
     transition('visible => hidden', [animate('500ms ease-out')
       ]  )
  ] )  ]
})
export class ContactComponent implements OnInit {
 result: string = " ";

  constructor(private httpService : BackendService) {  }
  hasError: boolean = false;
  errorMessage: string = " ";
  projects: ProjectRepresentation[] = [];
  ngOnInit(): void {
    this.httpService.fetchData("/api/projects").subscribe(this.observerData());

  }

  private observerData(): Observer<any>{

    return {
      complete : () => {},
      next: (value) => {

       console.log("Value-from-server",value);
//       const correctedValue = value.replace(/'/g, '"');
  //     this.projects = JSON.parse(correctedValue)["projects"];
      const originalProjects  = JSON.parse(value)["projects"];

      for (let project of originalProjects){
        this.projects.push(new ProjectRepresentation(project, false));
      }

      },
      error: (error) => {
        console.log("Found Error!!!",error)
        this.hasError = true;
        this.errorMessage = JSON.stringify(error.status);
      }
    }

  }





}
