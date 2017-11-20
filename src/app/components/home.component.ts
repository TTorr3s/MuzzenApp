import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-home',
  templateUrl: '../views/home.html',
  styleUrls: ['../styles/home.style.css'],
})
export class HomeComponent {
  ngOnInit() {
    var elem = document.querySelector(".materialboxed");
    var instance = new M.Materialbox(elem);
  }

}
