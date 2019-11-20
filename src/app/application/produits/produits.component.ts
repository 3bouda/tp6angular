import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  lesProduits = [{ id: 15, libelle: 'montre' },
  { id: 32, libelle: 'cartable' },
  { id: 45, libelle: 'cahier' },
  { id: 96, libelle: 'tablier' }];

  constructor() { }

  ngOnInit() {
  }

}
