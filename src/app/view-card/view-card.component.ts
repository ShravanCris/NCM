import { Component, OnInit } from '@angular/core';
import { AdddeleteService } from '../adddelete.service';
import { Concession } from '../models/concession.model';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {

  concession = new Concession;
  constructor(private adddeleteService:AdddeleteService) { }

  ngOnInit( ) {

    // call the findbyCard_S_no
  }
  viewCard(v_card_S_No){
  this.adddeleteService.findbyCard_S_no(v_card_S_No).then(concession => this.concession= concession);
    console.log(" in view card " + this.concession.issuingStation);
}

}
