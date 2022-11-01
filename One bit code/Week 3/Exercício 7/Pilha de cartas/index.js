"use strict";
// Deck of cards
let deck = [
  "rei de paus",
  "2 de paus",
  "3 de paus",
  "4 de paus",
  "rei de espadas",
  "2 de espadas",
  "3 de espadas",
  "4 de espadas",
  "2 de copas",
  "1 de copas",
  "3 de copas",
  "4 de copas",
  "rei de ouro",
  "2 de ouro",
  "3 de ouro",
  "4 de ouro",
  "rei de espadas",
  "2 de espadas",
  "3 de espadas",
  "4 de espadas",
  "6 de ouro",
  "9 de paus",
  "2 de espadas",
  "7 de copas",
  "rei de paus",
  "2 de paus",
  "3 de paus",
  "4 de paus",
  "rei de espadas",
  "2 de espadas",
  "3 de espadas",
  "4 de espadas",
  "2 de copas",
  "1 de copas",
  "3 de copas",
  "4 de copas",
  "rei de ouro",
  "2 de ouro",
  "3 de ouro",
  "4 de ouro",
  "rei de espadas",
  "2 de espadas",
  "3 de espadas",
  "4 de espadas",
  "6 de ouro",
  "9 de paus",
  "2 de espadas",
  "7 de copas",
  "rei de paus",
  "2 de paus",
  "3 de paus",
  "4 de paus",
  "rei de espadas",
  "2 de espadas",
  "3 de espadas",
  "4 de espadas",
  "2 de copas",
  "1 de copas",
  "3 de copas",
  "4 de copas",
  "rei de ouro",
  "2 de ouro",
  "3 de ouro",
  "4 de ouro",
  "rei de espadas",
  "2 de espadas",
  "3 de espadas",
  "4 de espadas",
  "6 de ouro",
  "9 de paus",
  "2 de espadas",
  "7 de copas",
  "rei de paus",
  "2 de paus",
  "3 de paus",
  "4 de paus",
  "rei de espadas",
  "2 de espadas",
  "3 de espadas",
  "4 de espadas",
  "2 de copas",
  "1 de copas",
  "3 de copas",
  "4 de copas",
  "rei de ouro",
  "2 de ouro",
  "3 de ouro",
  "4 de ouro",
  "rei de espadas",
  "2 de espadas",
  "3 de espadas",
  "4 de espadas",
  "6 de ouro",
  "9 de paus",
  "2 de espadas",
  "7 de copas",
];

let cards_menu = "";

// Menu options
while (cards_menu !== null) {
  // Cards game menu
  cards_menu = prompt(
    `Hi welcome to the card game!\nIn the deck still has ${deck.length} card\nWhat do you want to do?\n1 - Add a card to the deck\n2 - Take a card from the deck\n3 - Exit the game`
  );

  switch (cards_menu) {
    case "1":
      let card_added = prompt("Enter the card that you want to add");
      deck.push(card_added);
      break;
    case "2":
      let pull_card = deck.pop();
      alert(`The card that you have takes is ${pull_card}`);
      break;
    case "3":
      alert("You exit the game");
      cards_menu = null;
      break;
    default:
      alert("This option is invalid, try again");
  }
}
