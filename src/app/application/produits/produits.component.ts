import { Component, OnInit } from '@angular/core';
import { ProService } from '../../pro.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
  
})
export class ProduitsComponent implements OnInit {
  
  lesProduits = [];

constructor(private service:ProService) {
}



  ngOnInit() {
this.lesProduits = this.service.lesProduits;
  }

}
