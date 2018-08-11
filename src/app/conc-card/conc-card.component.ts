import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { toDate } from '@angular/common/src/i18n/format_date';
import { AdddeleteService } from '../adddelete.service';
import { Concession } from '../models/concession.model';
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
  concession= new Concession;
constructor(private adddeleteService:AdddeleteService){
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
        newConcession(card_S_No,zonelist_val,issuingstation_val,year,year2,CC_First_name,CC_gender,CC_dob_val,CC_age,cc_nationality,cc_aadhar,selected,JS_spouse_name,JS_gender,JS_Spouse_dob,JS_aadhar,JS_agency,JS_issuing_auth,JS_designation,h_name,H_gender,H_certi_number,H_address,Con_type,h_nature,doc_name,reg_no,hospital){
          this.concession.card_S_no= card_S_No;
          this.concession.issuingZone=zonelist_val.toString();
          this.concession.issuingStation=issuingstation_val.toString();
          this.concession.validfrom=year;
          this.concession.validtill=year2;
          this.concession.firstname=CC_First_name;
          this.concession.gender=CC_gender;
          this.concession.cc_DOB=CC_dob_val;
          this.concession.cc_Age=CC_age;
          this.concession.nationality=cc_nationality;
          this.concession.aadhar=cc_aadhar;
          this.concession.card_type=selected;
          this.concession.js_Spouse_name=JS_spouse_name;
          this.concession.js_gender=JS_gender;
          this.concession.js_DOB=JS_Spouse_dob;
          this.concession.js_Aadhar=JS_aadhar;
          this.concession.js_agency=JS_agency;
          this.concession.js_issuing_auth=JS_issuing_auth;
          this.concession.js_Designation=JS_designation;
          this.concession.h_name=h_name;
          this.concession.h_gender=H_gender;
          this.concession.h_certi_number=H_certi_number;
          this.concession.h_address=H_address;
          this.concession.conc_type=Con_type;
          this.concession.nature_of_handicap=h_nature;
          this.concession.doc_name=doc_name;
          this.concession.reg_no=reg_no;
          this.concession.hospital=hospital;


          console.log("We are near posting " + this.concession.issuingStation);
          this.adddeleteService.create(this.concession);
        }
}
