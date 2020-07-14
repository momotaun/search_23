import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  title = "Welcome,";
  subtitle = "Search 23 is the  go to app for finding and offering trusted services and business quiclky and safely. It  is a better way to get things done with less worry.Business owners can join with a once off fee of R50 and a subscription there after.";
  constructor() { }

  ngOnInit() {
  }

}
