import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProService {
 lesProduits = [{ id: 15, libelle: 'montre' },
  { id: 32, libelle: 'cartable' },
  { id: 45, libelle: 'cahier' },
  { id: 96, libelle: 'tablier' }];
  
  constructor() { }
}
