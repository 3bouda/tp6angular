import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  onAccueil() {
    this.router.navigate(['/accueil']);
  }


  constructor(private router: Router) { }

  ngOnInit() {
  }
}
import { Router } from '@angular/router';

