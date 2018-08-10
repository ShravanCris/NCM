import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handicap',
  templateUrl: './handicap.component.html',
  styleUrls: ['./handicap.component.css']
})
export class HandicapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  genders = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];

  companions = [
    {
      value: 'Father',viewValue:'Father'
    },
    {
      value:'Spouse',viewValue:'Spouse'
    }
  ]
}
