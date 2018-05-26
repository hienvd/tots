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
  comDisplayedColumns = ['name', 'mainPoint', 'branchPoint', 'coin', 'txp', 'sb', 'numPlayers'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  comData = COM_DATA;
  eplData = EPL_DATA;
  laLigaData = LALIGA_DATA;
  bundesData = BUNDES_DATA;
  calcioData = CALCIO_DATA;
  ligue1Data = L1_DATA;

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
  coin: number,
  txp: number,
  sb: number,
  numPlayers: number
}

const ELEMENT_DATA: Element[] = [
  //Ligue 1
  {cat: 'Ligue 1', pos: 'ST', ovr: 87, name: 'Toko-Ekambi', points: 27},
  {cat: 'Ligue 1', pos: 'CB', ovr: 87, name: 'Kimpempe', points: 29},
  {cat: 'Ligue 1', pos: 'GK', ovr: 88, name: 'Lecomte', points: 31},
  {cat: 'Ligue 1', pos: 'CDM', ovr: 88, name: 'Luiz Gustavo', points: 35},
  {cat: 'Ligue 1', pos: 'CB', ovr: 89, name: 'Glik', points: 45},
  {cat: 'Ligue 1', pos: 'CAM', ovr: 89, name: 'Fekir', points: 49},
  {cat: 'Ligue 1', pos: 'RM', ovr: 90, name: 'Thauvin', points: 74},
  {cat: 'Ligue 1', pos: 'ST', ovr: 91, name: 'Cavani', points: 91},
  {cat: 'Ligue 1', pos: 'CB', ovr: 91, name: 'Marquinhos', points: 109},
  {cat: 'Ligue 1', pos: 'LW', ovr: 92, name: 'Depay', points: 164},
  {cat: 'Ligue 1', pos: 'LW', ovr: 93, name: 'Neymar', points: 249},
  //Calcio A
  {cat: 'Calcio A', pos: 'CB', ovr: 87, name: 'Skriniar', points: 27},
  {cat: 'Calcio A', pos: 'CM', ovr: 87, name: 'Allan', points: 29},
  {cat: 'Calcio A', pos: 'CM', ovr: 88, name: 'Milinkovic Savic', points: 31},
  {cat: 'Calcio A', pos: 'LW', ovr: 89, name: 'Insigne', points: 40},
  {cat: 'Calcio A', pos: 'GK', ovr: 89, name: 'Handonovic', points: 45},
  {cat: 'Calcio A', pos: 'CB', ovr: 90, name: 'Benatia', points: 64},
  {cat: 'Calcio A', pos: 'ST', ovr: 91, name: 'Immobile', points: 89},
  {cat: 'Calcio A', pos: 'CDM', ovr: 91, name: 'Pjanic', points: 101},
  {cat: 'Calcio A', pos: 'CB', ovr: 92, name: 'Koulibaly', points: 139},
  {cat: 'Calcio A', pos: 'ST', ovr: 92, name: 'Icardy', points: 164},
  {cat: 'Calcio A', pos: 'CAM', ovr: 93, name: 'Dybala', points: 249},
  //Bundesliga
  {cat: 'Bundesliga', pos: 'LB', ovr: 87, name: 'Wendell', points: 27},
  {cat: 'Bundesliga', pos: 'LM', ovr: 87, name: 'Bailey', points: 29},
  {cat: 'Bundesliga', pos: 'GK', ovr: 88, name: 'Hradecky', points: 31},
  {cat: 'Bundesliga', pos: 'ST', ovr: 89, name: 'Batshuayi', points: 40},
  {cat: 'Bundesliga', pos: 'CM', ovr: 89, name: 'Goretzka', points: 45},
  {cat: 'Bundesliga', pos: 'RB', ovr: 90, name: 'Kimmich', points: 64},
  {cat: 'Bundesliga', pos: 'CF', ovr: 91, name: 'Muller', points: 89},
  {cat: 'Bundesliga', pos: 'CB', ovr: 91, name: 'Naldo', points: 101},
  {cat: 'Bundesliga', pos: 'CB', ovr: 91, name: 'Hummels', points: 119},
  {cat: 'Bundesliga', pos: 'CAM', ovr: 93, name: 'Rodriguez', points: 204},
  {cat: 'Bundesliga', pos: 'ST', ovr: 93, name: 'Lewadowski', points: 249},
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
  {name: 'Rabiot', mainPoint: 2, branchPoint: 20, coin: 100000, txp: 0, sb: 200, numPlayers: 0},
  {name: 'Fabinho', mainPoint: 4, branchPoint: 20, coin: 700000, txp: 0, sb: 0, numPlayers: 0},
  {name: 'Lemar', mainPoint: 6, branchPoint: 25, coin: 300000, txp: 150000, sb: 0, numPlayers: 0},
  {name: 'Sule', mainPoint: 10, branchPoint: 25, coin: 300000, txp: 20000, sb: 300, numPlayers: 1},
  {name: 'Javi Martinez', mainPoint: 15, branchPoint: 20, coin: 1050000, txp: 70000, sb: 0, numPlayers: 1},
  {name: 'Vardy', mainPoint: 19, branchPoint: 25, coin: 300000, txp: 260000, sb: 0, numPlayers: 1},
  {name: 'Pique', mainPoint: 29, branchPoint: 45, coin: 300000, txp: 210000, sb: 600, numPlayers: 1},
  {name: 'Giovinco', mainPoint: 41, branchPoint: 45, coin: 1800000, txp: 210000, sb: 120, numPlayers: 2},
  {name: 'Chiellini', mainPoint: 59, branchPoint: 60, coin: 300000, txp: 610000, sb: 480, numPlayers: 2},
  {name: 'Oblak', mainPoint: 84, branchPoint: 60, coin: 300000, txp: 210000, sb: 1780, numPlayers: 2},
  {name: 'Hamsik', mainPoint: 129, branchPoint: 60, coin: 2300000, txp: 210000, sb: 1380, numPlayers: 3}
];

