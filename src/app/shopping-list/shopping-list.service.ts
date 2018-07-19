import { Ingredient } from '../shared/ingredient.module';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 2),
    new Ingredient('Tomatoes', 3)
  ];

  public addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientChanged.emit(this.getIngredients());
  }

  public addIngredients(items: Ingredient[]) {
    this.ingredients.push(...items);
    this.ingredientChanged.emit(this.getIngredients());
  }

  public getIngredients() {
    return this.ingredients.slice();
  }

}

