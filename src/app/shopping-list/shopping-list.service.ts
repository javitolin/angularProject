import { Ingredient } from '../shared/ingredient.module';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 2),
    new Ingredient('Tomatoes', 3)
  ];

  public addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientChanged.next(this.getIngredients());
  }

  public addIngredients(items: Ingredient[]) {
    this.ingredients.push(...items);
    this.ingredientChanged.next(this.getIngredients());
  }

  public getIngredients() {
    return this.ingredients.slice();
  }

  public getIngredient(index: number) {
    return this.getIngredients()[index];
  }

  public updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.getIngredients());
  }

  public deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.getIngredients());
  }

}

