import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './application/accueil/accueil.component';
import { ProduitsComponent } from './application/produits/produits.component';
import { ContactComponent } from './application/contact/contact.component';
import { Error404Component } from './application/error404/error404.component';
import { ProduitComponent } from './application/produit/produit.component';



const routes: Routes = [{ path: 'accueil', component: AccueilComponent },
{ path: 'produits', component: ProduitsComponent },
{ path: 'contact', component: ContactComponent },
{ path: '', redirectTo: 'accueil', pathMatch: 'full' },
{ path: 'produits/:id', component: ProduitComponent },
{ path: '**', component: Error404Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