const EPL_DATA: DetailedElement[] = [
  {name: 'Vertonghen', mainPoint: 2, branchPoint: 25, coin: 100000, txp: 0, sb: 300, numPlayers: 0},
  {name: 'Walker', mainPoint: 4, branchPoint: 25, coin: 950000, txp: 0, sb: 0, numPlayers: 0},
  {name: 'Fernandinho', mainPoint: 6, branchPoint: 25, coin: 300000, txp: 150000, sb: 0, numPlayers: 0},
  {name: 'Eriksen', mainPoint: 10, branchPoint: 30, coin: 300000, txp: 20000, sb: 400, numPlayers: 1},
  {name: 'David Silva', mainPoint: 15, branchPoint: 30, coin: 1300000, txp: 70000, sb: 0, numPlayers: 1},
  {name: 'Otamendi', mainPoint: 19, branchPoint: 45, coin: 300000, txp: 310000, sb: 0, numPlayers: 1},
  {name: 'Kane', mainPoint: 29, branchPoint: 80, coin: 300000, txp: 210000, sb: 800, numPlayers: 1},
  {name: 'Aguero', mainPoint: 41, branchPoint: 80, coin: 2300000, txp: 210000, sb: 120, numPlayers: 2},
  {name: 'De Bruyne', mainPoint: 59, branchPoint: 120, coin: 300000, txp: 810000, sb: 480, numPlayers: 2},
  {name: 'De Gea', mainPoint: 84, branchPoint: 120, coin: 300000, txp: 210000, sb: 2180, numPlayers: 2},
  {name: 'Salah', mainPoint: 129, branchPoint: 200, coin: 5300000, txp: 210000, sb: 1380, numPlayers: 3}
];

const LALIGA_DATA: DetailedElement[] = [
  {name: 'Parejo', mainPoint: 2, branchPoint: 25, coin: 100000, txp: 0, sb: 300, numPlayers: 0},
  {name: 'Hernandez', mainPoint: 4, branchPoint: 25, coin: 950000, txp: 0, sb: 0, numPlayers: 0},
  {name: 'Saul', mainPoint: 6, branchPoint: 25, coin: 300000, txp: 150000, sb: 0, numPlayers: 0},
  {name: 'Ter Stegen', mainPoint: 10, branchPoint: 25, coin: 300000, txp: 20000, sb: 300, numPlayers: 1},
  {name: 'Jordi Alba', mainPoint: 15, branchPoint: 30, coin: 800000, txp: 70000, sb: 0, numPlayers: 1},
  {name: 'Pique', mainPoint: 19, branchPoint: 60, coin: 300000, txp: 410000, sb: 0, numPlayers: 1},
  {name: 'Sergio Ramos', mainPoint: 29, branchPoint: 80, coin: 300000, txp: 210000, sb: 800, numPlayers: 1},
  {name: 'Griezmann', mainPoint: 41, branchPoint: 80, coin: 2300000, txp: 210000, sb: 120, numPlayers: 2},
  {name: 'Kroos', mainPoint: 59, branchPoint: 120, coin: 300000, txp: 810000, sb: 480, numPlayers: 2},
  {name: 'Messi', mainPoint: 129, branchPoint: 200, coin: 5300000, txp: 210000, sb: 1380, numPlayers: 3},
  {name: 'C.Ronaldo', mainPoint: 129, branchPoint: 200, coin: 300000, txp: 210000, sb: 3380, numPlayers: 3}
];

