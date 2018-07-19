import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('test recipe', 'this is a test', 'http://cdn-image.myrecipes.com/sites/' +
    'default/files/styles/4_3_horizontal_-_1200x900/public/skillet-chicken-roasted-potat' +
    'oes-carrots-ck.jpg?itok=dzdpIO4s', [
      new Ingredient('meat', 1), new Ingredient('French Fries', 20)
    ]),
    new Recipe('test recipe 2', 'this is a test 2', 'http://cdn-image.myrecipes.com/sites/' +
    'default/files/styles/4_3_horizontal_-_1200x900/public/skillet-chicken-roasted-potat' +
    'oes-carrots-ck.jpg?itok=dzdpIO4s', [
      new Ingredient('Bread', 2), new Ingredient('Meat', 1)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  public getRecipes() {
    return this.recipes.slice(); // Get a copy
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
