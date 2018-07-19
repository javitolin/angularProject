import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') name_input_ref: ElementRef;
  @ViewChild('amountInput') amount_input_ref: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.name_input_ref.nativeElement.value,
    this.amount_input_ref.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
