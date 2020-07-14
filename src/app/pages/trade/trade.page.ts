import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.page.html',
  styleUrls: ['./trade.page.scss'],
})
export class TradePage implements OnInit {

  public trades = [
    {
      image: '../../assets/images/about-bg.jpg',
      cName:'Smart Panel Beaters',
      spTitle: 'Mr',
      spName: 'Nyathi',
      spJob:'General Manager',
      spAddress: '5462 Evaton West Ext 5',
      spContact: '083 556 6672',
      spEmail: 'email@company.co.za'
    },
    {
      image: '',
      cName:'BG Winners',
      spTitle: 'Mrs',
      spName: 'Sekhuthe',
      spJob:'General Manager',
      spAddress: '5462 Evaton West Ext 5',
      spContact: '083 556 6672',
      spEmail: 'email@company.co.za'
    },
    {
      image: '',
      cName:'Carengaru Creche',
      spTitle: 'Mrs',
      spName: 'Sefatsa',
      spJob:'Principal',
      spAddress: '5924 Evaton West Ext 5',
      spContact: '083 556 6672',
      spEmail: 'email@company.co.za'
    },
    {
      image: '',
      cName:'Basic Code',
      spTitle: 'Mr',
      spName: 'Maduna',
      spJob:'CEO',
      spAddress: '5836 Evaton West Ext 5',
      spContact: '083 556 6672',
      spEmail: 'email@company.co.za'
    },
    {
      image: '',
      cName:'Konnct Technologies',
      spTitle: 'Mr',
      spName: 'Maila',
      spJob:'Operations Manager',
      spAddress: '4562 Evaton West Ext 4',
      spContact: '083 556 6672',
      spEmail: 'email@company.co.za'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
