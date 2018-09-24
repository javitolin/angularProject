import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  show_recipes: boolean = true;
  show_shopping_list: boolean = false;

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBqCD8zmgTgSM6z-J1tjGelPVJE9k-fljE",
      authDomain: "jdudemycourse.firebaseapp.com"
    });
  }

  OnMenuItemChosen(menu_clicked: string) {
    if (menu_clicked === 'recipes') {
      this.show_recipes = true;
      this.show_shopping_list = false;
    } else {
      this.show_shopping_list = true;
      this.show_recipes = false;
    }
  }
}
