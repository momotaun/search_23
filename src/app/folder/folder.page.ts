import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  
  title = "Welcome,";
  subtitle = "Search 23 is the  go to app for finding and offering trusted services and business quiclky and safely. It  is a better way to get things done with less worry.Business owners can join with a once off fee of R50 and a subscription there after.";

  constructor() { }

  

  ngOnInit() {
    
  }

}
