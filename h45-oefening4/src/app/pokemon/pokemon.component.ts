import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() pokemon: Pokemon;
  @Output() selectedPokemon: EventEmitter<Pokemon> = new EventEmitter();
  
  isSelected: boolean = false;

  constructor() {
  }

  onClick() {
    this.selectedPokemon.emit(this.pokemon);
    this.isSelected = true;
  }

}
