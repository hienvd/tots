import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule, MatSort, MatTableDataSource} from '@angular/material';

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

  displayedColumns = ['cat', 'ovr', 'name', 'pos', 'points'];
  comDisplayedColumns = ['name', 'mainPoint', 'branchPoint', 'mainCoin', 'mainTXP', 'mainSB', 'mainPlayers', 'branchCoin', 'branchTXP', 'branchSB'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  comData = COM_DATA;
  eplData = EPL_DATA;
  laLigaData = LALIGA_DATA;

  //TODO: later
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
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
  //La Liga
  {cat: 'La Liga', pos: 'CM', ovr: 87, name: 'Parejo', points: 27},
  {cat: 'La Liga', pos: 'LB', ovr: 87, name: 'Hernandez', points: 29},
  {cat: 'La Liga', pos: 'CM', ovr: 87, name: 'Saul', points: 31},
  {cat: 'La Liga', pos: 'GK', ovr: 88, name: 'Ter Stegen', points: 35},
  {cat: 'La Liga', pos: 'LB', ovr: 89, name: 'Jordi Alba', points: 45},
  {cat: 'La Liga', pos: 'CB', ovr: 91, name: 'Pique', points: 79},
  {cat: 'La Liga', pos: 'CB', ovr: 92, name: 'Sergio Ramos', points: 109},
  {cat: 'La Liga', pos: 'ST', ovr: 92, name: 'Griezmann', points: 121},
  {cat: 'La Liga', pos: 'CM', ovr: 93, name: 'Toni Kroos', points: 179},
  {cat: 'La Liga', pos: 'ST', ovr: 95, name: 'Messi', points: 329},
  {cat: 'La Liga', pos: 'ST', ovr: 95, name: 'C.Ronaldo', points: 329},
  //EPL
  {cat: 'EPL', pos: 'CB', ovr: 87, name: 'Vertonghen', points: 27},
  {cat: 'EPL', pos: 'RB', ovr: 87, name: 'Walker', points: 29},
  {cat: 'EPL', pos: 'CDM', ovr: 88, name: 'Fernandinho', points: 31},
  {cat: 'EPL', pos: 'CAM', ovr: 89, name: 'Eriksen', points: 40},
  {cat: 'EPL', pos: 'CM', ovr: 89, name: 'David Silva', points: 45},
  {cat: 'EPL', pos: 'CB', ovr: 90, name: 'Otamendi', points: 64},
  {cat: 'EPL', pos: 'ST', ovr: 92, name: 'Kane', points: 109},
  {cat: 'EPL', pos: 'ST', ovr: 92, name: 'Aguero', points: 121},
  {cat: 'EPL', pos: 'CM', ovr: 93, name: 'De Bruyne', points: 179},
  {cat: 'EPL', pos: 'GK', ovr: 93, name: 'De Gea', points: 204},
  {cat: 'EPL', pos: 'RW', ovr: 95, name: 'Salah', points: 329},
  //Community
  {cat: 'Community', pos: 'CM', ovr: 86, name: 'Rabiot', points: 22},
  {cat: 'Community', pos: 'CDM', ovr: 86, name: 'Fabinho', points: 24},
  {cat: 'Community', pos: 'LM', ovr: 87, name: 'Lemar', points: 31},
  {cat: 'Community', pos: 'CB', ovr: 87, name: 'Sule', points: 35},
  {cat: 'Community', pos: 'CDM', ovr: 88, name: 'Javi Martinez', points: 40},
  {cat: 'Community', pos: 'ST', ovr: 88, name: 'Vardy', points: 44},
  {cat: 'Community', pos: 'CB', ovr: 90, name: 'Pique', points: 74},
  {cat: 'Community', pos: 'CF', ovr: 90, name: 'Giovinco', points: 86},
  {cat: 'Community', pos: 'CB', ovr: 91, name: 'Chiellini', points: 119},
  {cat: 'Community', pos: 'GK', ovr: 91, name: 'Oblak', points: 144},
  {cat: 'Community', pos: 'CM', ovr: 91, name: 'Hamsik', points: 189}
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

const LALIGA_DATA: DetailedElement[] = [
  {name: 'Parejo', mainPoint: 2, branchPoint: 25, mainCoin: 100000, mainTXP: 0, mainSB: 0, mainPlayers: 0, branchCoin: 0, branchTXP: 0, branchSB: 300},
  {name: 'Hernandez', mainPoint: 4, branchPoint: 25, mainCoin: 200000, mainTXP: 0, mainSB: 0, mainPlayers: 0, branchCoin: 750000, branchTXP: 0, branchSB: 0},
  {name: 'Saul', mainPoint: 6, branchPoint: 25, mainCoin: 300000, mainTXP: 0, mainSB: 0, mainPlayers: 0, branchCoin: 0, branchTXP: 150000, branchSB: 0},
  {name: 'Ter Stegen', mainPoint: 10, branchPoint: 25, mainCoin: 300000, mainTXP: 20000, mainSB: 0, mainPlayers: 1, branchCoin: 0, branchTXP: 0, branchSB: 300},
  {name: 'Jordi Alba', mainPoint: 15, branchPoint: 30, mainCoin: 300000, mainTXP: 70000, mainSB: 0, mainPlayers: 1, branchCoin: 500000, branchTXP: 0, branchSB: 0},
  {name: 'Pique', mainPoint: 19, branchPoint: 60, mainCoin: 300000, mainTXP: 110000, mainSB: 0, mainPlayers: 1, branchCoin: 0, branchTXP: 300000, branchSB: 0},
  {name: 'Sergio Ramos', mainPoint: 29, branchPoint: 80, mainCoin: 300000, mainTXP: 210000, mainSB: 0, mainPlayers: 1, branchCoin: 0, branchTXP: 0, branchSB: 800},
  {name: 'Griezmann', mainPoint: 41, branchPoint: 80, mainCoin: 300000, mainTXP: 210000, mainSB: 120, mainPlayers: 2, branchCoin: 2000000, branchTXP: 0, branchSB: 0},
  {name: 'Kroos', mainPoint: 59, branchPoint: 120, mainCoin: 300000, mainTXP: 210000, mainSB: 480, mainPlayers: 2, branchCoin: 0, branchTXP: 600000, branchSB: 0},
  {name: 'Messi', mainPoint: 129, branchPoint: 200, mainCoin: 300000, mainTXP: 210000, mainSB: 980, mainPlayers: 2, branchCoin: 5000000, branchTXP: 0, branchSB: 0},
  {name: 'C.Ronaldo', mainPoint: 129, branchPoint: 200, mainCoin: 300000, mainTXP: 210000, mainSB: 1380, mainPlayers: 3, branchCoin: 0, branchTXP: 0, branchSB: 2000}
];
