import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitsComponent } from '../produits/produits.component';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent {
  identifiant: number;
  tab;


  constructor(private activatedRoute: ActivatedRoute, private a: ProduitsComponent) {
    this.tab = this.a.lesProduits[this.identifiant];
  }

  ngOnInit() {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
  }


}