const BUNDES_DATA: DetailedElement[] = [
  {name: 'Wendell', mainPoint: 2, branchPoint: 25, coin: 100000, txp: 0, sb: 300, numPlayers: 0},
  {name: 'Bailey', mainPoint: 4, branchPoint: 25, coin: 950000, txp: 0, sb: 0, numPlayers: 0},
  {name: 'Hradecky', mainPoint: 6, branchPoint: 25, coin: 300000, txp: 150000, sb: 0, numPlayers: 0},
  {name: 'Batshuayi', mainPoint: 10, branchPoint: 30, coin: 300000, txp: 20000, sb: 200, numPlayers: 1},
  {name: 'Goretzka', mainPoint: 15, branchPoint: 30, coin: 800000, txp: 70000, sb: 0, numPlayers: 1},
  {name: 'Kimmich', mainPoint: 19, branchPoint: 45, coin: 300000, txp: 310000, sb: 0, numPlayers: 1},
  {name: 'Muller', mainPoint: 29, branchPoint: 60, coin: 300000, txp: 210000, sb: 400, numPlayers: 1},
  {name: 'Naldo', mainPoint: 41, branchPoint: 60, coin: 1300000, txp: 210000, sb: 120, numPlayers: 2},
  {name: 'Hummels', mainPoint: 59, branchPoint: 60, coin: 300000, txp: 810000, sb: 480, numPlayers: 2},
  {name: 'Rodriguez', mainPoint: 84, branchPoint: 120, coin: 300000, txp: 210000, sb: 1780, numPlayers: 2},
  {name: 'Lewadowski', mainPoint: 129, branchPoint: 120, coin: 2300000, txp: 210000, sb: 1480, numPlayers: 3}
];

const CALCIO_DATA: DetailedElement[] = [
  {name: 'Skriniar', mainPoint: 2, branchPoint: 25, coin: 100000, txp: 0, sb: 300, numPlayers: 0},
  {name: 'Allan', mainPoint: 4, branchPoint: 25, coin: 950000, txp: 0, sb: 0, numPlayers: 0},
  {name: 'Milinkovic Savic', mainPoint: 6, branchPoint: 25, coin: 300000, txp: 150000, sb: 0, numPlayers: 0},
  {name: 'Insigne', mainPoint: 10, branchPoint: 30, coin: 300000, txp: 20000, sb: 300, numPlayers: 1},
  {name: 'Handonovic', mainPoint: 15, branchPoint: 30, coin: 1050000, txp: 70000, sb: 0, numPlayers: 1},
  {name: 'Benatia', mainPoint: 19, branchPoint: 45, coin: 300000, txp: 310000, sb: 0, numPlayers: 1},
  {name: 'Immobile', mainPoint: 29, branchPoint: 60, coin: 300000, txp: 210000, sb: 600, numPlayers: 1},
  {name: 'Pjanic', mainPoint: 41, branchPoint: 60, coin: 1500000, txp: 210000, sb: 120, numPlayers: 2},
  {name: 'Koulibaly', mainPoint: 59, branchPoint: 80, coin: 300000, txp: 610000, sb: 480, numPlayers: 2},
  {name: 'Icardy', mainPoint: 84, branchPoint: 80, coin: 300000, txp: 210000, sb: 1780, numPlayers: 2},
  {name: 'Dybala', mainPoint: 129, branchPoint: 120, coin: 2300000, txp: 210000, sb: 1480, numPlayers: 3}
];

const L1_DATA: DetailedElement[] = [
  {name: 'Toko-Ekambi', mainPoint: 2, branchPoint: 25, coin: 100000, txp: 0, sb: 300, numPlayers: 0},
  {name: 'Kimpempe', mainPoint: 4, branchPoint: 25, coin: 950000, txp: 0, sb: 0, numPlayers: 0},
  {name: 'Lecomte', mainPoint: 6, branchPoint: 25, coin: 300000, txp: 150000, sb: 0, numPlayers: 0},
  {name: 'Luiz Gustavo', mainPoint: 10, branchPoint: 25, coin: 300000, txp: 20000, sb: 300, numPlayers: 1},
  {name: 'Glik', mainPoint: 15, branchPoint: 30, coin: 1050000, txp: 70000, sb: 0, numPlayers: 1},
  {name: 'Fekir', mainPoint: 19, branchPoint: 30, coin: 300000, txp: 260000, sb: 0, numPlayers: 1},
  {name: 'Thauvin', mainPoint: 29, branchPoint: 45, coin: 300000, txp: 210000, sb: 600, numPlayers: 1},
  {name: 'Cavani', mainPoint: 41, branchPoint: 50, coin: 1300000, txp: 210000, sb: 120, numPlayers: 2},
  {name: 'Marquinhos', mainPoint: 59, branchPoint: 50, coin: 300000, txp: 610000, sb: 480, numPlayers: 2},
  {name: 'Depay', mainPoint: 84, branchPoint: 80, coin: 300000, txp: 210000, sb: 1780, numPlayers: 2},
  {name: 'Neymar', mainPoint: 129, branchPoint: 120, coin: 2300000, txp: 210000, sb: 1480, numPlayers: 3}
];
