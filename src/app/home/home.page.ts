import { Component } from '@angular/core';
import { InformationService } from './../information.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public information : InformationService) {}

}
