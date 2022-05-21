import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class InformationService {

  filterTag : string = "";

  activityName : any[] = [];
  description : any[] = [];

  info_url : any[] = [];
  where_and_when : any[] = [];
  duration : any[] = [];
  address : any[] = [];

  img : any[] = [];
  noImg :string = "assets/img/eikuvaa.png"

  url : string = "http://open-api.myhelsinki.fi/v1/activities/";
  information : any;

  errorMsg : string = null; 

    constructor(private http : HttpClient) {

    this.getInformation();

   }



   getInformation = () : void => {

    this.http.get(`https://cors-anywhere.herokuapp.com/${this.url}`).subscribe((data : any) => {

    this.information = data.data;

    this.activityName = [];
    this.description = [];
  
    this.info_url = [];
    this.where_and_when = [];
    this.duration = [];
    this.address = [];
  
    this.img = [];

    this.filterData();
    
    },
    (err : any) => {

      this.errorMsg = "Haku ei onnistunut, yritä hetken kuluttua uudelleen";
      console.log(err);
  
     });
  }

  filterData = () : any => {
  let i : any;

    for(i = 0 ; i < this.information.length ; i++){

      this.activityName.push(this.information[i].name.fi);
      this.description.push(this.information[i].description.body);
      this.duration.push(this.information[i].where_when_duration.duration)
      this.info_url.push(this.information[i].info_url);
      this.where_and_when.push(this.information[i].where_when_duration.where_and_when);
      this.address.push(this.information[i].location.address.street_address);
      
      if(this.information[i].description.images[0] === undefined){

        this.img.push(this.noImg);

      } else {

      this.img.push(this.information[i].description.images[0].url);
      
      }
    }
  }

  getInCategory = () : any => {

    if(this.filterTag === "all"){

      this.getInformation();

    } else {

    this.http.get(`https://cors-anywhere.herokuapp.com/${this.url}?tags_filter=${this.filterTag}`).subscribe((data : any) => {

    this.information = data.data;

    this.activityName = [];
    this.description = [];
  
    this.info_url = [];
    this.where_and_when = [];
    this.duration = [];
    this.address = [];
  
    this.img = [];
   
    this.filterData();
    
    },
    (err : any) => {

      this.errorMsg = "Haku ei onnistunut, yritä hetken kuluttua uudelleen";
      console.log(err);
  
      });
    }
  }
}
