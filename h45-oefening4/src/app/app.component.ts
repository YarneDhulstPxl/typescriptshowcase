import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'h45-oefening4';

  selectedPokemonName: string;

  pokemons: Pokemon[] = [
    { id: 1, name: "Bulbasaur", type: "grass", icon: "assets/1.png" },
    { id: 2, name: "Ivysaur", type: "grass", icon: "assets/2.png" },
    { id: 3, name: "Venusaur", type: "grass", icon: "assets/3.png" },
    { id: 4, name: "Charmander", type: "fire", icon: "assets/4.png" },
    { id: 5, name: "Charmeleon", type: "fire", icon: "assets/5.png" },
    { id: 6, name: "Charizard", type: "fire", icon: "assets/6.png" },
    { id: 7, name: "Squirtle", type: "water", icon: "assets/7.png" },
    { id: 8, name: "Wartortle", type: "water", icon: "assets/8.png" },
    { id: 9, name: "Blastoise", type: "water", icon: "assets/9.png" }
];

  handleData(event: Pokemon): void {
    this.selectedPokemonName = event.name;
  }
}
