import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'node_modules/rxjs';

@Injectable()
export class RecipeService {

  recipesChange = new Subject<Recipe[]>();
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

  public setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChange.next(this.getRecipes());
  }

  public getRecipes() {
    return this.recipes.slice(); // Get a copy
  }

  public getRecipeById(id: number) {
    return this.getRecipes()[id];
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChange.next(this.getRecipes());
  }

  public updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChange.next(this.getRecipes());
  }

  public deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChange.next(this.getRecipes());
  }
}
