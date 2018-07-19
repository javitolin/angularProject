import { Ingredient } from './../shared/ingredient.module';
export class Recipe {
  public name: string;
  public description: string;
  public image_path: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, path: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.image_path = path;
    this.ingredients = ingredients;
  }
}
