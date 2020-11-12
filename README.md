# **Oefeningen: Databinding & directives**
## Oefening 1
Maak een nieuw Angular project h45-oefening1 in de root directory van deze directory.

*   Voorzie in de app component een input veld dat je koppelt via 2-way binding aan een variabele username. 
*   Toon de inhoud van de username in paragraaf onder het input veld.
*   Voeg een knop toe waar je enkel op kan klikken als de username geen lege string is.
*   Als je op de knop klikt, wordt de string terug leeggemaakt.

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.

## Oefening 2
Werk hiervoor in het bestaande project h45-oefening2.

*   Voeg een knop “Display details” toe aan de app component.
*   Voeg een paragraaf toe met inhoud naar keuze.
*   Zorg voor een toggle van het weergeven van die paragraaf op basis van de knop.
*   Log elke keer dat op de knop geklikt wordt in een array met een timestamp. Geef deze weer in een paragraaf onderaan de pagina.

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.

## Oefening 3

Maak een nieuw Angular-project h45-oefening3 in de root directory van deze repository. 
*   Maak een nieuwe component met de naam “calculator”. Geef deze de selector “app-calculator”.
*   Voorzie 2 tekstvakken. Beiden zijn gekoppeld aan variabele in de klasse van de component via 2-way binding.
*   Voorzie een knop “Optellen” die de 2 input waardes bij elkaar optelt. Het resultaat wordt getoond in een div.
*   Voorzie dat de div pas getoond wordt na het drukken op de knop (hidden).

![opdracht telmachine](https://i.imgur.com/ehEDZcJ.png "opdracht telmachine")

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.

## Oefening 4
Maak een nieuw Angular project h45-oefening4 in de root directory van deze repository. 
*   Maak een nieuwe component met de naam “pokemon”. Geef deze de selector “app-pokemon”. Als CSS voeg je onderstaande code toe en pas je aan waar nodig:
```
:host {
	padding: 1rem;
	margin: 0.5rem;
	border-radius: 3px;
	border: 1px solid #ccc;
	display: block;
}

```

*   Maak in de app.component.ts een array aan van de eerste 9 Pokémon uit de pokédex (objecten). 
```
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

```


*   Vanuit de app.component render je voor elke Pokémon een <app-pokemon> component. Plaats deze onder een h1 met als inhoud “Pokédex”.
*   Zorg ervoor dat de achtergrond van de <app-pokemon> variabel aanpast naarmate het type van de Pokémon. Grass Pokémon krijgen bijvoorbeeld een groene achtergrondkleur.
*   Bij het selecteren (klikken) van een Pokémon, wordt deze getoond onder de titel “pokedex”. Deze melding is enkel zichtbaar als een Pokémon geselecteerd is! Extra: voorzie een goude rand voor de geselecteerde pokemon.
*   Voorzie een afbeelding van elke pokémon in de assets folder. Plaats deze ook in onderstaande gridview.
*   Extra: nadat we gezien hebben hoe je API calls kan maken, kan je deze oefening uitbreiden met de [pokeAPI](https://pokeapi.co/) (week 8).

![pokedex](https://i.imgur.com/tM0EwBm.png "oefening pokedex")

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.

