import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './tots.component.html',
  styleUrls: ['./tots.component.css']
})
export class TotsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  //ALL DATA iS HERE :D

  displayedColumns = ['index', 'cat', 'pos', 'ovr', 'name', 'points', 'vouchers'];
  comDisplayedColumns = ['name', 'mainPoint', 'branchPoint', 'mainCoin', 'mainTXP', 'mainSB', 'mainPlayers', 'branchCoin', 'branchTXP', 'branchSB'];
  dataSource = ELEMENT_DATA;
  comData = COM_DATA;
  eplData = EPL_DATA;
}

export interface Element {
  index: number,
  cat: string,
  name: string;
  pos: string;
  ovr: number;
  points: number;
}

export interface DetailedElement {
  name: string,
  mainPoint: number,
  branchPoint: number,
  mainCoin: number,
  mainTXP: number,
  mainSB: number,
  mainPlayers: number,
  branchCoin: number,
  branchTXP: number,
  branchSB: number
}

const ELEMENT_DATA: Element[] = [
  //Community
  {index: 1, cat: 'Community', pos: 'CM', ovr: 86, name: 'Rabiot', points: 22},
  {index: 2, cat: 'Community', pos: 'CDM', ovr: 86, name: 'Fabinho', points: 24},
  {index: 3, cat: 'Community', pos: 'LM', ovr: 87, name: 'Lemar', points: 31},
  {index: 4, cat: 'Community', pos: 'CB', ovr: 87, name: 'Sule', points: 35},
  {index: 5, cat: 'Community', pos: 'CDM', ovr: 88, name: 'Javi Martinez', points: 40},
  {index: 6, cat: 'Community', pos: 'ST', ovr: 88, name: 'Vardy', points: 44},
  {index: 7, cat: 'Community', pos: 'CB', ovr: 90, name: 'Pique', points: 74},
  {index: 8, cat: 'Community', pos: 'CF', ovr: 90, name: 'Giovinco', points: 86},
  {index: 9, cat: 'Community', pos: 'CB', ovr: 91, name: 'Chiellini', points: 119},
  {index: 10, cat: 'Community', pos: 'GK', ovr: 91, name: 'Oblak', points: 144},
  {index: 11, cat: 'Community', pos: 'CM', ovr: 91, name: 'Hamsik', points: 189},
  //EPL
  {index: 1, cat: 'EPL', pos: 'CB', ovr: 87, name: 'Vertonghen', points: 27},
  {index: 2, cat: 'EPL', pos: 'RB', ovr: 87, name: 'Walker', points: 29},
  {index: 3, cat: 'EPL', pos: 'CDM', ovr: 88, name: 'Fernandinho', points: 31},
  {index: 4, cat: 'EPL', pos: 'CAM', ovr: 89, name: 'Eriksen', points: 40},
  {index: 5, cat: 'EPL', pos: 'CM', ovr: 89, name: 'David Silva', points: 45},
  {index: 6, cat: 'EPL', pos: 'CB', ovr: 90, name: 'Otamendi', points: 64},
  {index: 7, cat: 'EPL', pos: 'ST', ovr: 92, name: 'Kane', points: 109},
  {index: 8, cat: 'EPL', pos: 'ST', ovr: 92, name: 'Aguero', points: 121},
  {index: 9, cat: 'EPL', pos: 'CM', ovr: 93, name: 'De Bruyne', points: 179},
  {index: 10, cat: 'EPL', pos: 'GK', ovr: 93, name: 'De Gea', points: 204},
  {index: 11, cat: 'EPL', pos: 'RW', ovr: 95, name: 'Salah', points: 329},
];

