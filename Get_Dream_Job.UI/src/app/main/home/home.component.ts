import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobsToDisplay: any;
  constructor() { }

 
  
  ngOnInit(): void {
    this.jobsToDisplay = [
      {
        type:'Any-Graduate',
        jobs: []
      },
      {
        type:'Bachelore-Graduate',
        jobs: []
      },
      {
        type:'Master-Graduate',
        jobs: []
      },
      {
        type:'Engineer-Graduate',
        jobs: []
      },
      {
        type:'Experinced-Employees',
        jobs: []
      }
    ]
  }

}
