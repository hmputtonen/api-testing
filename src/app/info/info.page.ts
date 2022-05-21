import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  info : any;
  activityName : any [];
  activityIntro : any[];
  description : any[];
  info_url : any[];
  where_and_when : any[];
  duration : any[];
  address : any[];
  img: any[];


  constructor(public information : InformationService, private route : ActivatedRoute) { }

  ngOnInit() {

    let index = Number(this.route.snapshot.paramMap.get("id"));

    this.info = this.information.information[index];
    
    this.activityName = this.information.activityName[index];
    this.description = this.information.description[index];
    this.info_url = this.information.info_url[index];
    this.img = this.information.img[index];
    this.where_and_when = this.information.where_and_when[index];
    this.duration = this.information.duration[index];
    this.address = this.information.address[index];

  }

}