const COM_DATA: DetailedElement[] = [
  {name: 'Rabiot', mainPoint: 2, branchPoint: 20, mainCoin: 100000, mainTXP: 0, mainSB: 0, mainPlayers: 0, branchCoin: 0, branchTXP: 0, branchSB: 200},
  {name: 'Fabinho', mainPoint: 4, branchPoint: 20, mainCoin: 200000, mainTXP: 0, mainSB: 0, mainPlayers: 0, branchCoin: 500000, branchTXP: 0, branchSB: 0},
  {name: 'Lemar', mainPoint: 6, branchPoint: 25, mainCoin: 300000, mainTXP: 0, mainSB: 0, mainPlayers: 0, branchCoin: 0, branchTXP: 150000, branchSB: 0},
  {name: 'Sule', mainPoint: 10, branchPoint: 25, mainCoin: 300000, mainTXP: 20000, mainSB: 0, mainPlayers: 1, branchCoin: 0, branchTXP: 0, branchSB: 300},
  {name: 'Javi Martinez', mainPoint: 15, branchPoint: 20, mainCoin: 300000, mainTXP: 70000, mainSB: 0, mainPlayers: 1, branchCoin: 750000, branchTXP: 0, branchSB: 0},
  {name: 'Vardy', mainPoint: 19, branchPoint: 25, mainCoin: 300000, mainTXP: 110000, mainSB: 0, mainPlayers: 1, branchCoin: 0, branchTXP: 150000, branchSB: 0},
  {name: 'Pique', mainPoint: 29, branchPoint: 45, mainCoin: 300000, mainTXP: 210000, mainSB: 0, mainPlayers: 1, branchCoin: 0, branchTXP: 0, branchSB: 600},
  {name: 'Giovinco', mainPoint: 41, branchPoint: 45, mainCoin: 300000, mainTXP: 210000, mainSB: 120, mainPlayers: 2, branchCoin: 1500000, branchTXP: 0, branchSB: 0},
  {name: 'Chiellini', mainPoint: 59, branchPoint: 60, mainCoin: 300000, mainTXP: 210000, mainSB: 480, mainPlayers: 2, branchCoin: 0, branchTXP: 400000, branchSB: 0},
  {name: 'Oblak', mainPoint: 84, branchPoint: 60, mainCoin: 300000, mainTXP: 210000, mainSB: 980, mainPlayers: 2, branchCoin: 0, branchTXP: 0, branchSB: 800},
  {name: 'Hamsik', mainPoint: 129, branchPoint: 60, mainCoin: 300000, mainTXP: 210000, mainSB: 1380, mainPlayers: 3, branchCoin: 2000000, branchTXP: 0, branchSB: 0}
];

const EPL_DATA: DetailedElement[] = [
  {name: 'Vertonghen', mainPoint: 2, branchPoint: 25, mainCoin: 100000, mainTXP: 0, mainSB: 0, mainPlayers: 0, branchCoin: 0, branchTXP: 0, branchSB: 300},
  {name: 'Walker', mainPoint: 4, branchPoint: 25, mainCoin: 200000, mainTXP: 0, mainSB: 0, mainPlayers: 0, branchCoin: 750000, branchTXP: 0, branchSB: 0},
  {name: 'Fernandinho', mainPoint: 6, branchPoint: 25, mainCoin: 300000, mainTXP: 0, mainSB: 0, mainPlayers: 0, branchCoin: 0, branchTXP: 150000, branchSB: 0},
  {name: 'Eriksen', mainPoint: 10, branchPoint: 30, mainCoin: 300000, mainTXP: 20000, mainSB: 0, mainPlayers: 1, branchCoin: 0, branchTXP: 0, branchSB: 400},
  {name: 'David Silva', mainPoint: 15, branchPoint: 30, mainCoin: 300000, mainTXP: 70000, mainSB: 0, mainPlayers: 1, branchCoin: 1000000, branchTXP: 0, branchSB: 0},
  {name: 'Otamendi', mainPoint: 19, branchPoint: 45, mainCoin: 300000, mainTXP: 110000, mainSB: 0, mainPlayers: 1, branchCoin: 0, branchTXP: 200000, branchSB: 0},
  {name: 'Kane', mainPoint: 29, branchPoint: 80, mainCoin: 300000, mainTXP: 210000, mainSB: 0, mainPlayers: 1, branchCoin: 0, branchTXP: 0, branchSB: 800},
  {name: 'Aguero', mainPoint: 41, branchPoint: 80, mainCoin: 300000, mainTXP: 210000, mainSB: 120, mainPlayers: 2, branchCoin: 2000000, branchTXP: 0, branchSB: 0},
  {name: 'De Bruyne', mainPoint: 59, branchPoint: 120, mainCoin: 300000, mainTXP: 210000, mainSB: 480, mainPlayers: 2, branchCoin: 0, branchTXP: 600000, branchSB: 0},
  {name: 'De Gea', mainPoint: 84, branchPoint: 120, mainCoin: 300000, mainTXP: 210000, mainSB: 980, mainPlayers: 2, branchCoin: 0, branchTXP: 0, branchSB: 1200},
  {name: 'Salah', mainPoint: 129, branchPoint: 200, mainCoin: 300000, mainTXP: 210000, mainSB: 1380, mainPlayers: 3, branchCoin: 5000000, branchTXP: 0, branchSB: 0}
];