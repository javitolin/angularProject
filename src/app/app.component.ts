import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show_recipes: boolean = true;
  show_shopping_list: boolean = false;

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
