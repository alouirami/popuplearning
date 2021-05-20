import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.css']
})
export class EcoleComponent implements OnInit {
  school:any = "assets/img/school.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
