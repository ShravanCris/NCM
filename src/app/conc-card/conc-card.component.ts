import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { toDate } from '@angular/common/src/i18n/format_date';
declare var require: any;
var ageCalculator = require('age-calculator');
let { AgeFromDateString,AgeFromDate } = require('age-calculator'); 

@Component({
  selector: 'app-conc-card',
  templateUrl: './conc-card.component.html',
  styleUrls: ['./conc-card.component.css']
})
export class ConcCardComponent implements OnInit {

  date :Date;
  year : String;
  year2: String;
  event: String;
  CC_dob: String;
  CC_dob_val:String;
  JS_Spouse_dob:String;
  CC_age: Number;
  month:Number;
  today_date: String;
constructor(){
    this.CC_age=0;
    this.CC_dob_val='';
    this.JS_Spouse_dob='';
   }


   
  ngOnInit() {
  }
  genders = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];

  nationalities=[
    {
      value:'Indian',viewValue:'Indian'
    },
    {
      value:'Foreigner',viewValue:'Foreigner'
    }
  ];

  cardtypes=[
    {
      value:'Journalist',viewValue:'Journalist'
    },
    {
      value:'Handicap',viewValue:'Handicap'
    }
  ];

  handicap_nature=[
    {
      value:'Temporary',viewValue:'Temporary'
    },
    {
      value:'Permanent',viewValue:'Permanent'
    }
  ];
  conc_types=[
    {
      value:'Handicap',viewValue:'HANDICAP'
    },
    {
      value:'Blind',viewValue:'BLIND'
    },
    {
      value:'Mental',viewValue:'MENTAL'
    },
    {
      value:'Deaf&Dumb',viewValue:'DEAF & DUMB'
    }
  ];
  zoneList=[
    {
      value:'INDIAN RAILWAYS', viewValue:'INDIAN RAILWAYS'
    },
    {value:'KONKAN RAILWAY', viewValue:'KONKAN RAILWAY'},
    {value:'CENTRAL RAILWAY',viewValue:'CENTRAL RAILWAY'},
    {value:'EASTERN RAILWAY',viewValue:'EASTERN RAILWAY'},
    {value:'NORTHERN RAILWAY',viewValue:'NORTHERN RAILWAY'},
    {value:'NORTH EAST RAILWAY',viewValue:'NORTH EAST RAILWAY'},
    {value:'NORTH FRONT RAILWAY',viewValue:'NORTH FRONT RAILWAY'},
    {value:'SOUTHERN RAILWAY',viewValue:'SOUTHERN RAILWAY'},
    {value:'SOUTH EASTERN RAILWAY',viewValue:'SOUTH EASTERN RAILWAY'},
    {value:'WESTERN RAILWAY',viewValue:'WESTERN RAILWAY'},
    {value:'SOUTH CENTRAL RAILWAY',viewValue:'SOUTH CENTRAL RAILWAY'},
    {value:'EAST CENTRAL RAILWAY',viewValue:'EAST CENTRAL RAILWAY'},
    {value:'NORTH WESTERN RAILWAY',viewValue:'NORTH WESTERN RAILWAY'},
    {value:'EAST COAST RAILWAY',viewValue:'EAST COAST RAILWAY'},
    {value:'NORTH CENTRAL RAILWAY',viewValue:'NORTH CENTRAL RAILWAY'},
    {value:'SOUTH EAST CENTRAL RAILWAY',viewValue:'SOUTH EAST CENTRAL RAILWAY'},
    {value:'SOUTH WEST RAILWAY',viewValue:'SOUTH WEST RAILWAY'},
    {value:'WEST CENTRAL RAILWAY',viewValue:'WEST CENTRAL RAILWAY'}
    ];
    companions=[
      { value:'Father',viewValue:'Father'},
      { value:'Spouse',viewValue:'Spouse'}
    ]
    addEvent(event: MatDatepickerInputEvent<Date>) {
      this.date = event.value;
      this.year= this.date.getFullYear().toString();
      //this.year =this.date.getFullYear().toString();
      //serializedDate = new FormControl((new Date()).toISOString());
      }

      addEvent2(event: MatDatepickerInputEvent<Date>) {
        this.date = event.value;
        this.year2= this.date.getFullYear().toString();
        //this.year =this.date.getFullYear().toString();
        //serializedDate = new FormControl((new Date()).toISOString());
        }

        addEvent3(event: MatDatepickerInputEvent<Date>){
          this.date = event.value;
          this.month= Number(this.date.getMonth().toString())+1;
          this.CC_dob_val=String(this.date.getDate().toString()+'-'+this.month.toString()+'-'+this.date.getFullYear().toString());
          this.CC_dob_val=String(this.date.getFullYear().toString()+'-'+this.month.toString()+'-'+this.date.getDate().toString());
          console.log(this.CC_dob_val);

          let ageFromString = new AgeFromDateString(this.CC_dob_val).age;
        //console.log("value from ageFromString", ageFromString);

          this.CC_dob=this.date.getFullYear().toString();
          console.log(this.CC_dob);
          this.today_date=new Date().getFullYear().toString();
          console.log(this.today_date);

          this.CC_age= (ageFromString);
        }

        addEvent4(event: MatDatepickerInputEvent<Date>){
          this.date= event.value;
          this.month= Number(this.date.getMonth().toString())+1;
          this.JS_Spouse_dob=String(this.date.getDate().toString()+'-'+this.month.toString()+'-'+this.date.getFullYear().toString());
          console.log(this.JS_Spouse_dob);
          
        }

}
