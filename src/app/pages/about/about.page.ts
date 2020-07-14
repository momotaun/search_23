import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  public about: string;

  constructor(private activatedRoute: ActivatedRoute, public navCtrl: NavController) { }

  goBack () {
    this.navCtrl.pop();
  }

  ngOnInit() {
    
  }

}
